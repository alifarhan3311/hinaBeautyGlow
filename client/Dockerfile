FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* ./
COPY client/package.json client/package.json
RUN npm ci --workspace client --include-workspace-root=false
COPY client client
RUN npm run build --workspace client

FROM nginx:1.27-alpine
COPY --from=build /app/client/dist /usr/share/nginx/html
COPY nginx/client.conf /etc/nginx/conf.d/default.conf
