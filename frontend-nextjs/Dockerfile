FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./
RUN npm install

# Copy source code
COPY . .

# Expose port
EXPOSE 3000

# Development mode with hot reloading
CMD ["npm", "run", "dev"]
