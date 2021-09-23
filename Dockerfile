# Nodejs Base image
FROM node:14.17.6
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
# install and app dependencies
COPY package.json /app/package.json


RUN npm version
RUN npm install
RUN npm install -g @angular/cli
# add app
COPY . /app
# start app
#CMD echo fs.inotify.max_user_watches=288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
CMD ng serve --host 0.0.0.0 --disable-host-check
