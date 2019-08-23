FROM node:10

WORKDIR /usr/src/app
COPY package*.json ./

RUN yarn cache clean
RUN yarn 

COPY . .
EXPOSE 5000

CMD [ "yarn", "start" ]