REPOSITORY=/home/ubuntu/deploy

cd $REPOSITORY 

sudo yarn install

sudo pm2 reload all