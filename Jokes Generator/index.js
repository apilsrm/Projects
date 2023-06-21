// const btnElement = document.getElementById("btn")
// function getJoke(){
//     document.write("i click") whwn click button this is printed
// }
// btnElement.addEventListener("click",getJoke)

const btnElement = document.getElementById("btn");

const jokeElement = document.getElementById("joke");

const apikey = "xS92POnhdYStL4YJLjZBKA==j2t7b0sOKipNKT8u";
const options = {
  method: "GET",
  headers: { "X-API-Key": apikey },
};


const apiURL = "https://api.api-ninjas.com/v1/jokes?limit=1";

async function getJoke() {
 try {
    //before fetching 
    jokeElement.innerText = "Updating...";
    //disable the button while fetching/updating
    btnElement.disabled = true;
    btnElement.innerText = "Loding..."

    //afterv fetching
  const response =  await fetch(apiURL, options);
  const data =  await response.json();

  //enable the button again
  btnElement.disabled = false;
  btnElement.innerText = "TELL ME A JOKE"

  /* change the text on box --- display joke in browser */
   jokeElement.innerText = data[0].joke;



    
 } catch (error) {
    jokeElement.innerText="Error occur , Please try again"
    btnElement.disabled = false;
    btnElement.innerText = "TELL ME A JOKE"
 }

} //await is used to wait untill we get data then run 2nd line data
btnElement.addEventListener("click", getJoke );


