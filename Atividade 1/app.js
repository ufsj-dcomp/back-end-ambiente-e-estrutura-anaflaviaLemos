const express = require( 'express' )
const app = express()
const port = 3000


app.get( '/', ( req, res ) => {
    res.send( "Olá!\n");
});


app.listen( port, () => {
    console.log( `Aplicativo executando na porta ${port}!\n` );
});


app.get( "/aplicativo", ( req, res ) => {
    res.send( "Aplicativo Exemplo!\n" );
});


app.get( "/html", ( req, res ) => {
    res.sendFile( __dirname + '/hello.html' );
});

app.post( "/imagens", (req, res) => {
    res.send( "Imagem 1 - Imagem 2 - Imagem 3.\n" );
});

app.delete( "/clientes/:num/", (req, res) => {
    res.send( `Cliente número ${req.params.num} removido com sucesso.\n` );
});

	 
    
