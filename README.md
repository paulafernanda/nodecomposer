Olá!

Este projeto busca o arquivo disponibilizado no Coderbyte e faz filtros para retornar o que é solcitado em cada rota.
Projeto disponibilizado na porta 4040

Sim está lento pela quantidade de dados e pela api não ter um método de filtro próprio. (Não era o proposto :) )

Utilizei:
*) o axios para ler os dados disponibilizados 
*) o Hapi para gerar as rotas
*) fiz um teste de disponibilidade com o Mocha, mas a api demora muito para responder
*) o mysql2 para conectar com o banco de dados
*) o sequelizer para criar as tabelas
*) tentei colocar o swagger para ficar com a documentação mais apresentável
*) não tentei colocar o vision para renderizar a página inicial :)

Obs.: Não persisti os dados no banco de dados por falta de tempo :/

Para iniciar o projeto:

```bash
git clone git@github.com:paulafernanda/nodecomposer.git
cd nodecomposer
mkdir backup_db
mkdir data
```


Acessar o banco de dados

```bash
docker-compose exec mysqlserver /bin/bash
mysql -u root -p
```

