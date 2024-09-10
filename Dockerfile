##### DEPENDENCIES

FROM --platform=linux/amd64 node:20-alpine AS deps
RUN apk add --no-cache libc6-compat openssl
WORKDIR /app

# Install Prisma Client - remove if not using Prisma
ENV NEXT_TELEMETRY_DISABLED=true
COPY prisma ./

# Install dependencies based on the preferred package manager

COPY package.json pnpm-lock.yaml\* ./

RUN yarn global add pnpm@8.15.0 && pnpm i --no-frozen-lockfile && npx prisma generate

##### BUILDER

FROM --platform=linux/amd64 node:20-alpine AS builder
ARG DATABASE_URL
ARG AUTH_SECRET
ARG AUTH_URL
ARG AUTH_GOOGLE_ID
ARG AUTH_GOOGLE_SECRET
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# ENV NEXT_TELEMETRY_DISABLED 1

RUN yarn global add pnpm@8.15.0 && SKIP_ENV_VALIDATION=1 pnpm run build

##### RUNNER

FROM --platform=linux/amd64 gcr.io/distroless/nodejs20-debian12 AS runner
WORKDIR /app

ENV NODE_ENV production

# ENV NEXT_TELEMETRY_DISABLED 1

COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT 3000
ENV AUTH_TRUST_HOST 1
CMD ["server.js"]
