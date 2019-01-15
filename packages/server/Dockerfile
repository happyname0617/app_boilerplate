FROM node:11.6

RUN npm install -g yarn

WORKDIR /code/

COPY package.json .

RUN yarn

COPY . .

# RUN yarn build

EXPOSE 3030

CMD ["yarn", "dev"]

