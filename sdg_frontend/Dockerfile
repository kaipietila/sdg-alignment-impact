FROM node:15.12.0
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY ./sdg_frontend/package.json ./

RUN npm install
RUN npm install -D react-scripts

COPY ./sdg_frontend/. ./

CMD ["npm", "start"]