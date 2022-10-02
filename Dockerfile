FROM node:16.13.2-alpine3.14
WORKDIR /app
COPY . .
RUN npm i
CMD ["npm", "start"]