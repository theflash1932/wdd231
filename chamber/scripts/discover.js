import attractions from "../data/interests.mjs";

const cards = document.querySelector("#discover-cards");

attractions.forEach(attraction => {
    const card = document.createElement("section");
    card.classList.add("discover-card");

    const title = document.createElement("h2");
    title.textContent = attraction.name;

    const figure = document.createElement("figure");

    const image = document.createElement("img");
    image.src = `images/${attraction.photo}`;
    image.alt = attraction.name;

    figure.appendChild(image);

    const address = document.createElement("address");
    address.textContent = attraction.address;

    const description = document.createElement("p");
    description.textContent = attraction.description;

    const button = document.createElement("button");
    button.textContent = "Learn More";

    card.appendChild(title);
    card.appendChild(figure);
    card.appendChild(address);
    card.appendChild(description);
    card.appendChild(button);

    cards.appendChild(card);
});