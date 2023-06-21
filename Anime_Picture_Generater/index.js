const btnElement = document.getElementById("btn")
const animeContainerEl = document.querySelector(".anime-container");
const animeImgEl = document.querySelector(".anime-img");
const animeNameEl = document.querySelector(".anime-name");

async function getAnime(){
    try {
        //while updating/fetching (before to fetch)
        btnElement.disabled= true;
        btnElement.innerText="Loading...";
        animeNameEl.innerText = "Updating...";
        animeImgEl.src = "loader.svg";

        //fetch url
        const response = await fetch("https://api.catboys.com/img");
        //convert response into json formate
        const data = await response.json();

        //after fetching fineshed(back to normal)
        btnElement.disabled= false;
        btnElement.innerText="Get Anime";


        //change animecontainer  display to block
        animeContainerEl.style.display = "block";
        animeImgEl.src = data.url;
        animeNameEl.innerText = data.artist;

        
    } catch (error) {
        console.log(error);
        btnElement.disabled = false;
        btnElement.innerText = "Get Anime";
        animeNameEl.innerText = "An error happened, Please try again";
    }

};

btnElement.addEventListener("click", getAnime);
