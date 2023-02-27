function submitForm(e: any) {
    const form: HTMLFormElement = <HTMLFormElement>document.getElementById('add-book')
    let FORM: FormData;
    if (form) {
        FORM = new FormData(form)
        console.log(form)
        console.log(FORM)
    }
}