FROM node

ADD . ./node
WORKDIR ./node
EXPOSE 8080
RUN mkdir certs
RUN npm install

CMD node server.js
