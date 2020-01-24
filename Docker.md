Dockerize your react app by following the steps below. You can then tweak your dockerfile as necessary.

### Create Dockerfile
This should be done in the root DIR of the project

###Dockerfile content

  # `FROM node:10`
   <!-- Pull the published node image from the registry (Any version....I chose node 10) -->

  #`WORKDIR /kotlinapp`
   This will be the working directory of the dockerized app

  #`COPY package*.json ./`
   Copy the package.json and lockfile
  #`RUN yarn cache clean`
   Optional if you want to clear the cache to enable a clean dependencies install
  #`RUN yarn`
  Install the dependencies
  #`COPY . .`
   Copy all the files in the current DIR
  # `RUN yarn build`
  Build the app for deployment
  #`EXPOSE 3000`
 Expose port ${port} for outside container consumption
  #`CMD ["yarn", "start"]`
  Start the app

  In production dockerfile, add the following
  #`RUN yarn build`
 set up production environment
 the base image for this is an alpine based nginx image
#`FROM nginx:alpine`
 copy the build folder from react to the root of nginx (www)
#`COPY --from=build /app/build /usr/share/nginx/html`

 --------- only for those using react router ----------
 create an nginx/nginx.conf
# if you are using react router 
# you need to overwrite the default nginx configurations
remove default nginx configuration file
#`RUN rm /etc/nginx/conf.d/default.conf`
 replace with custom one inside the nginx/nginx.conf file
#`COPY nginx/nginx.conf /etc/nginx/conf.d`
--------- /only for those using react router ----------

 expose port 80 to the outer world
#`EXPOSE 80`
 start nginx 
 #`CMD ["nginx", "-g", "daemon off;"]`

  ###Building the Docker Image

  Open a terminal and cd into the project thun run the following command
  #` docker build --pull --no-cache -t kotlinapp:vol1 .,`

  #Breakdown of the command
   `docker build --pull --no-cache` will pull the latest images from the registry
   `-t` flag enables you to tag the image
   `kotlinapp:--` is the name of the image we are building
   `--:vol1` Tagging the image as volume 1

   ###Running the image in a docker container
   #`docker run -it -v /kotlinapp --name kotlin-frontend-demo -p 3000:3000  --rm kotlinapp:vol1`

   #Breakdown of the command
   `docker run -it` Will run the image in interactive mode
   `--name {name of image}` name your image 
   `-p 3000:3000` map the exposed port to an outside available port
   `--rm` Will automatically clean up the container and remove the file system when the container exits
   `kotlinapp:vol1` is the name and tag of the image we are running

   ###Using docker-compose to build images in the DEV ENV
   Create a docker-compose.yml file in the same DIR as the Dockerfile
   List the services you want to run in the compose.yml
   Then build the images using the following command
   `docker compose up --build`
   This will build the image and run the container

   To stop the container and remove the image, run
   `docker-compose down -v --rmi local`

   ###Docker-compose in PROD
   Create a production yaml then build it
   `docker-compose -f {name of docker-compose file} up --build -d`
   the `-f` flag tells docker-compose which specific dockerfile to build
   
   To stop the production container
   `docker-compose -f {name of docker-compose file} down -v --rmi local`

##Docker as a business
 Imagine ordering a laptop from overseas

 Software = Laptop 
 Dockerfile = Catalog 
 Docker-compose file = clearing agent
 Developer = runs the compose command
 Docker Image = carton/ packaging
 Container name = tracking number of sorts
 Docker volume = shipping container
 Kubernetes = the ship
 Nginx = ship captain

 [learn more](https://medium.com/swlh/dockerizing-a-react-application-with-docker-and-nginx-19e88ef8e99a)

 ##Load balancing

 `docker-compose  -f {name of docker-compose file} scale app=4 `
 This command will spin up 3 more instances of the app and traffic will be redirected accordingly.