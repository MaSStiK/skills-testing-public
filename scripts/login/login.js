// Функция отображения ошибки
function setFormError(error) {
    $(`.login__form button[type=submit`).attr("disabled", true).html("Подождите") // Блокируем кнопку
    $(`.login__form .form-error`).text(error).css("opacity", "1") // Отображаем ошибку формы
    setTimeout(() => {
        $(`.login__form button[type=submit`).removeAttr("disabled").html("Войти") // Разблокируем кнопку через 5 секунд
    }, 2000)
}

// Нажатие на логотип PS
$(".login__logo").on("click tap", () => {
    window.open("https://productstar.ru/", "_blank")
})



// Маска ввода номера телефона
const phoneMask = IMask($("#form-phone")[0], {mask: "+0(000)000-00-00"})

// Поле name, удаление лишних пробелов
$("#form-name").on("change", () => {
    $("#form-name").val($("#form-name").val().replace(/ +/g, " ").trim())
})

// Поле email, удаление всех пробелов
$("#form-email").on("change", () => {
    $("#form-email").val($("#form-email").val().replaceAll(" ", "").trim())
})

// Автоматические скрытие ошибки при обновлении инпутов
$(".login__form input").on("input", () => {
    $(".form-error").css("opacity", "0")
})

$(".login__form").submit((event) => {
    event.preventDefault() // Отключение базового перехода
    $(".form-error").css("opacity", "0") // Прячем ошибку
    
    // Получаем поля из фомы
    const formData = new FormData($(".login__form")[0])
    const formPhone = phoneMask.unmaskedValue.trim()
    const formEmail = formData.get("email").trim()

    // Проверка поля Номер телефона на регулярном выражении (является ли значение числом) или не равен 11 символам
    let rePhone = /^-?\d+$/
    if (!rePhone.test(formPhone) || formPhone.length !== 11) {
        setFormError("Неверный формат номера телефона!")
        return
    }

    // Проверка поля Почты на регулярном выражении
    let reEmail = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i
    if (!reEmail.test(formEmail)) {
        setFormError("Неверный формат email!")
        return
    }

    // Если поле почты не заполнено
    if (!formEmail.length) {
        setFormError("Вы не заполнили поле email!")
        return
    }

    // Проверка максимальной длины почты
    if (formEmail.length > 50) {
        setFormError("Длина email не может превышать 50 символов!")
        return
    }

    // Если все проверки прошло - отключаем кнопку и ждем ответа от сервера
    $("#register-user").attr("disabled", true).html("Подождите")

    let newData = {
        nickname: "Без имени",
        phone: formPhone,
        email: formEmail,
    }

    localStorage.clear()
    
    // Сохраняем информацию о пользователе
    localStorage.antifragile_userData = JSON.stringify(newData)

    // Успешный вход
    window.open("../testing", "_self")
})