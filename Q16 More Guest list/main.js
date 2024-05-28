var GuestList = ["Hasnain", "ayan", "osaid"];
// for(let i=0; i<GuestList.length; i++){
//     console.log(`Respected` + GuestList [i], `,\n i invited you to my houde for dinner.\n`);
// }
var notpresent = "osaid";
var newGuest = "shayan";
GuestList[1] = newGuest;
for (var i = 0; i < GuestList.length; i++) {
    console.log("Respected" + GuestList[i], ",\n i invited you to my house for dinner.\n");
}
GuestList.unshift("babar", "rizwan", "shaheen");
for (var i = 0; i < GuestList.length; i++) {
    console.log("Respected" + GuestList[i], ",\n i invited you to my house for dinner.so we decided to invite 3 more guest.\n");
}
