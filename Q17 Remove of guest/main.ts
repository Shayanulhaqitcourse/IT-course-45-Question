let GuestList : string[] = [`Hasnain`,`ayan`,`osaid`];
// for(let i=0; i<GuestList.length; i++){
//     console.log(`Respected` + GuestList [i], `,\n i invited you to my houde for dinner.\n`);
// }
let notpresent : string = `osaid`;
let newGuest : string = `shayan`;
GuestList[1] = newGuest;
for(let i=0; i<GuestList.length; i++){
    console.log(`Respected` + GuestList [i], `,\n i invited you to my house for dinner.\n`);
}
GuestList.unshift(`babar`,`rizwan`,`shaheen`);
// for(let i=0; i<GuestList.length; i++){
//     console.log(`Respected` + GuestList [i], `,\n i invited you to my house for dinner.so we decided to invite 3 more guest.\n`);
//}
console.log(`\nunfortuneatly we cant able to arrange big table , Only two people allowed.\n`);
while(GuestList.length>2){
    let removeGuest = GuestList.pop();
    console.log(`Sorry ${removeGuest} you are not invited for dinner.`);
}
for(let i=0; i<GuestList.length; i++)  {
     console.log(`Respected` + GuestList [i], `,\n Yes you are still invited for tommorow dinner.\n`);
    }
    GuestList.splice(0,2);
    console.log(GuestList);