# Heroes

- Download the repository(git clone)
- Go to root folder (heroes/)
- Build Docker image (docker build -t heroes .)
- Run Docker image (docker run -d -it -p 4000:80 heroes)

In order to use fake backend:
- Install json-serve (npm install json-server)
- Go to heroes\src\app
- Run json-server --watch data.json