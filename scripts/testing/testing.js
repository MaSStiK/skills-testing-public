let questionCurrent = 0
let questionsMax = test.length
let timer = 60
let progress = [] // Прогресс прохождения

let timerInterval // id интервала с таймером


function renderQuestion(startTimer=60) {
    // Если вопрос после последнего
    if (questionCurrent === 30) {
        sendTesting()
        return
    }

    // Обновляем таймер
    timer = startTimer 
    $(".testing__bottom-timer span").text(timer);


    // Меняем номер вопроса
    $(".testing__question-number span").text(`${questionCurrent + 1}/${questionsMax}`);

    // Снимает выбранный ответ
    $(".testing__answer input[type=radio]").prop("checked", false)

    // Устанавливаем вопрос и ответы
    $(".testing__question").text(test[questionCurrent].question)
    $("#testing__answer-1 .answer-label").text(test[questionCurrent].answer1)
    $("#testing__answer-2 .answer-label").text(test[questionCurrent].answer2)
    $("#testing__answer-3 .answer-label").text(test[questionCurrent].answer3)
    $("#testing__answer-4 .answer-label").text(test[questionCurrent].answer4)
    $("#testing__answer-5 .answer-label").text(test[questionCurrent].answer5)

    // Останавливаем предыдущий таймер
    clearInterval(timerInterval)

    // Запускаем таймер
    timerInterval = setInterval(() => {
        timer--
        $(".testing__bottom-timer span").text(timer);
        localStorage.antifragile_timer = timer // Сохраняем таймер

        // Если время вышло
        if (timer < 1) {
            // Переход на следующий вопрос
            $("#question-next").click()
            $(".testing__bottom-timer span").text(timer);
        }
    }, 1000)
}

// Рендерим первый вопрос
function startTesting(startFrom=0) {
    localStorage.antifragile_questionLastClicked = Date.now() // Сохраянем время запуска

    // // Если есть сохраненные вопросы  
    if (localStorage.antifragile_questions) {
        test = JSON.parse(localStorage.antifragile_questions)
    }

    // Если запуск с начала
    if (!startFrom) {
        localStorage.antifragile_questionCurrent = 0
        // localStorage.antifragile_timer = 60
        localStorage.antifragile_finalTime = 0
        localStorage.antifragile_progress = []
        // Рендерим первый вопрос, если человек перезапустил на 0 вопросе, то проверяем есть ли значение в памяти
        renderQuestion(localStorage.antifragile_timer ? parseInt(localStorage.antifragile_timer) : 60)
    } else {
        // Запуск из памяти
        progress = JSON.parse(localStorage.antifragile_progress)
        questionCurrent = parseInt(localStorage.antifragile_questionCurrent)
        // Рендерим последний вопрос на который не ответил пользователь
        renderQuestion(parseInt(localStorage.antifragile_timer))
    }
}


// Следующий вопрос
$("#question-next").on("click tap", () => {
    // Сохраняем время перехода на следующий вопрос
    localStorage.antifragile_questionLastClicked = Date.now()

    // Сохраняем результат
    let answer = $("input[name=answer]:checked").val()
    if (answer) {
        progress.push({
            id: test[questionCurrent].id,
            answer: parseInt(answer.split("-")[1])
        })
    } else { // Если нету ответа, то просто 5
        progress.push({
            id: test[questionCurrent].id,
            answer: 5
        })
    }

    localStorage.antifragile_progress = JSON.stringify(progress)

    questionCurrent++
    // Сохраянем текущий номер вопроса
    localStorage.antifragile_questionCurrent = questionCurrent

    // Сохраняем время которое понадобилось на ответ
    localStorage.antifragile_finalTime = parseInt(localStorage.antifragile_finalTime) + (60 - timer)
    renderQuestion()
})

function sendTesting() {
    clearInterval(timerInterval) // Останавливаем таймер
    $("#question-next").unbind("click tap")

    // Время прохождения
    let finalTime = parseInt(localStorage.antifragile_finalTime)

    // Минуты
    let finalTimeM = Math.floor(finalTime / 60)
    finalTimeM = String(finalTimeM).length !== 2 ? "0" + finalTimeM : finalTimeM  // Формат минут 00

    // Секунды
    let finalTimeS = finalTime % 60
    finalTimeS = String(finalTimeS).length !== 2 ? "0" + finalTimeS : finalTimeS  // Формат секунд 00

    let timekeeping = `00:${finalTimeM}:${finalTimeS}`


    // Текущая дата
    let date = new Date()

    // День
    let day = date.getDate().toString()
    day = day.length !== 2 ? "0" + day : day // Формат дня 00

    // Месяц
    let month = (date.getMonth() + 1).toString() // Добавляем 1 т.к. месяц начинается с нуля
    month = month.length !== 2 ? "0" + month : month // Формат месяца 00

    // Год
    let year = date.getFullYear()

    let exam_date = `${day}/${month}/${year}`

    // Ответы
    let answers = {}

    progress.forEach(answer => {
        answers[answer.id] = answer.answer
    })

    let correctAnswers = [3,3,3,4,3,3,1,4,1,4,3,1,1,3,4,2,3,4,1,3,4,3,4,2,4,3,1,3,2,1]

    let number_correct_answers = 0

    for (let answer of Object.keys(answers)) {
        if (answers[answer] == correctAnswers[answer - 1]) number_correct_answers++
    }

    let newData = {
        timekeeping: timekeeping,
        exam_date: exam_date,
        number_correct_answers: number_correct_answers,
        grade: Math.round(100 / 30 * number_correct_answers)
    }

    localStorage.antifragile_card = JSON.stringify(newData)

    // Результат записан
    window.open("../result", "_self")

    // Удаляем информацию об тестировании из браузера
    delete localStorage.antifragile_questions
    delete localStorage.antifragile_questionLastClicked
    delete localStorage.antifragile_questionCurrent
    delete localStorage.antifragile_timer
    delete localStorage.antifragile_finalTime
    delete localStorage.antifragile_progress


    // Устанавливаем отображение сообщения
    localStorage.antifragile_showResultMessage = "true"
}

function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
  
    return array;
}

// Если нужно перемешать вопросы, мешает только 1 раз
let urlParams = new URLSearchParams(window.location.search)
if (urlParams.get("shuffle")) {
    if (!localStorage.antifragile_questions) {
        localStorage.antifragile_questions = JSON.stringify(shuffle(test))
    }
}