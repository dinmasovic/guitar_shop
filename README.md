The app uses React + Vite, Docker ,Apollo and i18next.
The project has a dockerfile, all you have to do is open clone the repository:

1. Create a folder
2. open command prompt and change the directory to the newly created folder
3. run git init
4. run git clone https://github.com/dinmasovic/guitar_shop.git
   

then go inside the guitar_shop folder (cd ./guitar_shop) on the command prompt and run:

docker build -t guitar-shop-app .

docker run -d -p 5000:80 --name guitar-shop-container guitar-shop-app

After that, the website is available on localhost:5000

To get from the first page to the second, just click on any of the brands shown on the page, the same
thing applies for the second page
