// Array of Users

var users = [

    {

        name: "John Doe",

        gender: "Male",

        img: "john.png"

    },

    {

        name: "Jane Doe",

        gender: "Female",

        img: "jane.png"

    }

];

// Current User

var id = 0;

// Toggle User

function toggleUser(){

    id = (id + 1) % 2;

    var userImage = document.getElementById("user-image");

    var userName = document.getElementById("user-name");

    var userGender = document.getElementById("user-gender");

    userImage.src = users[id].img;

    userName.innerHTML = users[id].name;

    userGender.innerHTML = users[id].gender;

}

// Random User

function randomUser(){

    id = Math.floor(Math.random() * users.length);

    var userImage = document.getElementById("user-image");

    var userName = document.getElementById("user-name");

    var userGender = document.getElementById("user-gender");

    userImage.src = users[id].img;

    userName.innerHTML = users[id].name;

    userGender.innerHTML = users[id].gender;

}