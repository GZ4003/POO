const fs = require('fs');

fs.writeFile("holaMundo.txt", "hola alexis", function(err){
    if(err) return console.log(err);
});

fs.readFile('./holaMundo.txt', "utf8", (err,data)=>{
    if(err){
        console.error(err)
        return 
    }
    console.log(data)
});