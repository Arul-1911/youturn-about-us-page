FROM node:13.12.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
RUN npm i
ARG REACT_APP_API_BASE_URL
ARG REACT_APP_WEB_URL
ARG REACT_APP_EN_WEB_URL
ENV REACT_APP_API_BASE_URL=$REACT_APP_API_BASE_URL
ENV REACT_APP_WEB_URL=$REACT_APP_WEB_URL
ENV REACT_APP_EN_WEB_URL=$REACT_APP_EN_WEB_URL
COPY . .
RUN npm run build
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]