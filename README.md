# desafio-tce

# Configuração
  * Clonar ou baixar código zipado deste repositório;
  
  * Instalar [NVM](https://github.com/nvm-sh/nvm);
  * Instalar [Angular CLI](https://github.com/angular/angular-cli) versão 15.2.2;
  * Instale a versao 16 do node ```nvm install 16```
  * Agora execulte o comando  ```npm install```
  * Localizar o diretorio Aplication/front , iniciar terminal e usar comando ```ng build``` para baixar as dependencias do projeto;

# Como Usar
  * Dentro do mesmo diretorio usar comando ```ng serve -o``` no terminal para inicializar a aplicação;
  * A aplicação pode ser acessada em `http://localhost:4200/`
 

# Tecnologias
  * Desenvolvido em HTML, CSS, TypeScript e Angular versão 15.2.2;



------------------------------------
# BackEnd
  * Em outro Terminal
  * Instalar [Dokcer](https://www.docker.com/);
  * Localize o diretorio Aplication/back e exculte os procediemntos a seguir

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



