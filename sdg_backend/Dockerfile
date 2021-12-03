FROM node:15.12.0

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY ./sdg_backend/package.json ./

RUN npm install

COPY ./sdg_backend/. ./

CMD ["npm", "start"]