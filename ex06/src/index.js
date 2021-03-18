// Create lion object here
var lion= {
    name : "Simba",
    legs : 4,
    tails : 1
};
// End of lion object 
function myFunction(newProp, propValue){
    lion[newProp] = propValue;
    return lion;
     // Only change code below this line
}
var lion= myFunction("roar", "roar-roar");
console.log(lion);
module.exports= myFunction;