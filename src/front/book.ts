function increaseCount(id: number) {
    fetch('./api/v1', {
        method: "POST",
        body: JSON.stringify({id}),
        headers: {'Content-Type': 'application/json'}
    }).then((res: Response): void => {
        if (res.ok) alert(
            "Книга вільна і ти можеш прийти за нею." +
            " Наша адреса: м. Кропивницький, Василівський провулок 10, 5 поверх." +
            " Краще попередньо зателефонувати і попередити нас, щоб " +
            " не потрапити у незручне становище. Тел. 099 196 24 69"
        )
    })
}