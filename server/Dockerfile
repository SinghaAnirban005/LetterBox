FROM node:22-alpine AS builder

WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lock.yaml ./

RUN pnpm fetch

COPY . .

RUN pnpm install --offline --frozen-lockfile

RUN pnpm build

FROM node:22-alpine

WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lock.yaml ./

RUN pnpm fetch

RUN pnpm install --prod --offline --frozen-lockfile

COPY --from=builder /app/dist ./dist

EXPOSE 3000
EXPOSE 1025

CMD ["node", "dist/index.js"]