let user1 = document.getElementById("user1");
let user2 = document.getElementById("user2");
let user3 = document.getElementById("user3");

let btnContinue = document.getElementById("btn-continue");
let character = document.getElementById("character");
let current_char = user1;
let playerProfile = document.getElementById("player-profile");

let users = [user1, user2, user3];

user1.addEventListener("click", function(){
    current_char = user1;
    playerProfile.src = current_char.src;
    adjustScaleImg(this);
})

user2.addEventListener("click", function(){
    current_char = user2;
    playerProfile.src = current_char.src;
    adjustScaleImg(this);
})

user3.addEventListener("click", function(){
    current_char = user3;
    playerProfile.src = current_char.src;
    adjustScaleImg(this);
})

btnContinue.addEventListener("click", function(){
    if(current_char != null)
    {
        character.style.display = "none";
        playerProfile.src = current_char.src
    }
})

function adjustScaleImg(user)
{
    user.style.transform = "scale(1.2)"
    for(i=0; i<users.length; i++)
    {
        if(users[i] != user)
        {
            users[i].style.transform = "scale(1.0)"
        }
    }
}