const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author .name"),
quoteBtn = document.querySelector("button");


function randomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading quote..."
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
        console.log(result);
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText = "New quote..."
    })
}
quoteBtn.addEventListener("click", randomQuote);