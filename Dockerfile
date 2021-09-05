# # build environment
# FROM node:14-alpine as react-build
# WORKDIR /app
# COPY . ./
# RUN yarn
# RUN yarn build

# # server environment
# FROM nginx:alpine
# COPY nginx.conf /etc/nginx/conf.d/configfile.template

# COPY --from=react-build /app/build /usr/share/nginx/html

# ENV PORT 8080
# ENV HOST 0.0.0.0
# EXPOSE 8080
# CMD sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/configfile.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"

FROM node:14-alpine AS builder
ENV NODE_ENV production
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn install --production
# Copy app files
COPY . .
# Build the app
RUN yarn build

# Bundle static assets with nginx
FROM nginx:1.21.0-alpine as production
ENV NODE_ENV production
# Copy built assets from builder
COPY --from=builder /app/build /usr/share/nginx/html
# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port

ENV PORT 8080
ENV HOST 0.0.0.0
EXPOSE 8080
# Start nginx
CMD ["nginx", "-g", "daemon off;"] 