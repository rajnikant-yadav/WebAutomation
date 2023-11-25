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
   paste this url on browser you can see result
   http://localhost:3000/automation/user/1245
   ## OR
   bash
  docker pull rajnikant98/webautomation
  docker run -p 3000:3000 4f8fd11e6106
  ## OR
  ##docker run -p 8080:3000 -d 4f8fd11e6106
  ## docker stop $(docker ps -q --filter "publish=3000") 
#   docker stop <container_id>
# docker rm <container_id>
``` 

## Alternatively, if you prefer to run the web automation demonstration using the script alone, follow these streamlined steps:

```bash
   git clone https://github.com/rajnikant-yadav/WebAutomation.git
   cd WebAutomation
   npm install
   node demo.js
```
