let current_user : string[] = [`Hasnain`,`Ayan`,`Shayan`,`Osaid`,`Ahmed`];
let new_user : string[] = [`Hayan`,`Hussain`,`user7`,`admin`,`user9`];
new_user.forEach((newUser) => {
    if (
        current_user.some(
            (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
        )
    ){
        console.log(`${newUser} will need to enter a new username.`);
    }else{
        console.log(`${newUser} is available.`);
    }
}
);