let users : string[] = [`Hasnain`,`Ayan`,`Shayan`,`Osaid`];
for(let user of users){
   if(user === "admin"){
    console.log("Hello admin, would you like to see status report?");
   }

else{
    console.log(`Hello ${user}, thank you for logging it again`);
}
}