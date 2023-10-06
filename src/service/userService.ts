import { User } from "models/user.model";

async function createUser(userData : User) {
    try {
      // Here, you would typically interact with your database or perform other necessary operations to create a user.
      // For example, if you're using Prisma (as mentioned in your previous questions), you can use Prisma Client to create a user.
  
      // Example Prisma usage:
      // const newUser = await prisma.user.create({ data: userData });
  
      // Replace the above example with your actual user creation logic.
  
      // After successfully creating the user, return the user object.
      // In this example, we're returning a mock user object.
      return { id: 1, username: userData.username, email: userData.email };
    } catch (error) {
      // Handle any errors that may occur during user creation.
      throw error;
    }
  }
  
  export { createUser };