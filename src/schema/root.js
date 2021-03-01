import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLList,
} from 'graphql';

import * as productSchema from './product';
import * as variationSchema from './variation';
import * as brandSchema from './brand';
import { Product, ProductCategory } from '../models/product';
import { categoryMutations, productMutations } from './mutations/productMutations';
import { Variation, VariationType } from '../models/variation';
import { Brand } from '../models/brand';

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query Object',
  fields: () => ({
    products: {
      type: new GraphQLList(productSchema.Product),
      resolve(root, args) {
        return Product.findAll({ where: args });
      }
    },
    productCategories: {
      type: new GraphQLList(productSchema.ProductCategory),
      resolve(root, args) {
        return ProductCategory.findAll({ where: args });
      }
    },
    variations: {
      type: new GraphQLList(variationSchema.Variation),
      resolve(root, args) {
        return Variation.findAll({ where: args });
      }
    },
    variationTypes: {
      type: new GraphQLList(variationSchema.VariationType),
      resolve(root, args) {
        return VariationType.findAll({ where: args });
      }
    },
    brands: {
      type: new GraphQLList(brandSchema.Brand),
      resolve(root, args) {
        return Brand.findAll({ where: args });
      }
    }
  })
});

const Mutation = new GraphQLObjectType({
  name: 'Mutations',
  description: 'Functions for CRUDing models',
  fields() {
    return {
      ...productMutations,
      ...categoryMutations,
    };
  }
});

const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});

export default Schema;
