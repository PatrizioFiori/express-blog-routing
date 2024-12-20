const express = require('express');
const router = require('./routers/rout.js');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use('/posts', router);

app.listen(port, () => {
    console.log(`Sono in ascolto alls porta ${port}`);
});

//Da approfondire l'argomento.