function configurar(app) {
    
    var env = process.env.NODE_ENV || 'dev';


    console.log(env + " - " + process.env.NODE_ENV );
    if(env === 'dev' || env === 'development' ) {
        const expressSwagger = require('express-swagger-generator')(app);
        const expressJsdoc = require('swagger-jsdoc')(app);
        
        
        let options = {
            swaggerDefinition: {
                info: {
                    description: 'This is a sample server',
                    title: 'Swagger',
                    version: '1.0.0',
                },
                host: 'localhost:3000',
                // basePath: '/v1',
                produces: [
                    "application/json",
                    "application/xml"
                ],
                schemes: ['http', 'https'],
                securityDefinitions: {
                    JWT: {
                        type: 'apiKey',
                        in: 'header',
                        name: 'Authorization',
                        description: "",
                    }
                }
            },
            basedir: __dirname,
             files: ['./usuario/**/*.js'] //Path to the API handle folder
            // ,apis: ['./*.js'] //Path to the API handle folder
        };
        expressSwagger(options);
        const swaggerSpec =  expressJsdoc (options);
    }
}
module.exports = {
    configurar
};