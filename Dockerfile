FROM node:argon
MAINTAINER Jessica Grebenschikov

RUN apt-get update && apt-get -y install \
    netcat \
    vim

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app
RUN npm install

COPY start.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

COPY . /app

EXPOSE 8080
ENTRYPOINT ["/docker-entrypoint.sh"]

CMD "npm" "start" 