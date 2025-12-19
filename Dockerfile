# Use a specific Node.js version
FROM node:20-alpine

# Set the working directory
WORKDIR /opt/app

# Copy package.json and package-lock.json to leverage Docker cache
COPY package.json ./
COPY package-lock.json ./

# Install production dependencies
RUN npm install --production

# Copy the rest of the application source code
COPY . .

# Build the Strapi admin panel for production
RUN npm run build

# Expose the Strapi port
EXPOSE 1337

# Start the Strapi application
CMD ["npm", "run", "start"]