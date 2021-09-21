# Nodejs Base image
FROM node:16.9-alpine3.13
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
# install and app dependencies
COPY package.json /app/package.json

RUN npm version
#RUN npm install npm@6.14.8
#RUN rm -rf /usr/local/lib/node_modules/npm
#RUN mv node_modules/npm /usr/local/lib/node_modules/npm

RUN npm version
RUN npm install
RUN npm install -g @angular/cli
# add app
COPY . /app
# start app
#CMD echo fs.inotify.max_user_watches=288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
CMD ng serve --host 0.0.0.0 --disable-host-check
