var magecians = ["Hussain", "Shiraz", "Akbar"];
function make_great(magecians) {
    var greatMagecians = [];
    magecians.forEach(function (magecians) {
        greatMagecians.push("".concat(magecians, " the Great"));
    });
    return greatMagecians;
}
function show_magecians(magecians) {
    var greatMagecians = [];
    magecians.forEach(function (magecians) {
        greatMagecians.push("".concat(magecians, " the Great"));
    });
    return greatMagecians;
}
var greatMagecians = make_great(magecians.slice());
console.log("Original Magecian:");
show_magecians(magecians);
console.log("Great Magecian:");
show_magecians(greatMagecians);
console.log(magecians);
