FROM node:22-alpine AS base
WORKDIR /app
ENV NODE_ENV=production

FROM base AS deps
COPY package.json package-lock.json* ./
COPY server/package.json server/package.json
COPY shared/package.json shared/package.json
RUN npm ci --omit=dev --ignore-scripts

FROM base AS runtime
RUN addgroup -S nodeapp && adduser -S nodeapp -G nodeapp
COPY --from=deps /app/node_modules ./node_modules
COPY server ./server
COPY shared ./shared
WORKDIR /app/server
USER nodeapp
EXPOSE 5000
CMD ["node", "src/server.js"]
