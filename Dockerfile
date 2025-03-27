# Start from the Deno official image
FROM denoland/deno:2.2.5

# Work directory in container
WORKDIR /app

# Copy project files into container
COPY . .

RUN deno install

# Run tasks to set up the environment and application
RUN deno task types

# Build the project using your defined build task
RUN deno task build

# Expose port, assuming your app runs on this port
EXPOSE 3000

# Run application
CMD ["deno", "task", "standalone:start"]