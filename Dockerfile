FROM node:5.6
WORKDIR /usr/local/lib/node_modules/npm
RUN npm install --save fs-extra
RUN sed -i s/graceful-fs/fs-extra/g /usr/local/lib/node_modules/npm/lib/utils/rename.js
RUN sed -i s/fs.rename/fs.move/g /usr/local/lib/node_modules/npm/lib/utils/rename.js

RUN mkdir workspots

COPY package.json /workspots/

RUN cd /workspots/

WORKDIR /workspots/

RUN npm install

COPY . /workspots/

RUN npm install -g gulp

RUN npm install gulp

RUN gulp css

RUN gulp scripts