// Import necessary modules and types

import express, { Express, Request, Response } from 'express';
import swaggerUI from 'swagger-ui-express';
import swaggerSpec from './swagger';
import createUserRoute from './routers/user.route'; // Use a different name like userRouter
import { getAllUsers } from './controllers/userController';





// Create an instance of Express
const app: Express = express();
const port: number = 3000;



app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.use('/route', createUserRoute() ); 



// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 


