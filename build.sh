
cd api
npm install
cd ..

cd shopping_cart
npm install

cd ..

docker build -t vue-node-image .

docker run -it -p  3080:3080 --name vue-node-ui vue-node-image
