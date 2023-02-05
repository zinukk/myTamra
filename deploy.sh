#!/bin/bash
REPOSITORY=/home/ubuntu/myTamra

cd $REPOSITORY 

sudo yarn install 

sudo npx pm2 reload all 