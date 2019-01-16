# Stage 0, "build-stage" also used on development
FROM node:11.6-alpine as build-stage

RUN mkdir -p /app
WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

COPY . ./ 

RUN yarn build

VOLUME /app
EXPOSE 8080

# Stage 1, production image
FROM nginx:1.15-alpine

COPY --from=build-stage /app/dist /var/www
COPY --from=build-stage /app/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]