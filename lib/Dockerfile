FROM quay.io/sampandey001/secktor
RUN git clone https://github.com/mohamedeldony30/test /root/test
WORKDIR /root/test/
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
