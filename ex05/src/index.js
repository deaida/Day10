// Create school object here
var school = {
    name : "Arena",
    location : "Sarajevo",
    established : "2020"
};
function myFunction(name){
    // Only change code above this line
    school.name= name;
    return school;
    // Only change code above this line
}

var school=myFunction("Paragon");
console.log(school);
module.exports = {school, myFunction};