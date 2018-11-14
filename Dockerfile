FROM node:8
RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install
RUN npm install -g babel-cli
COPY . /app
RUN npm run build:static
RUN npm run build:client
RUN npm run build:server
EXPOSE 3000
CMD ["npm", "start"]
