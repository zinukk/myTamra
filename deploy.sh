REPOSITORY=/home/ubuntu/deploy

cd $REPOSITORY 

sudo pm2 kill

sudo yarn install

sudo yarn build

sudo pm2 start yarn --name "myTamra" --interpreter bash -- start