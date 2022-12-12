FROM node:18-alpine as build
WORKDIR /app
COPY . /app
RUN npm i
RUN npm run build

FROM node:18-alpine
WORKDIR app/
COPY --from=build /app/build /app/build
COPY . /app
RUN npm i -g serve
CMD ["serve", "-s", "-n", "build", "-l", "3000"]