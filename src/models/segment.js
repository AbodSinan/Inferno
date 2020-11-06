import Sequelize from 'sequelize';
import Conn from './db';

import Product from './product';

export const Segment = Conn.define('segment', {
  name: {
    type: Sequelize.STRING,
  },
});

// TODO: Need to decide whether this shoud Be one-to-many or many-to-many (thinking the latter)
Segment.hasMany(Product);
