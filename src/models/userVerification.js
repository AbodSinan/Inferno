import Sequelize from 'sequelize';
import Conn from './db';
import Customer from './user';

export const EmailVerification = Conn.describe('emailVerification', {
  
});

EmailVerification.belongsTo(Customer);
