#!/bin/bash -x

cp /usr/share/nginx/html/nginx/default.conf /etc/nginx/conf.d/

nginx -g "daemon off;"
