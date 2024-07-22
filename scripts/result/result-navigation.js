// Кнопка "Рейтинг" в card, прокручивает страницу до блока рейтинга
$("#goto-rating").on("click tap", () => {
    $("#rating").get(0).scrollIntoView({behavior: 'smooth'})
})


// Кнопка "Выйти" в card выходит из профиля
$("#exit-profile").on("click tap", () => {
    localStorage.clear()
    window.open("../", "_self")
})


// Если нету информации об регистрации или одного из полей, то удаляем и перекидаем на главную страницу
if (!localStorage.antifragile_userData) {
    localStorage.clear()
    window.open("../", "_self")
}