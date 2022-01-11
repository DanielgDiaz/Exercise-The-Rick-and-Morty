const superCards = document.getElementById('super-cards');
const cardTemplate = document.getElementById('card-template').content

document.addEventListener("DOMContentLoaded", () => {
    fetchData()
})

const fetchData = async () => {
    try {
        const res = await fetch("https://rickandmortyapi.com/api/character")
        const data = await res.json()
        createCards(data)

    } catch (error) {console.log('error');}
}

const createCards = data => {
    const fragment = document.createDocumentFragment();
    data.results.forEach(element => {
        console.log(element);
        const clone = cardTemplate.cloneNode(true)
        clone.querySelector("h5").textContent = element.name
        clone.querySelector("p").textContent = element.status
        clone.querySelector("img").setAttribute("src", element.image)

        fragment.appendChild(clone)
    });

    superCards.appendChild(fragment)
}