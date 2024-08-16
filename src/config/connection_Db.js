const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.ROOT, null, {
  host: process.env.HOST,
  dialect: process.env.DIALECT,
  logging:false
});
const connectionDatabase = async ()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

connectionDatabase()