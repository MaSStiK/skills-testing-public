// После прохождения показываем сообщение, но после перезагрузки страницы не отображаем его
if (localStorage.antifragile_showResultMessage) {
    $(".card__message").css("display", "flex");
    delete localStorage.antifragile_showResultMessage
}