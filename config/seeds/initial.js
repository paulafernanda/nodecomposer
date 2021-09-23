const { 
    getAllCompanies, 
    getAllDesktop, 
    getAllContributors 
  } = require('../../src/service')

exports.seed = async function(knex) {
  // Exclui os itens das tabelas
  return knex('desktop').del()
    .then(() => {
      return knex("company").del();
    }).then(() => {
      return knex("contributors").del();
    })
    // Inclui os itens
    .then(async function () {
      const resultado = await getAllCompanies()
      return knex('company').insert(resultado);
    })
    .then(async function() {
      const resultado = await getAllDesktop()
      return knex('desktop').insert(resultado);
    })
    .then(async function() {
      const resultado = await getAllContributors()
      return knex('contributors').insert(resultado);
    });
};
