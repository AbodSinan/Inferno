import Sequelize from 'sequelize';
import Conn from './db';
import Product from './product';

export const Brand = Conn.define('brand', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

// Relationships
Brand.hasMany(Product);
Product.belongsTo(Brand);
