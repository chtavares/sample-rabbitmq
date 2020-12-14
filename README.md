# Exemplo simples de um consumer e producer com RabbitMQ

Um exemplo simples de como implementar um serviço de messageria utilizando o RabbitMQ

# Getting started

## Instalação

1. Instalar [Node.JS](https://nodejs.org/en/) versão LTS
2. Install RabbitMQ ou executar o seguinte comando docker `docker run -it --rm -p 15672:15672 -p 5672:5672 -p 25676:25676 rabbitmq:3-management`
3. Instalar dependencias utilizando: `yarn` ou `npm i`

## Coisas a serem feitas antes de executarem o serviço:

1. Acessar no browser o admin do RabbitMQ `http://localhost:15672`
2. Fazer login com usuário: `guest` e senha `guest`
3. Executar o consumer `yarn consumer` ou `npm run consumer`
4. Executar o producer `yarn producer` ou `npm run producer`
