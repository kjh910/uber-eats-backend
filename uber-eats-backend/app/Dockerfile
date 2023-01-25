FROM node:19.4.0

WORKDIR /app

ADD ./ /app/

RUN chmod 777 /app/runserver.sh

EXPOSE 4001

CMD ["/app/runserver.sh"]