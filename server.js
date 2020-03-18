const express = require("express");
const app = express();

app.use(express.static("statics"));

const fakeDatabase = {
  'Batman': { name: 'Batman namee', photo: 'batman.jpg' },

  'Hulk': { name: 'Hulk namee', photo: 'hulk.jpg' },
  'Deadpool': {name: 'Deadpool', photo: 'deadpool.jpg'}
};

app.get('/data', (req, res) => {

  const allUsers = Object.keys(fakeDatabase);

  console.log("allUsers is.", allUsers);
  res.send(allUsers);
});
// data/1 o /data/2
app.get('/data/:heroesid', (req,res) => {
    const heroeABuscar = req.params.heroesid;
    const val = fakeDatabase[heroeABuscar];
  
    console.log(heroeABuscar, '->', val); //le paso el nro del heroe
    if(val){
        res.send(val);
    }else{
        res.send({});
    }
});
app.listen(8888, () => {
  console.log("Server is running..at http://localhost:8888");
});
