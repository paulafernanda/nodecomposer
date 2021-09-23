Olá!

Este projeto busca o arquivo disponibilizado no Coderbyte salva os dados no MySQL e 
faz filtros para retornar o que é solicitado em cada rota.
<br>
Projeto disponibilizado na porta 4040


Utilizei:
<br>*) o axios para ler os dados disponibilizados 
<br>*) o restify para gerar as rotas
<br>*) o mysql2 para conectar com o banco de dados
<br>*) o knex para criar as tabelas e fazer o seeder dos dados
<br>*) o redis para salvar os itens em cache

Obs. 1) Não inclui o BloomFilter para fazer os filtros no Redis
Obs. 2) Não fiz o algoritmo para do método POST para buscar os dados da Company, Desktops e Contributors

Importante:
Estruturei o banco de dados de forma "não relacional" pois percebi que os ID's das Companys se repetiam.
Para montar o algoritmo que não conclui, iria utilizar o relacionamento 
```bash
company.code_id = desktop.company_code_id and company.business_name = desktop.company_business_name
```

Para iniciar o projeto:

```bash
git clone https://github.com/paulafernanda/nodecomposer.git
cd nodecomposer
mkdir backup_db
mkdir data

docker-compose up

knex migrate:latest
knex seed:run
```


Acessar o banco de dados

```bash
docker-compose exec mysqlserver /bin/bash
mysql -u root -p
```
Para reinicar o projeto do zero:

```bash
cd nodecomposer
sudo rm -Rf data/*
```