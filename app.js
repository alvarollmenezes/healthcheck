const express = require( 'express' );
const os = require( 'os' );

let app = express();
let subApp = express();

subApp.get( '/', ( req, res ) => {

    let r = '<html><body><center><br><br><br><h1>Servidor: '
    + os.hostname() + '</h1><h1>'
    + new Date().toISOString().slice( 0, 19 )
    + '</h1><h1>'
    + ( req.get( 'HTTP_X_FORWARDED_FOR' ) || req.connection.remoteAddress )
    + '</center></body></html>';

    return res.send( r );
} );

subApp.get( '/teste', ( req, res ) => {

    return res.send( JSON.stringify( req.headers ) );
} );

let path = process.env.REQUEST_PATH || '/nlb';
app.use( path, subApp );

console.log( 'Listening on ' + 4242 );

app.listen( 4242 );
