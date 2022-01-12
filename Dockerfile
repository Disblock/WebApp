FROM node

ADD . ./node
WORKDIR ./node
EXPOSE 8080
RUN npm install

CMD node server.js
