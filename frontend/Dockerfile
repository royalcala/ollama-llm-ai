FROM node:18-alpine

WORKDIR /app
# Make package-lock.json optional with the * wildcard
COPY package.json package-lock.json* ./
RUN npm install
COPY . .

EXPOSE 5173
CMD ["npm", "run", "dev"]