let GuestList : string[] = [`Hasnain`,`ayan`,`osaid`];
for(let i=0; i<GuestList.length; i++){
    console.log(`Respected` + GuestList [i], `,\n i invited you to my houde for dinner.\n`);
}
let notpresent : string = `osaid`;
let newGuest : string = `shayan`;
GuestList[1] = newGuest;
for(let i=0; i<GuestList.length; i++){
    console.log(`Respected` + GuestList [i], `,\n i invited you to my houde for dinner.\n`);
}
console.log(`Mr. ${notpresent} will not comming tommorow dinner.`);