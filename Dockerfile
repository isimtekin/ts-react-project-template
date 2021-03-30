FROM node:14.15.4 as builder
WORKDIR app
ADD . .
RUN ls
RUN yarn
# RUN yarn i18n
RUN yarn build

FROM nginx:1.15.11-alpine
ARG BUILD_FROM=build
COPY --from=builder ./app/build /usr/share/nginx/html/
RUN mkdir /usr/share/nginx/html/nginx
COPY nginx/* /usr/share/nginx/html/nginx/
RUN apk add bash perl \
    && rm -rf /var/cache/apk/*

CMD ["/usr/share/nginx/html/nginx/start_nginx.sh"]
