FROM node:22

WORKDIR /app

COPY package*.json ./
COPY server/package*.json ./server/
COPY shared/package*.json ./shared/

RUN npm ci

COPY server/ .
COPY shared/ .

EXPOSE 5000

CMD ["node", "src/server.js"]