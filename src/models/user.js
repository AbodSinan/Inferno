import Sequalize from 'sequelize';
import Conn from './db';

export const Customer = Conn.define('customer', {
  emailAddress: {
    type: Sequalize.STRING,
    allowNull: false,
    unique: true,
  },
  firstName: {
    type: Sequalize.STRING,
  },
  lastName: {
    type: Sequalize.STRING,
  },
  userName: {
    type: Sequalize.STRING,
    unique: true,
  },
  gender: {
    type: Sequalize.ENUM('male', 'female', 'other'),
  },
  password: {
    type: Sequalize.STRING,
  },
  isVerified: {
    type: Sequalize.BOOLEAN,
    default: false,
  }
});
