var express = require("express");
var app = express();

var mysql = require("mysql");
var connection = mysql.createConnection({
	host:"localhost",
	user: "tecweb",
	password: "tecweb",
	database: "ClickBus"
});

app.use(express.json());

app.get("/hoteis", (req, resp) => {
	console.log("GET - hoteis");

	connection.query("SELECT * FROM hoteis", (err, result) => {
		if (err) {
  			console.log(err);
  			resp.status(500).end();

  		} else {
  			resp.status(200);
  			resp.json(result);
  		}
	});
});

app.post("/hoteis", (req, resp) => {
  var hoteis = req.body;
  console.log("POST - Hoteis");

  connection.query("INSERT INTO hoteis SET ?", [hoteis], (err, result) => {
  	if (err) {
  		console.log(err);
  		resp.status(500).end();

  	} else {
  		resp.status(200);
  		resp.json(result);
  	}
  }); 
});

app.get("/hoteis/:hoteisId", (req, resp) => {
  var hoteisId = req.params.hoteisId;
  console.log("GET - HoteisId: " + hoteisId);

  connection.query("SELECT * FROM hoteis WHERE id = ?", [hoteisId], (err, result) => {
  	if (err) {
  		console.log(err);
  		resp.status(500).end();

  	} else {
  		resp.status(200);
  		resp.json(result);
  	}
  });  
});

app.put("/hoteis/:hoteisId", (req, resp) => {
  var hoteisId = req.params.hoteisId;
  var hoteis = req.body();
  console.log("PUT - HoteisId: " + hoteisId);

  connection.query("UPDATE hoteis SET ? WHERE id = ?", [hoteis, hoteisId], (err, result) => {
  	if (err) {
  		console.log(err);
  		resp.status(500).end();

  	} else {
  		resp.status(200).end();
  	}
  });
});

app.delete("/hoteis/:hoteisId", (req,resp) => {
  var hoteisId = req.params.hoteisId;
  console.log("DELETE - HoteisId: " + hoteisId);

  connection.query("DELETE FROM hoteis WHERE id = ?", [HoteisId], (err, result) => {
  	if (err) {
  		console.log(err);
  		resp.status(500).end();

  	} else {
  		resp.status(200).end();
  	}
  });
});

app.listen(3000, () => {
  console.log('EasyFinance - Port 3000!');
});