function make_sandwitch() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a SandWitch with: ".concat(items.join(','), "."));
}
make_sandwitch("ham", "cheese");
make_sandwitch("turkey", "lettuce", "tomato");
make_sandwitch("avocanda", "sprouts", "mustard", "mayo");
