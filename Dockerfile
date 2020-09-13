FROM nginx:alpine

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx/nginx.conf /etc/nginx/conf.d

WORKDIR /usr/share/nginx/html

COPY build /usr/share/nginx/html

RUN apk add curl