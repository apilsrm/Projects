const btnElement = document.getElementById("btn");
const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");


const apiURL = "https://api.quotable.io/random";

 async function getQuote(){ 
   
    try {
       
       //before fetching result 
        btnElement.innerText = "Loading...";
        btnElement.disabled = true;
        quoteElement.innerText = "Updating...";
        authorElement.innerText = "Updating...";

        //fetching result 
        const response = await fetch(apiURL)
        const data = await response.json();
        const quoteContent = data.content;
        const quoteAuthor = data.author;
        quoteElement.innerText = quoteContent;
        authorElement.innerText = `~ ${quoteAuthor}`; // "~ "+quoteAuthor

        //Afetr result 

        btnElement.innerText = "GET A QUOTE";
        btnElement.disabled = false;

    } catch (error) {
        console.log(error);
        quoteElement.innerText = "An error happened. Please check your connection or Try again ";
        authorElement.innerText = "An error happened.Try again ";
        btnElement.innerText = "GET A QUOTE";
        btnElement.disabled = false;

    }

}
// call function 1 time ... when u visit 1st time on  web shows result 
getQuote();

btnElement.addEventListener("click",getQuote);