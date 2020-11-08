import Conn from './db';
import Product from './product';
import Sequelize from 'sequelize';

export const Segment = Conn.define('segment', {
  name: {
    type: Sequelize.STRING,
  },
});

// Relationships
// TODO: Need to decide whether this shoud Be one-to-many or many-to-many (thinking the latter)
Segment.hasMany(Product);
