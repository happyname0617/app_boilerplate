# Stage 0, "build-stage" also used on development
FROM node:11.6-alpine as build-stage

WORKDIR /app/

COPY package.json ./

RUN yarn

COPY ./ ./

EXPOSE 3030

VOLUME /app

RUN yarn build

FROM node:11.6-alpine

WORKDIR /app/

COPY --from=build-stage /app/package.json ./
COPY --from=build-stage /app/dist ./dist

RUN yarn install --production

CMD ["yarn", "start"]
