FROM node:15-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build --prod

FROM nginx:latest
COPY --from=build-step /app/dist/angular8project /usr/share/nginx/html

EXPOSE 80
EXPOSE 4200
EXPOSE 8080
