const express = require("express");

let app = express();
let subApp = express();

app.get('/nlb', (req, res) => {
    
    return res.send('Ok.');
});

let path = process.env.REQUEST_PATH || '';
app.use(path, subApp);

app.listen(4242);
