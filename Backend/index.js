var express = require("express");
var cors = require("cors");
var app = express();
app.use(cors());

var server = app.listen(999);
require("./controllers/socket.js")(server);
