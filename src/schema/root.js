import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLList,
} from 'graphql';

import * as productSchema from './product';
import { Product, ProductCategory } from '../models/product';
import { productMutations } from './mutations/productMutations';

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
    }
  })
});

const Mutation = new GraphQLObjectType({
  name: 'Mutations',
  description: 'Functions for CRUDing models',
  fields() {
    return {
      ...productMutations,
    };
  }
});

const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});

export default Schema;
