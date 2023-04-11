function validateBook(dataBook: {
                          name: { value: string; };
                          year: { value: string | number; };
                      },
                      e: Event) {
    if (!dataBook.name.value || isNaN(+dataBook.year.value) || +dataBook.year.value == 0) {
        e.preventDefault();
    }
}

function deleteBook(id: number) {
    fetch('./api/v1/' + id, {
        method: "DELETE"
    })
}