let request = require("request");
let express = require("express");
let got = require("got");

let app = express();

const{ Router } = require('express');
const router = Router();


router.get('/api/hero/:id', async(req,res, next) =>{
async function getSuperHeroesById(){
    return new Promise((resolve, reject) => {
        got.get('https://superheroapi.com/api/2572500469664410/'+ req.params.id)
        
        .then(data =>{
            let heroes = JSON.parse(data.body)
           // console.log(heroes);
            resolve({
                data:heroes
            })
        }).catch(error =>{
            reject({
                error:error
            })
        });

    })
}
 
getSuperHeroesById = await getSuperHeroesById();
 res.status(200).json({ 
   //  ok:true,
    // mensaje: 'Peticion realizada correctamente',
      data: getSuperHeroesById
 })  
 /*
 const info = Object.keys(getSuperHeroesById);

 console.log("all info is.", info);
 res.send(info); */
});




module.exports = router;