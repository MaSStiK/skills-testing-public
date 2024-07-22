// Поделится медалькой linkedin
$(".card-data__medal-share-linkedin").on("click tap", () => {
    let url = "https://www.linkedin.com/shareArticle?mini=true"
    url += "&url=" + encodeURIComponent("https://micro.productstar.ru/antifragile")
    window.open(url)
})

// Поделится медалькой вк
$(".card-data__medal-share-vk").on("click tap", () => {
    let url = "https://vk.com/share.php"
    url += "?url=" + encodeURIComponent("https://micro.productstar.ru/antifragile")
    url += "&title=" + encodeURIComponent("Друзья, я попал в ТОП-3 рейтинга продактов и получил супер-бейдж! Присоединяйтесь, будем бороться за первое место вместе")
    url += "&image=" + encodeURIComponent("https://static.tildacdn.com/tild3766-6431-4833-a230-306531393636/card-medal.png")
    url += "&noparse=true"
    window.open(url)
})


// Поделится сайтом linkedin
$(".rate-website__share-linkedin").on("click tap", () => {
    let url = "https://www.linkedin.com/shareArticle?mini=true"
    url += "&url=" + encodeURIComponent("https://micro.productstar.ru/antifragile")
    window.open(url)
})

// Поделится сайтом вк
$(".rate-website__share-vk").on("click tap", () => {
    let url = "https://vk.com/share.php"
    url += "?url=" + encodeURIComponent("https://micro.productstar.ru/antifragile")
    url += "&title=" + encodeURIComponent("Друзья, делюсь бесплатным тестом по управлению продуктами. Узнал много нового и попал в рейтинг с другими продактами. Присоединяйтесь!")
    url += "&image=" + encodeURIComponent("https://static.tildacdn.com/tild3866-3938-4362-a364-613930663735/vk-sharepng.png")
    url += "&noparse=true"
    window.open(url)
})