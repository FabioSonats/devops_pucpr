# Use a imagem base que você baixou (substitua "sua-imagem-base" pelo nome da imagem)
FROM node

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie os arquivos do seu projeto para o contêiner
COPY . /app

# Instale as dependências (se aplicável)
RUN npm install

# Inicialize o seu aplicativo (ajuste o comando conforme necessário)
CMD [ "npm", "start" ]
