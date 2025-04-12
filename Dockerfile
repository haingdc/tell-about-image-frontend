# Start from the Deno official image
FROM denoland/deno:2.2.6

# Work directory in container
WORKDIR /app

# Copy project files into container
COPY . .

# Stage 1: Install dependencies
RUN deno install
RUN deno install --allow-scripts=npm:sharp@0.34.0,npm:sharp@0.33.5,npm:sharp@0.34.1,npm:core-js-pure@3.41.0

# Stage 2: Build the application
# Run tasks to set up the environment and application
RUN deno task types
# Build the project using your defined build task
RUN deno task build

# Expose port, assuming your app runs on this port
EXPOSE 3000

# Run application
CMD ["deno", "task", "standalone:start"]