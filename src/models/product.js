import Sequelize from 'sequelize';
import Conn from './db';

export const Product = Conn.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

export const ProductCategory = Conn.define('category', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  order: {
    type: Sequelize.INTEGER,
  }
});

ProductCategory.hasMany(Product);
