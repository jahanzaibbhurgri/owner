import express,{ Express, Request, Response } from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";



const options: swaggerJsdoc.Options = {
  definition: {
    swagger: "3.0.0",
    info: {
      title: "REST API Docs",
      version: "1.2.0", // Updated version string
    },
    servers: [
      {
        url: 'http://localhost:3000', // Updated base URL of your API
      },
    ],
  },
  apis: ["./user.route.ts"],
};


const app = express();
const swaggerSpec = swaggerJsdoc(options);
app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerSpec))
export default swaggerSpec;


/*
function swaggerDocs(app: Express, port: number) {
  // Swagger page
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  // Docs in JSON format
  app.get("/docs.json", (req: Request, res: Response) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });


}

export default swaggerDocs;
*/

/*
import swaggerJSDoc from 'swagger-jsdoc';
import express from 'express';
import swaggerUI from 'swagger-ui-express';
import { Router } from 'express';
const options = {
  definition: {
    openApi: '3.0.0', // Specify the OpenAPI version
    info: {
      title: 'Your API', // Specify a title
      version: '1.0.0', // Specify a version
      description: 'API documentation for Your API', // Specify a description
    },
    servers: [
      {
        url: 'http://localhost:3000/api', // Specify the base URL of your API
      },
    ],
  },
  // Paths to files containing OpenAPI annotations
  apis: ['./src/routes/*.ts'],
};

const swaggerSpec = swaggerJSDoc(options);


const app = express();

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
Router.get('/users', );

export default swaggerSpec;
*/

