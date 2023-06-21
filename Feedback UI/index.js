const ratingElements =  document.querySelectorAll(".rating");

const btnEl = document.getElementById("btn");
const containerEl = document.getElementById("container");


let selectedRating ="";

ratingElements.forEach((ratingElement) => {
   ratingElement.addEventListener("click", (e) => {
    removeActive();
    // console.log(e.target.innerText || e.target.parentNode.innerText);

    selectedRating = e.target.innerText || e.target.parentNode.innerText;

    e.target.classList.add("active");
    e.target.parentNode.classList.add("active");
   });
});

btnEl.addEventListener("click", () => {
    if(selectedRating !== ""){
        containerEl.innerHTML = `
        <strong> Thankyou you! </strong>
        <br>
        <br>
        <strong> Feedback : ${selectedRating} </strong>
        <p>We will use your feedback to improve our customer support. </p>  `

    }
})

function removeActive(){
    ratingElements.forEach((ratingElement) => {
        ratingElement.classList.remove("active");
    })
}