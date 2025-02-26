const button = document.getElementById("btn");
const color = document.querySelector(".color");

const colors = [
    "#276fcc",
    "#27b9cc", 
    "#27ccb6", 
    "#27cc8d", 
    "#27cc50"
];

const hex = [
    "0","1","2","3","4","5","6","7","8","9","A","B","C","D","F"
];


button.addEventListener("click", function() {
    let hexColor = generateHex();
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
    color.style.color = hexColor;
    
});

function generateHex() {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }

    return hexColor;
}

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}