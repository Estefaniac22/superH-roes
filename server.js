var bodyParser = require("body-parser");
var request = require("request");
var express = require("express");
var app = express();

app.use(express.static("statics"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",function(req, res){
  res.sendFile(__dirname + "/statics/heroesApp.html");

});
app.get("/api/hero/:id", function(req, res) {
  var itemId = req.params.id;
 // var itemId = 10;
  request(
    {
      url: "https://superheroapi.com/api/2572500469664410/" + itemId,
      json: false
    },
    function(error, response, body) {
      if (!error && response.statusCode === 200) {
       res.send(body);
      } else {
        res.send(error);
        console.log(error);
      }
    }
  );
});

var fakeDatabase = {
  'Batman': { name: 'Batman', photo: 'batman.jpg' },

  'Hulk': { name: 'Hulk', photo: 'hulk.jpg' },
  'Deadpool': {name: 'Deadpool', photo: 'deadpool.jpg'}
};

app.get('/data', (req, res) => {

  var allUsers = Object.keys(fakeDatabase);

  console.log("allUsers is.", allUsers);
  res.send(allUsers);
});
// data/1 o /data/2
app.get('/data/:heroesid', (req,res) => {
    var heroeABuscar = req.params.heroesid;
    var val = fakeDatabase[heroeABuscar];
  
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
