FROM nginx:latest
ENV environment production \
    debug false
RUN mkdir -p /usr/share/nginx/html/WEB

ADD  src/main/resources/ /share/nginx/html/WEB
COPY ./default.conf  /etc/nginx/conf.d/default.conf


EXPOSE 80