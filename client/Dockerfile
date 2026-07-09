FROM node:22-alpine as build-stage

WORKDIR /app

COPY package*.json ./


RUN npm cache clean --force

RUN npm ci

COPY . .

ENV VITE_API_BASE_URL=https://hinabeauty-glow/api/v1

RUN npm run build


EXPOSE 5174

CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0"]
