function validateBook(
    dataBook: {
        name: { value: string; };
        year: { value: number; };
        pages: { value: number; };
    }, e: Event): void {
    if (!dataBook.name.value
        || +dataBook.year.value == 0
        || +dataBook.year.value < 0
        || +dataBook.pages.value == 0
        || +dataBook.pages.value < 0) {
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

function logout(): void {
    fetch('/admin', {
        method: 'GET',
        headers: {'Authorization': 'Basic'}
    }).then()
}