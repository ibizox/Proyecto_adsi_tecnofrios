const Sequelize = require('sequelize');

const dbName = 'Tecnofrios_full';
const userName = 'root';
const password = 'adminDB12*'; 

const dbData = new Sequelize(
    dbName, 
    userName, 
    password, {
    host: 'localhost',
    dialect: 'mysql'
    }
);

const conn = async () => {
    try {
        await dbData .authenticate();
        await dbData.sync();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
};

module.exports = { dbData, conn };