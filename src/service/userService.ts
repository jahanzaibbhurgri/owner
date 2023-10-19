import { Login } from '@models/login.model';
import { User} from '@models/user.model';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'



const prisma = new PrismaClient();


export const registerUser = async (userData: User) => {
  const { name, email, password } = userData;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { name, email, password: hashedPassword},
    });

    return user;
  } catch (error) {
    console.error('Error creating user:', error);
    throw new Error('User registration failed');
  }
};


export const logIn = async (userData: Login) => {
  const { email, password } = userData;

  const user = await prisma.user.findUnique({
    where: { email },
    include: { roles: true },
  });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error('Invalid credentials');
  }

  const token = jwt.sign({ userId: user.id, email: user.email }, 'your-secret-key', {
    expiresIn: '1h',
  });

  return "You are logged in "
};





