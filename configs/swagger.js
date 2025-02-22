import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options ={
    swaggerDefinition:{
        openapi:"3.0.0",
        info:{
            title: "Gestor de opiniones",
            version: "1.0.0",
            description: "Gestor de opiniones",
            contact:{
                name: "David Morente",
                email: "dmorente-2023292@kinal.org.gt"
            }
        },
        servers:[
            {
                url: "http://localhost:27017/opinionSystem/v1"
            }
        ]
    },
    apis:[
        "./src/auth/*.js",
        "./src/user/*.js",
        "./src/categories/*.js",
        "./src/publication/*.js",
        "./src/comments/*.js"
    ]
}

const swaggerDocs = swaggerJSDoc(options)

export { swaggerDocs, swaggerUi }