import Sequelize from 'sequelize';
import Conn from './db';

import ProductVariation from './variations';

export const Vendor = Conn.define('vendor', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  location: {
    type: Sequelize.GEOGRAPHY,
  },
});

export const VendorProductVariation = Conn.define('vendorProductVariation', {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  }
});

ProductVariation.belongsToMany(Vendor, { through: VendorProductVariation });
Vendor.belongsToMany(ProductVariation, { through: VendorProductVariation });
