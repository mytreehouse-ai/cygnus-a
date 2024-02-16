##### DEPENDENCIES
# Important! Driver must be bridge!
# Use the official Node.js 18 Alpine image as the base image for the "deps-os" stage
FROM --platform=linux/amd64 node:18-alpine3.17 AS deps-os

ARG NODE_ENV
ARG NEXT_PUBLIC_NODE_ENV
ARG DOCKER_BUILD
ARG AUTH_SECRET
ARG NEXT_PUBLIC_ARTEMIS_BASEAPI_URL

# Install the OS dependencies required by the application
RUN apk add --no-cache libc6-compat openssl

# Use the official Node.js 18 Alpine image as the base image for the "deps" stage
FROM --platform=linux/amd64 node:18-alpine3.17 AS deps

# Set the working directory
WORKDIR /app

# Copy the package.json, yarn.lock, package-lock.json, and pnpm-lock.yaml files to the working directory
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

# Install the Node.js dependencies using the preferred package manager
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i; \
  else echo "Lockfile not found." && exit 1; \
  fi

##### BUILDER

# Use the official Node.js 18 Alpine image as the base image for the "builder" stage
FROM --platform=linux/amd64 node:18-alpine3.17 AS builder

# Set the working directory to /app
WORKDIR /app

# Copy the OS dependencies from the "deps-os" stage to the "builder" stage
COPY --from=deps-os /lib /lib
COPY --from=deps-os /usr/lib /usr/lib
COPY --from=deps-os /usr/local/lib /usr/local/lib

# Copy the Node.js dependencies from the "deps" stage to the "builder" stage
COPY --from=deps /app/node_modules ./node_modules

# Copy the application code to the working directory
COPY . .

# Set the environment variable to disable Next.js telemetry
ENV NEXT_TELEMETRY_DISABLED 1

# Build the application using the preferred package manager
RUN \
  if [ -f yarn.lock ]; then SKIP_ENV_VALIDATION=1 yarn build; \
  elif [ -f package-lock.json ]; then SKIP_ENV_VALIDATION=1 npm run build; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && SKIP_ENV_VALIDATION=1 pnpm run build; \
  else echo "Lockfile not found." && exit 1; \
  fi

##### RUNNER

# Use the official Node.js 18 Alpine image as the base image for the "runner" stage
FROM --platform=linux/amd64 node:18-alpine3.16 AS runner

# Set the working directory to /app
WORKDIR /app

# Set the environment variables required by the application
ENV NODE_ENV production

# Set the environment variable to disable Next.js telemetry
ENV NEXT_TELEMETRY_DISABLED 1

# Copy the environment variable validation script and make it executable
COPY validate_env_vars.sh .
RUN chmod +x validate_env_vars.sh

# Run the environment variable validation script
RUN ./validate_env_vars.sh

# Create a non-root "nodejs" group and user for running the application
RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 --ingroup nodejs nextjs \
  && chown -R nextjs:nodejs /app

# Copy the application files to the "runner" stage
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Set the user to "nextjs" and expose port 3000
USER nextjs
EXPOSE 3000
ENV PORT 3000

# Start the application
CMD ["node", "server.js"]