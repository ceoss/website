#!/bin/bash
# cron job: /etc/cron.daily/unwantedcalls
wget -O data.html https://consumercomplaints.fcc.gov/hc/en-us/articles/205239443-Data-on-Unwanted-Calls --no-check-certificate
link="https://consumercomplaints.fcc.gov$(grep -oh "/.\+\.csv" data.html)"
mkdir -p ./old
time=$(date +"%m_%d_%Y")
mv data.html "./old/data_$time.html"
mv data.csv "./old/data_$time.csv"
wget -O data.csv $link --no-check-certificate