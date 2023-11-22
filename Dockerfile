FROM ubuntu:20.04

# Update the package list inside the image and install necessary packages
RUN apt-get update \
    && DEBIAN_FRONTEND=noninteractive apt-get install -y \
    chromium-browser \
    libgconf-2-4 \
    libnss3 \
    libasound2 \
    libatk-bridge2.0-0 \
    libgtk-3-0 \
    libdrm2 \
    curl \
    wget

# Install Node.js 18
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose port 3000
EXPOSE 3000

# Specify the command to run your application
CMD ["npm", "run", "demo"]
