# Step 1: Build the Angular app
FROM node:20 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

#RUN npm run build --configuration=production
RUN npx ng build --configuration=production

# Step 2: Serve using Nginx
FROM nginx:alpine
RUN ls -l /app/dist

COPY --from=build /app/dist/angular-cart /usr/share/nginx/html

# Copy custom nginx config (optional)
#COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
