import Sequelize from 'sequelize';
import _ from 'lodash';
import Faker from 'faker';
import Db from './db';

import { Variation } from './variation';

export const Product = Db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

export const ProductCategory = Db.define('productCategory', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  order: {
    type: Sequelize.INTEGER,
  }
});

// Relationships
ProductCategory.hasMany(Product);
Product.belongsTo(ProductCategory);
Product.hasMany(Variation);
Variation.belongsTo(Product);

// Create 10 categories containing a product
Db.sync({ force: true }).then(() => {
  _.times(10, () => ProductCategory.create({
    name: Faker.name.firstName(),
    order: Faker.random.number(),
  }).then((productCategory) => {
    _.times(10, () => productCategory.createProduct({
      name: Faker.company.companyName(),
      description: Faker.lorem.paragraph(),
    }));
  }));
});
