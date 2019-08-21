# gameofcars
Initial start of the game 
**Requirements**

*Clone the repo and cd into the root*

_From the root do_
'''yarn install'''


_From your local, make sure that mongodb is running_

_open the terminal and _

'''nodemon''' to start the developement server
**Then do**
'''yarn start'''

The app should be up and running.

#Docker
Inside the root, run 
'docker build -t [name of container]'

Then 'docker run -it -p 4200:4200 [name of container]'
 -t to name the container
 -it for interactive terminal
 -p to  give it a port to run on locally