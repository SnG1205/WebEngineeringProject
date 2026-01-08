FROM node:22 as builder
WORKDIR usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /usr/src/app/build /usr/share/nginx/html/
EXPOSE 4173
CMD ["nginx", "-g", "daemon off;"]