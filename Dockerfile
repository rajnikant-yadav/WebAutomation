FROM ubuntu:20.04
# Update the package list inside the image
RUN apt-get update
RUN apt-get install -y chromium-browser libgtk-3-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2
RUN apt-get install -y curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get install -y nodejs
RUN apt install awscli -y
WORKDIR /usr/src/app
 
COPY package*.json ./
 
RUN npm install
COPY . .
 
EXPOSE 3000
# CMD [ "npm", "start"]
CMD ["node", "demo.js"]