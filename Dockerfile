# This Dockerfile assumes you have already built the project (`npm run build`).
# The 'dist/public' directory must exist before building this image.
FROM nginx:1.25-alpine

# Copy the custom Nginx configuration for a Single Page Application.
COPY nginx.prod.conf /etc/nginx/conf.d/default.conf

# Copy the pre-built frontend files from your local machine.
COPY dist/public /usr/share/nginx/html

# Expose port 80 for Nginx.
EXPOSE 80

# Start Nginx.
CMD ["nginx", "-g", "daemon off;"]
