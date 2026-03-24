# Stage 1: Install dependencies
FROM oven/bun:alpine AS deps
WORKDIR /app
COPY package.json bun.lock source.config.ts next.config.mjs ./
RUN bun install --frozen-lockfile

# Stage 2: Build static site
FROM oven/bun:alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN bun run build

# Stage 3: Serve with nginx
FROM nginx:alpine AS runner
COPY --from=builder /app/out /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
