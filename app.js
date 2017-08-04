const express = require( 'express' );
const os = require( 'os' );

const PORT = process.env.PORT || 4242;

const app = express();

app.use( ( req, res ) => {

    let r = '<html><body><center><br><br><br><h1>Servidor: '
    + os.hostname() + '</h1><h1>'
    + new Date().toISOString().slice( 0, 19 )
    + '</h1><h1>'
    + ( req.get( 'HTTP_X_FORWARDED_FOR' ) || req.connection.remoteAddress )
    + '</center></body></html>';

    return res.send( r );
} );

app.listen( PORT );

console.log( 'Listening on ' + PORT );
