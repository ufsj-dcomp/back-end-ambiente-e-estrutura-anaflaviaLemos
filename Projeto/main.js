var express = require("express");
var cors = require('cors');
var jwt = require('jsonwebtoken');
var app = express();

var mysql = require("mysql");
var connection = mysql.createConnection({
	host:"localhost",
	user: "root",
	password: "",
	database: "ClickBus"
});

app.use(cors());
app.use(express.json());

app.post('/auth', (req, resp) => {
	var user = req.body;

	connection.query("SELECT * FROM usuario WHERE nome = ? and senha = ? " ,  [user.nome, user.senha], (err, result) =>{
		var usuario = result[0];

		if(result.lenght ==0){
			resp.status(401);
			resp.send({token: null, usuario: usuario, success: false});
		} else {
			let token = jwt.sign({id: usuario.nome}, 'ClickBus', {expiresIn: 6000});
			resp.status(200);
			resp.send({token: token, usuario: usuario, success: true});
		}
	});
});

verifica_token = (req, resp, next) =>{
	var token = req.headers['x-access-token'];

	if (!token){
		return resp.status(401).end();
	}

	jwt.verify(token, 'ClickBus', (err, docoded) => {
		if(err)
			return resp.status(401).end();

		req.usuario = decoded.id;
		next();
	});
}

app.get("/hoteis", verifica_token, (req, resp) => {
	console.log("GET - hoteis");

	connection.query("SELECT * FROM hoteis", (err, result) => {
		if (err) {
  			console.log(err);
  			resp.status(500).end();

  		} else {
  			resp.status(200);
  			resp.json(result.insertedId);
  		}
	});
});

app.post("/hoteis", verifica_token, (req, resp) => {
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

app.get("/hoteis/:hoteisId", verifica_token, (req, resp) => {
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

app.put("/hoteis/:hoteisId", verifica_token, (req, resp) => {
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

app.delete("/hoteis/:hoteisId", verifica_token, (req,resp) => {
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