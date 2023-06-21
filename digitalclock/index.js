let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");


//to update every sec use setinterval 
// setInterval(() => {
//  let currentTime = new Date();
//  hrs.innerHTML = currentTime.getHours();
//  min.innerHTML = currentTime.getMinutes();
//  sec.innerHTML = currentTime.getSeconds();
// },1000)


// added o1, 02, 03 features 
setInterval(() => {
 let currentTime = new Date();

    hrs.innerHTML = (currentTime.getHours()<10?"0":"")+ currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes()<10?"0":"")+ currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds()<10?"0":"")+ currentTime.getSeconds();
},1000)








//to display time in page
// let currentTime = new Date();
//  hrs.innerHTML = currentTime.getHours();
//  min.innerHTML = currentTime.getMinutes();
//  sec.innerHTML = currentTime.getSeconds();




// let currentTime = new Date();
// console.log(currentTime.getHours());
// console.log(currentTime.getMinutes());
// console.log(currentTime.getSeconds());

