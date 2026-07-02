FROM node:22-alpine AS build
WORKDIR /app
ARG VITE_API_BASE_URL=/api/v1
ENV VITE_API_BASE_URL=$VITE_API_BASE_URL
COPY package.json package-lock.json* ./
COPY client/package.json client/package.json
RUN npm ci --workspace client --include-workspace-root=false
COPY client client
RUN npm run build --workspace client

FROM nginx:1.27-alpine
COPY --from=build /app/client/dist /usr/share/nginx/html
COPY nginx/client.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]