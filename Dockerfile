# Start from the Deno official image
FROM denoland/deno:2.2.5

# Work directory in container
WORKDIR /app

# Copy project files into container
COPY . .

# Stage 1: Install dependencies
FROM base AS deps
WORKDIR /app
RUN deno install

# Stage 2: Build the application
FROM base AS builder
WORKDIR /app
# Run tasks to set up the environment and application
RUN deno task types
# Build the project using your defined build task
RUN deno task build

# Expose port, assuming your app runs on this port
EXPOSE 3000

# Run application
CMD ["deno", "task", "standalone:start"]