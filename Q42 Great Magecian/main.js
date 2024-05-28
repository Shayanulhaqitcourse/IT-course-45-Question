var magecians = ["Osaid", "Mubashir", "Ahmed"];
function make_great(magecians) {
    for (var i = 0; i < magecians.length; i++) {
        magecians[i] = magecians[i] + "the Great";
    }
}
function show_magecians(magecians) {
    for (var i = 0; i < magecians.length; i++) {
        magecians[i] = magecians[i] + "the Great";
    }
}
make_great(magecians);
show_magecians(magecians);
console.log(magecians);
