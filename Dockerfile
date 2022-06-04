FROM node:16-alpine as ts-compiler
WORKDIR /usr/app
COPY package*.json ./
COPY tsconfig*.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM node:16-alpine as ts-remover
WORKDIR /usr/app
COPY --from=ts-compiler /usr/app/package*.json ./
COPY --from=ts-compiler /usr/app/dist ./
RUN npm install --only=production

FROM gcr.io/distroless/nodejs:14
WORKDIR /usr/app
COPY --from=ts-remover /usr/app ./

ENV NODE_ENV="test"

ARG HTTP_EXPOSE_PORT
EXPOSE $HTTP_EXPOSE_PORT

USER 1000
CMD ["index.js"]