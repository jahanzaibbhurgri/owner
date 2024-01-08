// Import necessary modules and types

import express, { Express, Request, Response } from "express";
import router from "./routers/user.route";
import bodyParser from "body-parser";
import swaggerExport from "./config";
import cors from "cors"; // Import the cors middleware




// Create an instance of Express
 export const app: Express = express();

 const PORT= 30005;

 app.use(cors({
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: false,
}));

app.use(bodyParser.json());
app.use('/api-docs', swaggerExport.swaggerServe,swaggerExport.swaggerSetup);
app.use("/", router);



// Start the Express server
app.listen(PORT,"0.0.0.0",() => {
  console.log(`Server is running on port ${PORT}`);
});
