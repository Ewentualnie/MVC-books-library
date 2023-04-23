function validateBook(
    dataBook: {
        name: { value: string; };
        year: { value: string | number; };
    }, e: Event): void {
    if (!dataBook.name.value || isNaN(+dataBook.year.value) || +dataBook.year.value == 0) {
        e.preventDefault();
    }
}

function deleteBook(id: number): void {
    fetch('./api/v1/' + id, {
        method: "DELETE"
    }).then((res: Response) => {
        if (res.ok) {
            window.location.reload();
        }
    })
}