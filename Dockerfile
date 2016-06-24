FROM mhart/alpine-node:6.2.1

# add project to build
COPY . /root/api
WORKDIR /root/api
RUN npm install

EXPOSE 4242

CMD ["node", "app.js"]
