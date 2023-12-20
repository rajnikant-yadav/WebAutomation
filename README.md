# Web Automation Demo

This demo application is designed for web automation.

## Getting Started

To run this code, follow these steps:

1. **Clone the Repository:**
   Clone this repository to your local machine.

```bash
   git clone https://github.com/rajnikant-yadav/WebAutomation.git
   cd WebAutomation
   npm install
   npm run start
   paste these url on browser you can see result
   http://localhost:3000/ping            // you get response pong
   http://localhost:3000/automation/user/1245

  OR
  docker pull rajnikant98/webautomation
  docker images    
  docker run -p 3000:3000 -d <image_id>
  docker ps
  docker logs -f  <container_id>
  // test with
  paste these url on browser you can see result
  http://localhost:3000/ping            // you get response pong
  http://localhost:3000/automation/user/1245
  docker stop <container_id>
  docker rm <container_id>
``` 

## Alternatively, if you prefer to run the web automation demonstration using the script alone, follow these streamlined steps:

```bash
   git clone https://github.com/rajnikant-yadav/WebAutomation.git
   cd WebAutomation
   npm install
   node demo.js
```
