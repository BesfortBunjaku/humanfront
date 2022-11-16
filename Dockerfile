# pull the official base image
FROM node:17-alpine3.14 as base
# set working direction
WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# install application dependencies
COPY . .
RUN yarn install

RUN yarn build


FROM nginx

# COPY ./nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html

COPY --from=base /app/build .

RUN certbot --nginx -d suchagents.at

CMD ["nginx", "-g", "daemon off;"]