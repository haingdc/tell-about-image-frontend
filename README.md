docker build -t tell-about-image-frontend .

docker run -it -p 3000:3000 tell-about-image-frontend

flyctl launch

fly deploy
