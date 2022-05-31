FROM node

ADD . ./node
WORKDIR ./node
EXPOSE 8081 80 443
RUN mkdir certs
RUN npm install

CMD node server.js
