function myFunction(myObj, checkProp){
    // Only change code below this line
var myObj={ "title" : "Titanik","song ": "My hear Will Go On", "genre" : "drama"
};
myObj.hasOwnProperty("title");
myObj.hasOwnProperty("song");
myObj.hasOwnProperty("genre");
myObj.hasOwnProperty("actor");
 var myObj =myObj[checkProp];
 if(!hasOwnProperty){
    return "Change Me!";
}
return "Not Found";

    // Only change code above this line
}

console.log(myFunction());


module.exports = myFunction;