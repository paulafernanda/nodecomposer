
//Cria as tabelas
exports.up = function(knex) {
    return knex.schema
      .createTable('company', (table) => {
          table.increments('id').primary();
          table.integer('code_id');
          table.string('business_name').notNull();
          table.string('industry').notNull();
          table.string('suffix').notNull();
          table.string('catch_phrase').notNull();
          table.string('bs_company_statement').notNull();
          table.string('logo').notNull();
          table.string('type').notNull();
          table.string('phone_number').notNull();
          table.string('full_address').notNull();
          table.string('latitude').notNull();
          table.string('longitude').notNull();
      })
      .createTable('desktop', (table) => {
          table.increments('id').primary();
          table.integer('code_id');
          table.integer('company_code_id');
          table.string('company_business_name').notNull();
          table.string('platform').notNull();
          table.string('type').notNull();
          table.string('os').notNull();
          table.string('ip').notNull();
      })
      .createTable('contributors', (table) => {
        table.increments('id').primary();
        table.integer('company_code_id');
        table.string('company_business_name').notNull();
        table.string('firstName').notNull();
        table.string('lastName').notNull();
        table.string('title').notNull();
        table.string('jobTitle').notNull();
        table.integer('age');
    })
  };
  
  //Deleta as tabelas
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('desktop')
      .dropTableIfExists('contributors')
      .dropTableIfExists('company')
  };
  