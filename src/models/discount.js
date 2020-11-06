import Sequelize from 'sequelize';
import Conn from './db';

import discountTypeEnums from '../enums/discountTypeEnums';
import Segment from './segment';
import Brand from './brand';
import Product from './product';

export const Discount = Conn.define('discount', {
  type: {
    type: Sequelize.ENUM(discountTypeEnums)
  },
  percentage: {
    type: Sequelize.INTEGER
  },
  amount: {
    type: Sequelize.DECIMAL,
  },
  validFrom: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW(),
  },
  validTo: {
    type: Sequelize.DATE,
  }
}, {
  Sequelize,
  validate: {
    singleDiscountType() {
      if (
        (this.type === discountTypeEnums.AMOUNT && this.amount === null)
        || (this.type === discountTypeEnums.PERCENTAGE && this.percentage === null)
      ) {
        throw new Error('Invalid discount fields received');
      }
    },
    validateDates() {
      if (this.validTo && this.validTo > this.validFrom) {
        throw new Error('validFrom comes after validTo');
      }
    }
  }
});

export const BrandDiscount = Conn.define('brandDiscount', {
  uuid: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  }
});

export const SegmentDiscount = Conn.define('segmentDiscount', {
  uuid: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  }
});

export const ProductDiscount = Conn.define('productDiscount', {
  uuid: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
  }
});

Discount.belongsToMany(Brand, { through: 'BrandDiscount' });
Discount.belongsToMany(Segment, { through: 'SegmentDiscount' });
Discount.belongsToMany(Product, { through: ProductDiscount});
