FROM nginx:stable-alpine

WORKDIR /WebsiteCV

COPY . /WebsiteCV/

EXPOSE 8999

