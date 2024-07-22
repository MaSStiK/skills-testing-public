// Нажатие на логотип PS
$(".header__logo").on("click tap", () => {
    window.open("https://productstar.ru/", "_blank")
})


// Кнопка "Участвую" в header, прокручивает страницу до блока регистрации
$("#goto-registration").on("click tap", () => {
    $("#registration").get(0).scrollIntoView({behavior: 'smooth'})
})


// Кнопка "Рейтинг участников" в header, прокручивает страницу до блока с рейтингом
$("#goto-rating").on("click tap", () => {
    $("#rating").get(0).scrollIntoView({behavior: 'smooth'})
})


// Кнопка "Участвую" в rating, прокручивает страницу до блока регистрации
$("#rating-goto-registration").on("click tap", () => {
    $("#registration").get(0).scrollIntoView({behavior: 'smooth'})
})


// Отображаем рейтинг
showRating()