# Use the Node.js image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and pnpm-lock.yaml files
COPY package.json pnpm-lock.yaml ./

# Install dependencies using pnpm
RUN npm install -g pnpm
RUN pnpm install

# Copy the rest of the application code
COPY . .

# Build the application (for Next.js or other frameworks)
RUN pnpm build

# Expose port 3000 to the host
EXPOSE 3000

# Start the application
CMD ["pnpm", "start"]
