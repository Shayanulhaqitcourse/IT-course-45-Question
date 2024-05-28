let magecians : string[] = ["Osaid","Mubashir","Ahmed"];
function make_great(magecians: string[]) {
    for(let i = 0; i < magecians.length; i++) {
        magecians[i] = magecians[i] + "the Great";
    }
}
function show_magecians(magecians: string[]) {
    for(let i = 0; i < magecians.length; i++) {
        magecians[i] = magecians[i] + "the Great";
    }
}
make_great(magecians);
show_magecians(magecians);
console.log(magecians);