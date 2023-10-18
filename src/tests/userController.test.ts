// userController.test.ts

import { describe, it } from '@jest/globals';
import { Request, Response } from 'express';


import request from 'supertest';
import express from 'express';
import { createUser, getAllUsers, getUserById } from '../controllers/userController'


const app = express();

  describe('User Controller Tests', () => {
    it('should create a new user', async () => {
      const req = { body: { username: 'Jahanzaib', email: 'shubair12345@gmail.com' } } as Request;
      const json = jest.fn();
      const status = jest.fn().mockReturnValue({ json });
  
      const res: Response = {
        json,
        status,
      } as unknown as Response;
  
      await createUser(req, res);
      expect(status).toHaveBeenCalledWith(201); // Check for the correct status code (201)
      expect(json).toHaveBeenCalledWith(expect.objectContaining({ username: 'Jahanzaib', email: 'shubair12345@gmail.com' }));
    });
  });
  
 
  
  describe('User Controller Tests', () => {
    it('should get a user by ID', async () => {
      const userId = 1; // Replace with a valid user ID in your database
      const req = { params: { id: userId } } as unknown as Request; // Set the ID as a parameter
      const json = jest.fn();
      const status = jest.fn().mockReturnValue({ json });
  
      const res: Response = {
        json,
        status,
      } as unknown as Response;
  
      await getUserById(req, res);

      expect(status).toHaveBeenCalledWith(201); // Check for the correct status code (201)
      expect(json).toHaveBeenCalledWith(expect.objectContaining({ username: 'Jahanzaib', email: 'shubair12345@gmail.com' }));
    });
  });


app.get('/users', getAllUsers); // Set up a route for the getAllUsers function
describe('User Controller Tests', () => {
  it('should get all users', async () => {
    const response = await request(app).get('/users');

    expect(response.status).toBe(201); // Check for the correct status code (201)
    expect(response.body).toEqual(expect.any(Array)); // Check that the response body is an array
  });
});  


