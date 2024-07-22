// Отобразить модальное окно "Карьерный консультант"
$("#card-open-modal").on("click tap", () => {
    $("body").addClass("no-scroll") // Отключаем прокрутку
    $(".card-modal__container").addClass("show") // Показываем модальное окно

    // Клик вне мадального окна закрывает его
    $(document).click((event) => {
        if ($(event.target).is(".card-modal__container")) {
            $("#card-close-modal").click()
        }
    })
})

// Скрыть модальное окно "Карьерный консультант"
$("#card-close-modal").on("click tap", () => {
    $(".card-modal__container").removeClass("show") // Скрываем модальное окно
    $("body").removeClass("no-scroll") // Включаем прокрутку

    // Убираем прослушку клика
    $(document).unbind("click")
})