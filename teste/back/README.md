# Microserviço Secretaria

## Description

Microserviço para os recursos de secretaria municipal, escola, funcionário, responsável e aluno.

## Dependência
Docker e docker-compose

## Instalação em Ambiente de desenvolvimento:
Por padrão o microsserviço inicializará na porta _3002_
```bash
cp .env-example .env

npm install

make up
```
### Executar migrations
```bash
docker exec -it api-secretaria npm run migration:up
```

### Log da aplicação
```bash
make logs
```

## Instalação sem docker

```bash
cp .env-example .env

$ npm install
```

## Executar app

```bash
# development - watch mode
$ npm run start:dev

# development
$ npm run start

# production mode
$ npm run start:prod
```

## Testes

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
## TypeORM - Migration create
Para gerar arquivos de migração é necessário adicionar o caminho completo da pasta, conforme
exemplo abaixo.
```bash
npm run migration:create src/database/migrations/create_nome_tabela_table
```

## TypeORM - Executar migrations
```bash
npm run migration:up
```

## TypeORM - Entity create
Para gerar arquivos de entidade (entity) é necessário adicionar o caminho completo da pasta, conforme
exemplo abaixo. O nome do arquivo de entidade deverá conforme o exemplo: serie.entity.ts

Nome da classe: export class Serie { ... }
```bash
npm run typeorm:create src/modules/nome_module/entities/NomeEntity
```


## Time de desenvolvimento
- Ádrian Henrique Ferreira
- Caian Henrique Soares de Oliveira
- Danilo Saiter da Silva
- João Teixeira
- Wester Jesuino Morandi de Oliveira
