var current_user = ["Hasnain", "Ayan", "Shayan", "Osaid", "Ahmed"];
var new_user = ["Hayan", "Hussain", "user7", "admin", "user9"];
new_user.forEach(function (newUser) {
    if (current_user.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " will need to enter a new username."));
    }
    else {
        console.log("".concat(newUser, " is available."));
    }
});
