const { Sequelize } = require('sequelize');

// Create a new Sequelize instance
const sequelize = new Sequelize('student', 'email', 'password', {
  host: 'localhost', // Replace with your database host
  dialect: 'mysql',  // Choose your database: 'mysql' | 'postgres' | 'sqlite' | 'mssql'
});

// Test the connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = sequelize;
