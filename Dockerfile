FROM node:10.15.0-alpine
WORKDIR /usr/src
COPY . .
ENV NODE_ENV=production
RUN yarn
CMD node lib/