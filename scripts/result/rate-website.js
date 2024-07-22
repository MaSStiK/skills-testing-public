// Оценка вебсайта
// Переключение неактивной звездочки на активную
$(".rate-website__stars").on("click tap", "img", (event) => {
    $(".rate-website__stars img").removeClass("active") // Снимаем со всех звездочек выбор
    $(event.target).addClass("active") // Ставим текущему элементу активность
    $(event.target).prevAll().addClass("active") // И всем предыдущим

    // Разблокируем кнопку
    $("#send-website-rate").removeAttr("disabled")
})

$("#send-website-rate").on("click tap", () => {
    // Текущая дата
    let date = new Date()

    let hours = date.getHours().toString()
    hours = hours.length !== 2 ? "0" + hours : hours // Формат часов 00

    let minutes = date.getMinutes().toString()
    minutes = minutes.length !== 2 ? "0" + minutes : minutes // Формат минут 00

    let day = date.getDate().toString()
    day = day.length !== 2 ? "0" + day : day // Формат дня 00

    let month = (date.getMonth() + 1).toString() // Добавляем 1 т.к. месяц начинается с нуля
    month = month.length !== 2 ? "0" + month : month // Формат месяца 00

    let year = date.getFullYear()

    let textDate = `${day}.${month}.${year} - ${hours}:${minutes}`

    // Оценка
    let stars = $(".rate-website__stars .active").length.toString()


    localStorage.rateWebsite = "true"
    localStorage.rateWebsiteStars = stars
    showSendedWebsiteRate()
})

function showSendedWebsiteRate() {
    $("#send-website-rate").remove()
    $(".rate-website__message").show()

    // Снимаем активацию звезд и указатель делаем нормальный
    $(".rate-website__stars").unbind("click")
    $(".rate-website__stars img").css("cursor", "default")

    // Устанавливаем оценку которую отправляли
    let stars = parseInt(localStorage.rateWebsiteStars)
    $(`.rate-website__stars img:nth-of-type(${stars})`).addClass("active")
    $(`.rate-website__stars img:nth-of-type(${stars})`).prevAll().addClass("active") // И всем предыдущим
}

// Если пользователь уже оценил сайт, то сразу показываем
if (localStorage.rateWebsite) {
    showSendedWebsiteRate()
}