let magecians: string[] = ["Hussain", "Shiraz", "Akbar"];
function make_great(magecians: string[]): string[] {
    let greatMagecians = [];
    magecians.forEach(magecians => {
        greatMagecians.push(`${magecians} the Great`);
    });
    return greatMagecians;
}
function show_magecians(magecians: string[]): string[] {
    let greatMagecians = [];
    magecians.forEach(magecians => {
        greatMagecians.push(`${magecians} the Great`);
    });
    return greatMagecians;
}
let greatMagecians = make_great(magecians.slice());
console.log("Original Magecian:");
show_magecians(magecians);
console.log("Great Magecian:");
show_magecians(greatMagecians);
console.log(magecians);