const btnElement = document.getElementById("btn");
const emojiNameElement = document.getElementById("emoji-name");
const emojiGroupElement = document.getElementById("emoji-group");
const emojiSubGroupElement = document.getElementById("emoji-subGroup");
const emojiCodeElement = document.getElementById("emoji-code");

const emoji =[];

async function getEmoji(){
    let response = await fetch("https://emoji-api.com/emojis?access_key=ab432d9940210388da7cca6cb16f3b56f0f627dc");
   data = await response.json();
  console.log(data);
   
  //run loop uptoo 2690 emoji data
  for(let i=0; i<2690; i++){
  emoji.push({
     emojiCharacter:data[i].character,
     emojiName:data[i].unicodeName,
     emojiCode:data[i].codePoint,
     emojiGroup:data[i].group,
     emojiSubGroup:data[i].subGroup,
  });

  }

}

//one time call 
getEmoji();


btnElement.addEventListener("click",()=> {
    const randomNum =  Math.floor(Math.random() * emoji.length);
    btnElement.innerText =emoji[randomNum].emojiCharacter;
    emojiNameElement.innerText= "Name : " + emoji[randomNum].emojiName;
    emojiGroupElement.innerText =  "Group : " + emoji[randomNum].emojiGroup;
    emojiSubGroupElement.innerText = "SubGroup : " + emoji[randomNum].emojiSubGroup;
    emojiCodeElement.innerText = "Code : " + emoji[randomNum].emojiCode;
    

    
})

