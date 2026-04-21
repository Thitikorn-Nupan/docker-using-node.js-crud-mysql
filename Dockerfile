# first tell base image to docker file (runtime that you work)
FROM node:18.14.1
LABEL authors="ttknp"

# create /usr/src/app on container
WORKDIR /usr/src/app

# copy package.json file to /usr/src/app
COPY package.json ./

# install modules on container
RUN npm install

# copy all file/folder than put to /usr/src/app
COPY . .

# set port inside container
EXPOSE 8000

# Now I have to do is to tell Docker what command I want to run when our image is run inside of a container.
# It follows "scripts": { "test": "echo \"Error: no test specified\" && exit 1", "start": "node controller/control.api.js"  }
CMD [ "npm", "start" ]