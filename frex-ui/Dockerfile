FROM nginx:alpine
COPY default.conf /etc/nginx/conf.d/default.conf
COPY /dist/frontend/ /usr/share/nginx/html


# FROM node:10-alpine as builder
# COPY package.json package-lock.json ./
# RUN npm ci && mkdir /ng-app && mv ./node_modules ./ng-app
# WORKDIR /ng-app
# COPY . .
# RUN npm run ng build -- --prod --output-path=dist
# FROM nginx:1.14.1-alpine
# COPY nginx/default.conf /etc/nginx/conf.d/
# ## Remove default nginx website
# RUN rm -rf /usr/share/nginx/html/*
# COPY --from=builder /ng-app/dist /usr/share/nginx/html
# CMD ["nginx", "-g", "daemon off;"]
