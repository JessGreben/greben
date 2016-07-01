FROM node:argon
MAINTAINER Jessica Grebenschikov

RUN apt-get update && apt-get -y install \
    netcat

RUN mkdir -p /app
WORKDIR /app

COPY start.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

COPY package.json /app
RUN npm install

COPY . /app

EXPOSE 8080

CMD [ "npm", "start" ]