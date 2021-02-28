import Sequalize from 'sequelize';
import Faker from 'faker';
import Conn from './db';

export const Customer = Conn.define('customer', {
  emailAddress: {
    type: Sequalize.STRING,
    allowNull: false,
    unique: true,
    valiate: {
      isEmail: true,
    }
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
    defaultValue: false,
  }
});

Conn.sync({ force: true }).then(() => {
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
