const url = 'members.json';
const cards = document.querySelector("#cards");

const displayBusinesses = (businesses) => {
    businesses.forEach(business => {
        let card = document.createElement("section");
        let fullName = document.createElement("caption");
        let dob = document.createElement("p");
        let pob = document.createElement("p");
        let portrait = document.createElement("img");

        fullName.textContent = `${business.name}`;
        dob.textContent = `Address: ${business.address}`;
        pob.textContent = `Industry: ${business.industry}`;

        portrait.setAttribute("src", business.logo_url);
        portrait.setAttribute("alt", `Portrait of ${business.name}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');
        card.appendChild(fullName);
        card.appendChild(dob);
        card.appendChild(pob);
        card.appendChild(portrait);
        cards.appendChild(card);
    });
}

async function getBusinessData() {
    const response = await fetch(url);
    const data = await response.json();
    displayBusinesses(data.businesses);
}

getBusinessData();