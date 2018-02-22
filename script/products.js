let katalog = document.getElementsByTagName("body")[0];
let sectionO = document.createElement("section");
sectionO.setAttribute("id", "productO");
katalog.appendChild(sectionO);


let cakeOne = {
    name: "Hallondröm",
    price: 60,
    desc: "Fluffiga cupcakes med frisk smak av hallon",
    img: "../images/cc1.jpg",
    btnId: 1

};

let cakeTwo = {
    name: "Vaniljbomb",
    price: 70,
    desc: "För dig som älskar vanilj rekommenderar vi denna vaniljbomb!",
    img: "../images/cc2.jpg",
    btnId: 2

};

let cakeThree = {
    name: "Chokladmums",
    price: 65,
    desc: "Choklad gånger tre, en chokladig upplevelse",
    img: "../images/cc3.jpg",
    btnId: 3

};

let cakeFour = {
    name: "Tigerkakan",
    price: 50,
    desc: "Den klassiska tierkakan i en ny spännande tappning",
    img: "../images/cc4.jpg",
    btnId: 4

};

let cakeFive = {
    name: "Morotsmums",
    price: 60,
    desc: "Morotskakan i en helt ny tappning",
    img: "../images/cc5.png",
    btnId: 5

};

let cakeSix = {
    name: "Prinsessan",
    price: 75,
    desc: "Kakan för den riktigt kräsna, denna cupcake har allt!",
    img: "../images/cc6.jpg",
    btnId: 6

};

let cakeSeven = {
    name: "Porslin",
    price: 80,
    desc: "Cupcakes är också en fin inredningsdetalj",
    img: "../images/cc7.jpg",
    btnId: 7

};

let cakeEight = {
    name: "Plommon",
    price: 50,
    desc: "Plommon är vår nyhet för säsongen, en lagom söt och god cupcake",
    img: "../images/cc8.jpg",
    btnId: 8

};

let cakeNine = {
    name: "Blåbär",
    price: 60,
    desc: "Blåbär är en favorit som nu äntligen är tillbaka",
    img: "../images/cc9.jpg",
    btnId: 9
};

let newArray = [cakeOne, cakeTwo, cakeThree, cakeFour, cakeFive, cakeSix, cakeSeven, cakeEight, cakeNine];

for(let i in newArray) {
    document.getElementById("productO").innerHTML += `<div><h3>${newArray[i].name}</h3><img src=' ${newArray[i].img}'/><p>${newArray[i].price} :-</p>${newArray[i].desc}<button id="${newArray[i].btnId}">Lägg i kundvagn</button></div>`;
}

let theParent = document.querySelector('#productO');
theParent.addEventListener('click', addtocart, false);
let carten = document.getElementById('cart');
let count = 0;

function addtocart(e) {
    if(e.target !== e.currentTarget){
        count ++;
        carten.innerHTML = count.toString();
    }
    e.stopPropagation()
}

