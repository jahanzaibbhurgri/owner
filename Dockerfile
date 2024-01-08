# Use the official Node.js image as the base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port the app runs on
EXPOSE 30005

# Command to run your application
CMD ["bash", "-c", "npx prisma generate &&  npx prisma db push --schema ./schema.prisma --accept-data-loss && npm uninstall bcrypt && npm install bcrypt && npm start"]
