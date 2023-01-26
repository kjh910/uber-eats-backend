FROM node:19.4.0

WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install

ADD ./ ./node_modules/

ADD ./ /app/

RUN chmod 777 /app/runserver.sh

EXPOSE 4001

CMD ["/app/runserver.sh"]