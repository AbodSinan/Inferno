import Sequelize from 'sequelize';
import Conn from './db';
import * as settings from '../settings';

import Product from './product';
import ProductVariation from './variations';

export const Transaction = Conn.define('transaction', {
  uuid: {
    type: Sequelize.UUIDV4,
    primaryKey: true
  },
  totalPrice: {
    type: Sequelize.DECIMAL(settings.decimalPlaces),
    defaultValue: 0.00,
  }
});

export const TransactionProduct = Conn.define('transactionProduct', {
  uuid: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
  }
});

TransactionProduct.belongsTo(ProductVariation);
Transaction.hasMany(Product, { through: TransactionProduct });
