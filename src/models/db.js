import Sequelize from 'sequelize';

export const Conn = new Sequelize(
  'relay',
  'postgres',
  'postgres',
  {
    dialect: 'postgres',
    host: 'localhost',
  }
);
