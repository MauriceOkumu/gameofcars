FROM node:10

WORKDIR /usr/src/app
COPY package.json usr/src/app

RUN yarn cache clean
RUN yarn 

COPY . /usr/src/app
EXPOSE 5000

CMD [ "yarn", "start" ]