# isa una imagen de Node.js
FROM node:18-alpine

# directoios
WORKDIR /app

# Copia los archivos 
COPY package.json package-lock.json ./

# Instala dependencias
RUN npm install

# Copia el resto del código
COPY . .

EXPOSE 3001

# Comando para iniciar el serviciioo
CMD ["npm", "run", "dev"]