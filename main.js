const res = require("express/lib/response");

console.log("Esto esta bien")

const URL = "https://api.thecatapi.com/v1/images/search";
fetch(URL)
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        data[0].url
    })




    //cules son las cosas que deberia de ahcer no se la neta me siento ineguro

