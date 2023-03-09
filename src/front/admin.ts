import {FormDataBook} from "../models/types";

function validateBook(dataBook: FormDataBook, e: Event) {
    if (!dataBook.name.value || isNaN(+dataBook.year.value) || +dataBook.year.value == 0) {
        e.preventDefault();
    }
}