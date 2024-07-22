// Кнопка "Начать" в блоке с инструкцией начинает тестирование
$("#show-rate-yourself").on("click tap", () => {
    $(".testing-info-section").hide()
    $(".testing-section").css("display", "flex")
    startTesting()
})

// Если нету информации об регистрации - удаляем и перекидаем на главную страницу
if (!localStorage.antifragile_userData) {
    localStorage.clear()
    window.open("../", "_self")
} else { // В ином случае проверяем есть ли сохраненная информация о тестировании
    if (localStorage.antifragile_questionCurrent) {
        if (Date.now() - localStorage.antifragile_questionLastClicked > 60000) {
            // Если прошло больше 10 минут с последнего ответа - удаляем прогресс
            $(".testing-info-section").css("display", "flex")

            delete localStorage.antifragile_questions
            delete localStorage.antifragile_questionLastClicked
            delete localStorage.antifragile_questionCurrent
            delete localStorage.antifragile_timer
            delete localStorage.antifragile_finalTime
            delete localStorage.antifragile_progress
        } else { // Если прошло меньше 10 минут, отображаем последний вопрос
            $(".testing-section").css("display", "flex")
            startTesting(parseInt(localStorage.antifragile_questionCurrent))
        }
    } else { // Если нету информации о сохраненном тесте
        $(".testing-info-section").css("display", "flex")
    }
}