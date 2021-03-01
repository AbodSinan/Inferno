import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
} from 'graphql';

export const Brand = new GraphQLObjectType({
  name: 'Brand',
  description: 'The Brand of the product',
  fields() {
    return {
      id: {
        type: GraphQLInt,
        resolve(brand) {
          return brand.id;
        }
      },
      name: {
        type: GraphQLString,
        resolve(brand) {
          return brand.name;
        }
      },
    };
  }
});
