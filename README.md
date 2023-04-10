# desafio-tce

# Configuração


  * Clonar ou baixar código zipado deste repositório;
  * SSH CLone ```git@github.com:Adrian-opo/desafio-tce.git```
  * HTTPS Clone ```https://github.com/Adrian-opo/desafio-tce.git```
  * Utilizar sistema linux
  * Instalar [NVM](https://github.com/nvm-sh/nvm);
  * Instale a versao 16 do node ```nvm install 16```
  * Instalar [Angular CLI](https://github.com/angular/angular-cli) versão 15.2.2;

  * Agora execulte o comando  ```npm install```
  * Localizar o diretorio teste/front , iniciar terminal e usar comando ```ng build``` para baixar as dependencias do projeto;

# Como Usar
  * Dentro do mesmo diretorio usar comando ```ng serve -o``` no terminal para inicializar a aplicação;
  * A aplicação pode ser acessada em `http://localhost:4200/`
 

# Tecnologias
  * Desenvolvido em HTML, CSS, TypeScript e Angular versão 15.2.2;



------------------------------------
# BackEnd
  * Em outro Terminal
  * Instalar [Dokcer](https://www.docker.com/);
  * Localize o diretorio teste/back e exculte os procediemntos a seguir

## Instalação em Ambiente de desenvolvimento:
Por padrão a api sera iniciada  na porta _3002_
```bash
cp .env-example .env

npm install

make up
```
### Executar migrations
```bash
docker exec -it api-pessoa npm run migration:up
```

### Log da aplicação
```bash
make logs
```



