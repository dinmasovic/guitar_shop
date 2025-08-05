The app uses React + Vite, Docker ,Apollo and i18next.
The project has a dockerfile, all you have to do is open clone the repository, open
command promp, change directory to the project location and run:

docker build -t guitar-shop-app .

docker run -d -p 5000:80 --name guitar-shop-container guitar-shop-app

After that, the website is available on localhost:5000
