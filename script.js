let str = document.querySelector(".quoteString").textContent; //document.getElementById("quoteString").textContent;
console.log(str);

const getQuote = async () => {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    let string = `${data.content} ----- ${data.author}`;
    document.querySelector(".quoteString").innerHTML = string; //document.getElementById("quoteString").innerHTML = string;
    printStr(string);
};

const printStr = (string) => {
    console.log(string);
};

document.querySelector(".quoteButton").addEventListener("click", getQuote);

//printing quote at the start
getQuote();
