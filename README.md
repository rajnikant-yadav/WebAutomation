# Web Automation Demo

This demo application is designed for web automation.

## Getting Started

To run this code, follow these steps:

1. **Clone the Repository:**
   Clone this repository to your local machine.

```javascript
// Clone the WebAutomation repository from GitHub
git clone https://github.com/rajnikant-yadav/WebAutomation.git

// Navigate to the WebAutomation directory
cd WebAutomation

// Install Node.js dependencies using npm
npm install

// Start the application using npm
npm run start

// After starting the application, open the following URLs in your browser to see the results
// You should get a response 'pong' for http://localhost:3000/ping
// Access user automation data at http://localhost:3000/automation/user/1245
``` 

## Alternatively, if you prefer to use a Docker image:

```javascript
// Pull the WebAutomation Docker image from Docker Hub
docker pull rajnikant98/webautomation

// Display a list of Docker images to find the <image_id>
docker images

// Run the Docker container in detached mode, mapping port 3000 on the host to port 3000 in the container
docker run -p 3000:3000 -d <image_id>

// Display a list of running Docker containers, find the <container_id>
docker ps

// View real-time logs of the running Docker container
docker logs -f <container_id>

// Test the application by opening the following URLs in your browser
// You should get a response 'pong' for http://localhost:3000/ping
// Access user automation data at http://localhost:3000/automation/user/1245

// Stop the running Docker container using its <container_id>
docker stop <container_id>

// Remove the stopped Docker container using its <container_id>
docker rm <container_id>
```

## If you prefer to run the web automation demonstration using the script alone, follow these streamlined steps:

```javascript
// Clone the WebAutomation repository from GitHub
git clone https://github.com/rajnikant-yadav/WebAutomation.git

// Navigate to the WebAutomation directory
cd WebAutomation

// Install Node.js dependencies using npm
npm install

// Run the web automation demonstration script
node demo.js

```
