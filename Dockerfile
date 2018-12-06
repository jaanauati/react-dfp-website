FROM node:alpine
WORKDIR /srv/app
COPY . .
RUN npm install
EXPOSE 6796
ENV NODE_ENV=production
RUN npm run build
CMD [ "node", "server.js" ]

