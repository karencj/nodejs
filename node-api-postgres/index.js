const express = require('express')
const bodyParser = require('body-parser')

const app = express();
exports.app = app;
const port = process.env.PORT || 3000

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
}) 

//========================================
//************Rotas******** */
//========================================
const rotas = require('./rotas'); 
rotas.configurar(app);



//========================================
//************Swagger******** */
//========================================
//const expressSwagger = require('./expressSwagger');
//expressSwagger.configurar(app);


