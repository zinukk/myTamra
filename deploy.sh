REPOSITORY=/home/ubuntu/deploy

cd $REPOSITORY 

sudo pm2 stop

sudo pm2 yarn install

sudo pm2 yarn build

pm2 start yarn --name "myTamra" --interpreter bash -- start