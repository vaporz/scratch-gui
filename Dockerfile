FROM node:latest as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install --registry=https://registry.npm.taobao.org
COPY ./ .
RUN cp -r scratch-vm/* node_modules/scratch-vm/
RUN cd node_modules/scratch-vm/src/extensions/scratch3_rocketscience && npm install --registry=https://registry.npm.taobao.org
RUN npm run build

FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /app/build /app
COPY nginx.conf /etc/nginx/nginx.conf
