
FROM node:10 AS ui-build
WORKDIR /usr/src/app
COPY shopping_cart/ ./shopping_cart/
RUN cd shopping_cart && npm install && npm run build

FROM node:10 AS server-build
WORKDIR /root/
COPY --from=ui-build /usr/src/app/shopping_cart/dist ./shopping_cart/dist
COPY api/package*.json ./api/
RUN cd api && npm install
COPY api/ ./api/

EXPOSE 3080

CMD ["node", "./api/server.js"]