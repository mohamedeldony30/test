FROM quay.io/sampandey001/secktor
RUN git clone https://github.com/Zenonbot2/Zenon_BOT-V1 /root/Zenonbot2
WORKDIR /root/Zenonbot2/
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
