import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLFloat,
} from 'graphql';

export const Variation = new GraphQLObjectType({
  name: 'Variation',
  description: 'A specific variation of a product',
  fields() {
    return {
      id: {
        type: GraphQLInt,
        resolve(variation) {
          return variation.id;
        }
      },
      name: {
        type: GraphQLString,
        resolve(variation) {
          return variation.name;
        }
      },
      priceDelta: {
        type: GraphQLFloat,
        resolve(variation) {
          return variation.priceDelta;
        }
      },
      variationType: {
        type: VariationType,
        resolve(variation) {
          return variation.getVariationType();
        }
      }
    };
  }
});

export const VariationType = new GraphQLObjectType({
  name: 'VariationType',
  description: 'The type of variation, e.g. (Size, model, etc.)',
  fields() {
    return {
      id: {
        type: GraphQLInt,
        resolve(variationType) {
          return variationType.id;
        }
      },
      name: {
        type: GraphQLString,
        resolve(variationType) {
          return variationType.name;
        }
      }
    };
  }
});
