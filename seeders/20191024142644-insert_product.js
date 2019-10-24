'use strict';
const fs = require('fs')
const dataFile = fs.readFileSync('./dataGambar.json')
let values = JSON.parse(dataFile)
for (let i = 0; i< values.length; i++) {
  values[i].createdAt = new Date,
  values[i].updatedAt = new Date
}
console.log(values)
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
      return queryInterface.bulkInsert('Products', values)
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Products', values)
  }
};
