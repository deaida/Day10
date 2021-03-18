function myFunction(){
    var myMusic = {
        001 : {
            artist : "Billy Joel",
            title : "Piano Man",
            release_year : 1973
            formats: {
                1 : "CD",
                2 : "8T",
                3 : "LP"
             },
             gold : true
        },
        002 : {
            "artist" : "Alma Subasic",
            "title" : "Sevdah",
            release_year : 2000 
            formats: {
                1 : "DC",
                2 : "Z8",
                3 : "a" // Adda record here

        }
    };
}
myFunction(myMusic)[2];
module.exports=myFunction;