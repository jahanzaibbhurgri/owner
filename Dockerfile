# Use an official Node.js runtime as the base image
FROM node:latest

# Set the working directory in the container
WORKDIR /

# Copy package.json and package-lock.json to the container
COPY ./package*.json ./

# Install application dependencies
RUN npm install

# Install TypeScript globally in the container
RUN npm install -g typescript

# Bundle your TypeScript source code into the container
COPY . .

# Build your TypeScript application
RUN npm run build

# Expose the port your Express app will run on
EXPOSE 3001

# Specify the command to start your Express application
CMD [ "npm", "start" ]
