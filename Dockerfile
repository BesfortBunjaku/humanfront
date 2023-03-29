# pull the official base image
FROM node:19-alpine3.15 as base
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

CMD ["nginx", "-g", "daemon off;"]