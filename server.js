// - - - - = = = = Configurations = = = = - - - - 

// express
const express = require('express');
const app = express();

// path
const path = require('path');

// body parser
const bodyParser = require('body-parser');

// middleware
app.use(express.static(__dirname + '/client/dist/client'));
app.use(bodyParser.json());

  // - - - - = = = = Routes = = = = - - - - 
  app 
    .all("*", (req,res,next) => {
        res.sendFile(path.resolve("./client/dist/client/index.html"))
  });

// - - - - = = = = Server Listener = = = = - - - - 
const port = 2828;
app.listen(port, ()=> console.log(`Express server listening on port ${port}`));