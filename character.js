let user1 = document.getElementById("user1");
let user2 = document.getElementById("user2");
let user3 = document.getElementById("user3");
let user4 = document.getElementById("user4");
let user5 = document.getElementById("user5");
let user6 = document.getElementById("user6");
let user7 = document.getElementById("user7");
let user8 = document.getElementById("user8");
let user9 = document.getElementById("user9");
let user10 = document.getElementById("user10");
let user11 = document.getElementById("user11");
let user12 = document.getElementById("user12");
let user13 = document.getElementById("user13");
let user14 = document.getElementById("user14");
let user15 = document.getElementById("user15");
let user16 = document.getElementById("user16");

let btnContinue = document.getElementById("btn-continue");
let character = document.getElementById("character");
let current_char = user1;
let playerProfile = document.getElementById("player-profile");

let users = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10, user11, user12, user13, user14, user15, user16];

for (i = 0; i < users.length; i++) {
    let c = users[i];

    c.addEventListener("click", function(){
        current_char = c;
        playerProfile.src = current_char.src;
        adjustScaleImg(c);
    })

}

// user1.addEventListener("click", function(){
//     current_char = user1;
//     playerProfile.src = current_char.src;
//     adjustScaleImg(this);
// })

// user2.addEventListener("click", function(){
//     current_char = user2;
//     playerProfile.src = current_char.src;
//     adjustScaleImg(this);
// })

// user3.addEventListener("click", function(){
//     current_char = user3;
//     playerProfile.src = current_char.src;
//     adjustScaleImg(this);
// })

btnContinue.addEventListener("click", function () {
    if (current_char != null) {
        character.style.display = "none";
        playerProfile.src = current_char.src
    }
})

function adjustScaleImg(user) {
    user.style.transform = "scale(1.1)"
    for (i = 0; i < users.length; i++) {
        if (users[i] != user) {
            users[i].style.transform = "scale(1.0)"
        }
    }
}