import Sequelize from 'sequelize';
import Conn from './db';

/* TODO: figure out the ideal manner in which to define this model
    the current implementation works in theory (eh) */

/* NOTE: one of the method I have in mind for defining prices is to have a base
    price for a product then add priceDeltas for product variations */

export const Variation = Conn.define('variation', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  priceDelta: {
    type: Sequelize.DECIMAL,
    allowNull: true,
  },
  params: {
    type: Sequelize.JSON,
  }
});

/* The type of variation for a certain product (e.g. Size, colour, etc.) */
export const VariationType = Conn.define('variationType', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

// Relationships
VariationType.hasMany(Variation);
Variation.belongsTo(VariationType);
