var GuestList = ["Hasnain", "ayan", "osaid"];
for (var i = 0; i < GuestList.length; i++) {
    console.log("Respected" + GuestList[i], ",\n i invited you to my houde for dinner.\n");
}
var notpresent = "osaid";
var newGuest = "shayan";
GuestList[1] = newGuest;
for (var i = 0; i < GuestList.length; i++) {
    console.log("Respected" + GuestList[i], ",\n i invited you to my houde for dinner.\n");
}
console.log("Mr. ".concat(notpresent, " will not comming tommorow dinner."));
