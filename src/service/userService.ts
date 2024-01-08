import { Login } from '@models/login.model';
import { User} from '@models/user.model';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import { Kafka, logLevel,Producer } from 'kafkajs';


const prisma = new PrismaClient();

const kafka = new Kafka({
  clientId: 'user-group',
  brokers: ['kafka:9092'],
  logLevel: logLevel.INFO,
});
const producer = kafka.producer();

export const logIn = async (userData: Login) => {
  try {
    const { username, password } = userData;

    // Connect to Kafka producer
    await producer.connect();

    // Retrieve user from the database
    const user = await prisma.user.findUnique({
      where: { username: username},
    });

    // Check if the user exists and the password is correct
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error('Invalid credentials');
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user.id, email: user.username }, 'your-secret-key', {
      expiresIn: '1h',
    });

    // Publish a message to the 'user-topic' Kafka topic
    await producer.send({
      topic: 'user-topic',
      messages: [
        {
          value: JSON.stringify({
            username: user.username,
          }),
        },
      ],
    });

    // Disconnect from Kafka producer
    await producer.disconnect();

    // Return success message
    return { message: 'You are logged in', token };
  } catch (error) {
    // Handle errors
    console.error('Login error:', error);
    throw new Error('An error occurred during login');
  }
};



export const registerUser = async (userData: User) => {
  try {
    const { username, password } = userData;

    // Hash the user's password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user in the database
    const user = await prisma.user.create({
      data: { username, password: hashedPassword },
    });
    console.log("User has been created");
    
    return user;
  } catch (error) {
    console.error('Error creating user:', error);
    throw new Error('User registration failed');
  }
};
