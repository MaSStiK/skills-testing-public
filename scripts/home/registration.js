// Функция отображения ошибки
function setFormError(error) {
    $(`.registration__form button[type=submit`).attr("disabled", true).html("Подождите") // Блокируем кнопку
    $(`.registration__form .form-error`).text(error).css("opacity", "1") // Отображаем ошибку формы
    setTimeout(() => {
        $(`.registration__form button[type=submit`).removeAttr("disabled").html("Зарегистрироваться") // Разблокируем кнопку через 5 секунд
    }, 2000)
}


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
$(".registration__form input").on("input", () => {
    $(".form-error").css("opacity", "0")
})

$(".registration__form").submit((event) => {
    event.preventDefault() // Отключение базового перехода
    $(".form-error").css("opacity", "0") // Прячем ошибку
    
    // Получаем поля из фомы
    const formData = new FormData($(".registration__form")[0])
    const formNickname = formData.get("nickname").trim()
    const formPhone = phoneMask.unmaskedValue.trim()
    const formEmail = formData.get("email").trim()
    const formPolicy = formData.get("policy")

    // Если поле имя не заполнено
    if (!formNickname.length) {
        setFormError("Вы не заполнили поле имя!")
        return
    }
    // Проверка максимальной длины никнейма
    if (formNickname.length > 32) {
        setFormError("Длина никнейма не может превышать 32 символов!")
        return
    }

    // Проверка на плохие слова
    let badWords = new RegExp("(?<=(^|[^а-я]))(([уyu]|[нзnz3][аa]|(хитро|не)?[вvwb][зz3]?[ыьъi]|[сsc][ьъ']|(и|[рpr][аa4])[зсzs]ъ?|([оo0][тбtb6]|[пp][оo0][дd9])[ьъ']?|(.\B)+?[оаеиeo])?-?([еёe][бb6](?!о[рй])|и[пб][ае][тц]).*?|([нn][иеаaie]|([дпdp]|[вv][еe3][рpr][тt])[оo0]|[рpr][аa][зсzc3]|[з3z]?[аa]|с(ме)?|[оo0]([тt]|дно)?|апч)?-?[хxh][уuy]([яйиеёюuie]|ли(?!ган)).*?|([вvw][зы3z]|(три|два|четыре)жды|(н|[сc][уuy][кk])[аa])?-?[бb6][лl]([яy](?!(х|ш[кн]|мб)[ауеыио]).*?|[еэe][дтdt][ь']?)|([рp][аa][сзc3z]|[знzn][аa]|[соsc]|[вv][ыi]?|[пp]([еe][рpr][еe]|[рrp][оиioеe]|[оo0][дd])|и[зс]ъ?|[аоao][тt])?[пpn][иеёieu][зz3][дd9].*?|([зz3][аa])?[пp][иеieu][дd][аоеaoe]?[рrp](ну.*?|[оаoa][мm]|([аa][сcs])?([иiu]([лl][иiu])?[нщктлtlsn]ь?)?|([оo](ч[еиei])?|[аa][сcs])?[кk]([оo]й)?|[юu][гg])[ауеыauyei]?|[мm][аa][нnh][дd]([ауеыayueiи]([лl]([иi][сзc3щ])?[ауеыauyei])?|[оo][йi]|[аоao][вvwb][оo](ш|sh)[ь']?([e]?[кk][ауеayue])?|юк(ов|[ауи])?)|[мm][уuy][дd6]([яyаиоaiuo0].*?|[еe]?[нhn]([ьюия'uiya]|ей))|мля([тд]ь)?|лять|([нз]а|по)х|м[ао]л[ао]фь([яию]|[её]й))($|[^а-я])")
    if (badWords.test(formNickname)) {
        setFormError("Недопустимый никнейм!")
        return
    }

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

    // Проверка галочки политики конфиденциальности
    if (!formPolicy) {
        setFormError("Вы не поставили галочку!")
        return
    }


    // Если все проверки прошло - отключаем кнопку и ждем ответа от сервера
    $("#register-user").attr("disabled", true).html("Подождите")

    // Сохраняем информацию
    localStorage.userNickname = formNickname
    localStorage.userPhone = formPhone,
    localStorage.userEmail = formEmail

    let newData = {
        nickname: formNickname,
        phone: formPhone,
        email: formEmail,
    }

    localStorage.clear()
    
    // Сохраняем информацию о пользователе
    localStorage.antifragile_userData = JSON.stringify(newData)

    // Успешная регистрация
    window.open("../testing", "_self")
})