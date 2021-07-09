let quoteHTML = document.querySelector(".quoteString");
let authorHTML = document.querySelector(".authorString");
let cardContainerHTML = document.querySelector(".cardContainer");
let quoteButton = document.querySelector(".quoteButton");

const getQuote = async () => {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    let quote = `${data.content}`;
    let author = `—${data.author}`;
    quoteHTML.innerHTML = quote;
    authorHTML.innerHTML = author;
};

const getPicturePicsum = async () => {
    let w = window.screen.width;
    let h = window.screen.height;
    const response = await fetch(`https://picsum.photos/${w}/${h}`);
    const data = await response;
    cardContainerHTML.style.backgroundImage = `url("${data.url}")`;
};

quoteButton.addEventListener("click", getQuote);
quoteButton.addEventListener("click", getPicturePicsum);

getQuote();
getPicturePicsum();
