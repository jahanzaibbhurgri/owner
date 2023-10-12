import { createUser } from '../service/userService'; // Adjust the import path
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
describe('User Service Tests', () => {
    it('should create a new user', async () => {
      const createSpy = jest.spyOn(prisma.user, 'create').mockResolvedValue({
        id: 5,
        username: 'Jahanzaib',
        email: 'shubair12345@gmail.com',
      });
  
      const userData = {
        username: 'Jahanzaib',
        email: 'shubair12345@gmail.com',
      };
  
      const newUser = await createUser(userData);
      // Manually check properties
      
      //expect(newUser.id).toBe(5); // -> do see this problem //
      expect(newUser.username).toBe('Jahanzaib');
      expect(newUser.email).toBe('shubair12345@gmail.com');
      createSpy.mockRestore();
    });
  });
  
  /*
  it('should handle invalid input data', async () => {
    // Test case for handling invalid input data
    const userData = {
      username: 'Jahanzaib', // Missing email
    };

    try {
        
      await createUser(userData);
      // If it doesn't throw an error, the test should fail
      expect(true).toBe(false);
    } catch (error) {
      // Check if the error message matches the expected error message
      expect(error.message).toBe('Invalid input data');
    }
  });
});
*/