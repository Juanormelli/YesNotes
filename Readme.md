## Projeto Realizado com as seguintes tecnologias


NodeJS
PostgreSQL
TypeORM
Docker


## Pré Requisitos
Docker 
Docker compose 


## Inicializando API

Para realizar a incialização tera que rodar o seguinte comando

```console
yarn
```

Ele instalara as dependencias da API

Apos isso podera rodar o comando 

```console
docker compose up
```

Para subir os containers da apolicação

Apos os containeres estarem no ar voce devera rodar as Migrations par reakizar a criação das tabelas no banco de dados, para isso basta rodar o seguinte comando 

```console
yarn migration:run 
```

Após estes passos a API esta pronta para funcionar e realizar o registro e autenticação dos usuarios 



