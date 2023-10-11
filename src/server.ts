// Import necessary modules and types

import express, { Express, Request, Response } from "express";
import router from "./routers/user.route";
import bodyParser from "body-parser";
import swaggerExport from "./config";



// Create an instance of Express
const app: Express = express();
const port: number = 3000;

app.use(bodyParser.json());
app.use('/api-docs', swaggerExport.swaggerServe,swaggerExport.swaggerSetup);
app.use("/", router);



// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
