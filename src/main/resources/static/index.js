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

// Toggle Button (uses local users)
function toggleUser() {

    id = (id + 1) % users.length;

    document.getElementById("user-image").src = users[id].img;
    document.getElementById("user-name").innerHTML = users[id].name;
    document.getElementById("user-gender").innerHTML = users[id].gender;
}

// Random Button (uses API)
function randomUser() {

    fetch("https://randomuser.me/api/")

        .then(function(response) {
            return response.json();
        })

        .then(function(data) {

            var userData = data.results[0];

            document.getElementById("user-image").src =
                userData.picture.large;

            document.getElementById("user-name").innerHTML =
                userData.name.first + " " + userData.name.last;

            document.getElementById("user-gender").innerHTML =
                userData.gender;

        })

        .catch(function(error) {
            console.log(error);
        });

}