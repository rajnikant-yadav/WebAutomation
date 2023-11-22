FROM ubuntu:20.04

# Update the package list inside the image and install necessary packages
RUN apt-get update \
    && DEBIAN_FRONTEND=noninteractive apt-get install -y \
        chromium-browser \
        libgconf-2-4 \
        libnss3 \
        libasound2 \
        nodejs \
        npm \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app

COPY package*.json ./

# Install app dependencies
RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "demo.js"]