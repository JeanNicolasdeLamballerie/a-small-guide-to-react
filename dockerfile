FROM node:latest
WORKDIR /var/app/
COPY package.json /var/app/package.json
RUN npm install

COPY . .

CMD ["npm","start"]