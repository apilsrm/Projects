const inputEl = document.getElementById("input");
const infoTextElement = document.getElementById("info-text");
const meaningContainerEl = document.getElementById("meaning-container");
const titleElement = document.getElementById("title");
const meaningElement = document.getElementById("meaning");
const audioElement = document.getElementById("audio")


async function fetchAPI(word) {
  // console.log("when u press enter it gives u typed word:",word)

  try {
    infoTextElement.style.display = "block";
    meaningContainerEl.style.display = "none";
   
    infoTextElement.innerText = `Searching the meaning of "${word}"`;
    const url = ` https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const result = await fetch(url).then((res) => res.json());
    // console.log("to see result response form url ",result);

    if(result.title){
        meaningContainerEl.style.display = "block";
        infoTextElement.style.display = "none";

        titleElement.innerText =word;
        meaningElement.innerText = "N/A";
        audioElement.style.display = "none";
        
    }else{
        
        infoTextElement.style.display = "none"; //after searching  when result conmes this text disappear
        meaningContainerEl.style.display = "block";
        audioElement.style.display = "inline-flex";
        titleElement.innerText = result[0].word;
        meaningElement.innerText = result[0].meanings[0].definitions[0].definition;
        audioElement.src = result[0].phonetics[0].audio;

    }

   
   
  } catch (error) {
    console.log(error);
    infoTextElement.innerText = `An error happend . Please check your connection or try again later !!! `;
  }
}
inputEl.addEventListener("keyup", (e) => {
  // console.log("this gives presses key vlaue :", e.target.value)
  if (e.target.value && e.key === "Enter") {
    fetchAPI(e.target.value);
  }
});
