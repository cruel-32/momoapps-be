FROM node:18

WORKDIR /home/node/app

COPY ./ /home/node/app

RUN npm i && npm run build
EXPOSE 8080
CMD ["node", "dist/main"]