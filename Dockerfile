FROM node:alpine

RUN apk add tzdata
ENV TZ=Asia/Bangkok
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

COPY package.json .
RUN npm install
COPY . .

RUN npm run build

EXPOSE 5800

CMD ["npm", "start"]
