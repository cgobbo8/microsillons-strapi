# Dockerfile pour Strapi
FROM node:18-alpine AS base

# Installer les dépendances système nécessaires
RUN apk update && apk add --no-cache \
    build-base \
    gcc \
    autoconf \
    automake \
    zlib-dev \
    libpng-dev \
    vips-dev \
    git

WORKDIR /app

# Copier les fichiers de dépendances
COPY package.json yarn.lock ./

# Installer les dépendances de production
FROM base AS dependencies
RUN yarn install --frozen-lockfile --production=false

# Build de l'application
FROM dependencies AS builder
COPY . .
ENV NODE_ENV=production
RUN yarn build

# Image finale de production
FROM node:18-alpine AS production

# Installer vips pour le traitement d'images
RUN apk add --no-cache vips-dev

WORKDIR /app

# Copier les fichiers nécessaires depuis le builder
COPY --from=dependencies /app/node_modules ./node_modules
COPY --from=builder /app/build ./build
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./
COPY --from=builder /app/yarn.lock ./
COPY --from=builder /app/config ./config
COPY --from=builder /app/database ./database
COPY --from=builder /app/src ./src

# Variables d'environnement par défaut (seront overridées par Dokploy)
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=1337

# Exposer le port
EXPOSE 1337

# Healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=40s --retries=3 \
  CMD node -e "require('http').get('http://localhost:1337/_health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# Démarrer l'application
CMD ["yarn", "start"]
