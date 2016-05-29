FROM ubuntu:14.04

RUN apt-get update

RUN apt-get install -y nodejs npm

RUN mkdir alexanto

COPY package.json /alexanto/

RUN cd /alexanto/

WORKDIR /alexanto/

RUN npm install express

COPY . /alexanto/

