FROM node

ADD . ./node
WORKDIR ./node
EXPOSE 80 443
RUN mkdir certs
RUN npm install

CMD node server.js
