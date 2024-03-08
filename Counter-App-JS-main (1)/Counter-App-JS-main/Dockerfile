# Use the nginx base image
FROM nginx

# Set the working directory within the container
WORKDIR /usr/share/nginx/html

# Copy the contents of your application to the container's working directory
COPY . .

# Update Nginx configuration to serve your static files
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

# Expose port 80 for Nginx
EXPOSE 80

# Command to start Nginx (this is the default CMD for the nginx image)
CMD ["nginx", "-g", "daemon off;"]
