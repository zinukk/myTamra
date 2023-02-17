REPOSITORY=/home/ubuntu/deploy

cd $REPOSITORY 

sudo yarn install

sudo pm2 start yarn --name "myTamra" --interpreter bash -- start