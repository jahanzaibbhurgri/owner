
import express from 'express';
import bodyParser from 'body-parser';
import { PrismaClient } from '@prisma/client';
import { createUser } from 'controllers/userController';






const prisma = new PrismaClient();
const app = express();

app.use(bodyParser.json());

// User routes
app.post('/users', createUser);

/*
app.get('/users', getAllUsers);
app.get('/users/:id', getUserById);
app.put('/users/:id', updateUser);
app.delete('/users/:id', deleteUser);
*/
/*

// Product routes
app.post('/products', createProduct);
/*
app.get('/products', getAllProducts);
app.get('/products/:id', getProductById);
app.put('/products/:id', updateProduct);
app.delete('/products/:id', deleteProduct);
*/