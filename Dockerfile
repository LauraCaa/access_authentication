FROM "node"
WORKDIR /opt/react_access
COPY package*.json .
RUN npm i
COPY . ./
EXPOSE "3000"
CMD ["sleep", "infinity"]