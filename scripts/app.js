const newsItems = document.querySelectorAll(".news__item");



function carousel(elements) {
    elements.forEach(element => {
        setInterval(() => {
            element.classList.add("news__item-carousel")
        }, 2000)
    })
}

carousel(newsItems)