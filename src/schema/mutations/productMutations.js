import {
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';

import Db from '../../models/db';
import { Product } from '../product';

export const productMutations = {
  addProduct: {
    type: Product,
    args: {
      name: {
        type: new GraphQLNonNull(GraphQLString),
      },
      description: {
        type: new GraphQLNonNull(GraphQLString),
      },
      categoryId: {
        type: GraphQLString,
      }
    },
    resolve(source, args) {
      return Db.models.productCategory.findByPk(args.categoryId).then(
        category => category.createProduct({
          name: args.name,
          description: args.description
        })
      );
    }
  }
};
