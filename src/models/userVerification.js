import Conn from './db';
import Customer from './user';
import Sequelize from 'sequelize';

export const EmailVerification = Conn.describe('emailVerification', {
  key: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  validTo: {
    type: Sequelize.DATE,
  }
});

// Relationships
EmailVerification.belongsTo(Customer);
