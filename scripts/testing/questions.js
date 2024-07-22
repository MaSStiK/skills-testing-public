let test = [
    {
        "id": 1,
        "question": "Оцени, какой рынок у продукта \"Курсы по подготовке к поступлению в физико-математические лицеи Санкт-Петербурга\"",
        "answer1": "Кратно масштабируемый",
        "answer2": "Неограниченный",
        "answer3": "Ограниченный",
        "answer4": "Городской",
        "answer5": "Затрудняюсь ответить",
    },
    {
        "id": 2,
        "question": "Что такое SWOT-анализ?",
        "answer1": "Расчет и построение конкурентной карты",
        "answer2": "Построение матрицы Портера",
        "answer3": "Анализ внутренних и внешних факторов",
        "answer4": "Все ответы верны",
        "answer5": "Затрудняюсь ответить",
    },
    {
        "id": 3,
        "question": "Команда в МVP вложила сложные фичи, уникальные характеристики, много времени. Оцени работу команды",
        "answer1": "МVP не требует уникальных характеристик",
        "answer2": "В MVP не нужно реализовывать сложные фичи",
        "answer3": "На MVP не стоит тратить много времени",
        "answer4": "Все варианты верные",
        "answer5": "Затрудняюсь ответить",
    },
    {
        "id": 4,
        "question": "Ключевые показатели каких объектов выделяют в HADI-цикле на этапе hypothesis",
        "answer1": "Проекта",
        "answer2": "Стартапа",
        "answer3": "Маркетинга",
        "answer4": "Все ответы верны",
        "answer5": "Затрудняюсь ответить",
    },
    {
        "id": 5,
        "question": "Укажи основной документ, в котором продакт-менеджер описывает все требования к продукту",
        "answer1": "Functional Specification",
        "answer2": "Product Requirement Document",
        "answer3": "Technical Requirements Document",
        "answer4": "Marketing Requirements Document",
        "answer5": "Затрудняюсь ответить",
    },
    {
        "id": 6,
        "question": "Команда работает несколько лет с продуктами группы N. Появилась идея перезапуска одного из продуктов из этой группы. На этапе изучения рынка, команда проанализировала весь рынок целиком. Они изучили продукты различных групп для разных целевых аудиторий. Оцени этот этап работы",
        "answer1": "Команде не нужно было изучать и анализировать рынок. Они уже несколько лет работают на этом рынке, информации по нему накоплено достаточно",
        "answer2": "Анализировать рынок должен один человек из команды, чтобы лучше структурировать информацию. Команда зря потратила время многих своих сотрудников",
        "answer3": "При разработке продукта важно анализировать аналогичные задуманному продукты (то есть продукты группы N) для своей целевой аудитории. Команда зря потратила ресурсы на излишний анализ",
        "answer4": "Команда хорошо отработала данный этап",
        "answer5": "Затрудняюсь ответить",
    },
    {
        "id": 7,
        "question": "К какой группе относятся прямые конкуренты?",
        "answer1": "Аналоги",
        "answer2": "Заменители",
        "answer3": "Вытеснители",
        "answer4": "Канальные",
        "answer5": "Затрудняюсь ответить",
    },
    {
        "id": 8,
        "question": "Какие этапы встречаются при MVP-проверке?",
        "answer1": "Общение с людьми",
        "answer2": "Проверка на макетах",
        "answer3": "Фейковая функциональность",
        "answer4": "Все ответы верны",
        "answer5": "Затрудняюсь ответить",
    },
    {
        "id": 9,
        "question": "Что такое независимая переменная гипотезы?",
        "answer1": "Параметр, который выбирается и меняется исследователем",
        "answer2": "Переменная, измеряемая в исследовании",
        "answer3": "Гипотетическое предположение",
        "answer4": "Предположение, утверждение, которое требует доказательства",
        "answer5": "Затрудняюсь ответить",
    },
    {
        "id": 10,
        "question": "Отметь верный вариант постановки проблемы в PRD",
        "answer1": "В Q2 необходимо заменить систему email-рассылки",
        "answer2": "В Q2 необходимо повысить конверсию открываемости сообщений email-рассылки",
        "answer3": "В Q2 необходимо повысить конверсию открываемости сообщений email-рассылки, в настоящее время конверсия всего 1",
        "answer4": "Нет правильного ответа",
        "answer5": "Затрудняюсь ответить",
    },
    {
        "id": 11,
        "question": "Какие исследования нацелены на строгую стандартизацию и формализацию процесса сбора и обработки информации?",
        "answer1": "Фокус-группа",
        "answer2": "Глубинное интервью",
        "answer3": "Количественные",
        "answer4": "Качественные",
        "answer5": "Затрудняюсь ответить",
    },
    {
        "id": 12,
        "question": "Команда продукта проанализировала конкурентов. Результат исследования - на рынке есть аналогичные продукты. Как поступить команде?",
        "answer1": "Провести анализ продуктов и сделать свой продукт лучше",
        "answer2": "Отказаться от производства данного продукта, так как он не уникален для рынка",
        "answer3": "Проанализировать рынок еще раз, чтобы уточнить (относительно существующих продуктов) их ЦА и удовлетворяемые потребности. Если эти показатели совпадают, то отказаться от разработки такого продукта",
        "answer4": "Переключиться на разработку другой ассортиментной группы",
        "answer5": "Затрудняюсь ответить",
    },
    {
        "id": 13,
        "question": "На какой стадии, из перечисленных, стоит проводить первые исследования мнений потенциальных пользователей относительно нового приложения?",
        "answer1": "Mocup",
        "answer2": "Prototype",
        "answer3": "Готовый продукт",
        "answer4": "После тестирования бета юзерами",
        "answer5": "Затрудняюсь ответить",
    },
    {
        "id": 14,
        "question": "Отметь ложное утверждение",
        "answer1": "Важно иметь возможность проверить гипотезу",
        "answer2": "Хорошим шаблоном для формулировки гипотезы является принцип “Если..., то...”",
        "answer3": "Тестовые гипотезы затрагивают качественные изменения",
        "answer4": "Гипотеза должна быть управляемой",
        "answer5": "Затрудняюсь ответить",
    },
    {
        "id": 15,
        "question": "Укажи правильную структуру PRD",
        "answer1": "Название и автор - Цель и сфера применения - Стейкхолдеры - Оценка рынка и целевая демография - Обзор продукта и варианты использования Требования - Предположения - Ограничения - Зависимости - Планы рабочих процессов высокого уровня, сроки и этапы - Планы оценки и показатели эффективности",
        "answer2": "Цель продукта - Особенности продукта - Критерии выпуска - Примерный график - Показатели успеха",
        "answer3": "Цель продукта - Показатели успеха - Допущения - Этапы - Требования - Открытые вопросы - Допущения",
        "answer4": "Все ответы верны",
        "answer5": "Затрудняюсь ответить",
    },
    {
        "id": 16,
        "question": "Команда задумалась над созданием нового продукта. На первой ежедневной встрече продакт предложил пропустить этап изучения рынка и сразу перейти к самому важному этапу - разработке MVP, так как сроки создания продукта уже поджимают. Как ты думаешь, какой оптимальный вариант решения в данной ситуации?",
        "answer1": "Изучение рынка - не самый важный этап, по необходимости его команда может пропустить",
        "answer2": "Важно выделить хотя бы одного человека из команды, который будет изучать рынок",
        "answer3": "Разработку продукта всегда стоит начать с MVP  и прототипирования",
        "answer4": "Если все в команде знают, что есть на рынке, то изучать его не нужно",
        "answer5": "Затрудняюсь ответить",
    },
    {
        "id": 17,
        "question": "Какой инструмент поможет определить положение компании относительно других конкурентов?",
        "answer1": "Матрица Ансоффа",
        "answer2": "Матрица Эйзенхауэра",
        "answer3": "Матрица Маккинзи",
        "answer4": "Все ответы верны",
        "answer5": "Затрудняюсь ответить",
    },
    {
        "id": 18,
        "question": "Команда доработала MVP. В день релиза новой версии продукта на большую аудиторию команда получила фитбек от первых пользователей - в продукте баги, влияющие на работоспособность. Что стоит сделать команде в такой ситуации?",
        "answer1": "Оставить продукт доступным для клиентов, поправит как можно быстрее",
        "answer2": "Объяснить клиентам, что на начальном этапе продукт может работать плохо и попросить дать обратную связь по встречающимся багам",
        "answer3": "Успокоить клиентов, сказать, что в скором времени все будет исправлено",
        "answer4": "Откатить новую версию",
        "answer5": "Затрудняюсь ответить",
    },
    {
        "id": 19,
        "question": "К какому виду относится гипотеза “Скидка 5% за вторую покупку, поможет вернуть 20% клиентов?",
        "answer1": "Гипотезы “лояльности”",
        "answer2": "Гипотезы “бренда”",
        "answer3": "Маркетинговые гипотезы",
        "answer4": "Контентные гипотезы",
        "answer5": "Затрудняюсь ответить",
    },
    {
        "id": 20,
        "question": "Что указывается в PRD?",
        "answer1": "SERM",
        "answer2": "KPI",
        "answer3": "Стейкхолдеры",
        "answer4": "Все ответы верны",
        "answer5": "Затрудняюсь ответить",
    },
    {
        "id": 21,
        "question": "Как можно собрать данные о рынке?",
        "answer1": "Заказать у агенства, пусть этим вопросом занимаются профессионалы",
        "answer2": "Провести исследования силами компании, никто лучше нас не знает наш рынок",
        "answer3": "Приобрести готовые исследования, в итоге это экономит ресурсы компании",
        "answer4": "Все ответы верны",
        "answer5": "Затрудняюсь ответить",
    },
    {
        "id": 22,
        "question": "Какова основная цель анализа конкурентов?",
        "answer1": "Улучшение своего продукта за счет внедрения лучших фичей продуктов конкурентов",
        "answer2": "Обнаружение слабых сторон продуктов конкурентов для ведения конкурентной борьбы, путем информирования пользователей об этих недостатках",
        "answer3": "Создание устойчивого преимущества продукта по сравнению с другими",
        "answer4": "Сбор базы данных для принятия наиболее оптимальных стратегических решений",
        "answer5": "Затрудняюсь ответить",
    },
    {
        "id": 23,
        "question": "Что такое Screenflow?",
        "answer1": "Список всех “экранов” мобильного приложения",
        "answer2": "Взаимосвязи “экранов” мобильного приложения",
        "answer3": "“Карта” мобильного приложения, помогающая построить CJM",
        "answer4": "Все ответы верны",
        "answer5": "Затрудняюсь ответить",
    },
    {
        "id": 24,
        "question": "Что значит p-value в работе с гипотезами?",
        "answer1": "Объем выборки, на которой будет проверяться гипотеза",
        "answer2": "Жизнеспособность нулевой гипотезы, которую мы оцениваем по имеющимся данным",
        "answer3": "Размер генеральной совокупности",
        "answer4": "Отношение объемов элементов различных выборок, участвующих в исследовании",
        "answer5": "Затрудняюсь ответить",
    },
    {
        "id": 25,
        "question": "Укажи ложное утверждение о product requirements document",
        "answer1": "PRD пишется совместно несколькими участниками процесса",
        "answer2": "PRD может уместиться на одной странице",
        "answer3": "PRD не может быть исчерпывающим постоянно",
        "answer4": "PRD заполняется и принимается единожды в начале проекта",
        "answer5": "Затрудняюсь ответить",
    },
    {
        "id": 26,
        "question": "Зачем рассчитывать Total Addressable Market?",
        "answer1": "Для прогноза объема выручки компании",
        "answer2": "Для планирования эффективной работы в краткосрочном периоде",
        "answer3": "Для понимания перспективы развития компании",
        "answer4": "Все ответы верны",
        "answer5": "Затрудняюсь ответить",
    },
    {
        "id": 27,
        "question": "Компания с помощью матрицы BCG определяет “Дойных коров” конкурентов. С какой целью проводится данный анализ?",
        "answer1": "Определение объема стабильной выручки конкурентов",
        "answer2": "Определение новых перспективных продуктов конкурентов",
        "answer3": "Определение провальных продуктов конкурентов",
        "answer4": "Определение своего положения относительно конкурентов",
        "answer5": "Затрудняюсь ответить",
    },
    {
        "id": 28,
        "question": "Что такое Minimum viable product?",
        "answer1": "Концепт продукта",
        "answer2": "Продукт, маржинальность которого равна нулю",
        "answer3": "Продукт, которым можно пользоваться",
        "answer4": "Минимальные ресурсозатраты на создание продукта",
        "answer5": "Затрудняюсь ответить",
    },
    {
        "id": 29,
        "question": "Что такое HADI?",
        "answer1": "Полный цикл эффективного менеджемента",
        "answer2": "Алгоритм проверки гипотезы",
        "answer3": "Методика продуктового анализа",
        "answer4": "Инструмент проектирования приложения",
        "answer5": "Затрудняюсь ответить",
    },
    {
        "id": 30,
        "question": "Для работы над каким продуктом в PRD может быть достаточно функционального описания?",
        "answer1": "Чат-бот",
        "answer2": "Мобильное приложение",
        "answer3": "ERP-система",
        "answer4": "LMS компании",
        "answer5": "Затрудняюсь ответить",
    }
]