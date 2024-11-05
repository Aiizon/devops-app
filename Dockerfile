FROM node:18-alpine AS builder

WORKDIR /

COPY package*.json ./

RUN npm install
RUN npm run build

FROM nginx:1.27.2-alpine
LABEL authors="aizon"

ENV NGINX_VERSION=1.27.2

COPY --from=builder /dist /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]