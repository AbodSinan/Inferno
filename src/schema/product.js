import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
} from 'graphql';
import { GraphQLList } from 'graphql/type/definition';

export const Product = new GraphQLObjectType({
  name: 'Product',
  description: 'A product of a kind, I guess',
  fields() {
    return {
      id: {
        type: GraphQLInt,
        resolve(product) {
          return product.id;
        }
      },
      name: {
        type: GraphQLString,
        resolve(product) {
          return product.name;
        }
      },
      description: {
        type: GraphQLString,
        resolve(product) {
          return product.description;
        }
      },
      category: {
        type: ProductCategory,
        resolve(product) {
          return product.getProductCategory();
        }
      }
    };
  }
});

export const ProductCategory = new GraphQLObjectType({
  name: 'ProductCategory',
  description: 'A category that is associated to different products',
  fields() {
    return {
      id: {
        type: GraphQLInt,
        resolve(productCategory) {
          return productCategory.id;
        }
      },
      name: {
        type: GraphQLString,
        resolve(productCategory) {
          return productCategory.name;
        },
      },
      order: {
        type: GraphQLInt,
        resolve(productCategory) {
          return productCategory.order;
        }
      },
      products: {
        type: new GraphQLList(Product),
        resolve(productCategory) {
          return productCategory.getProducts();
        }
      }
    };
  }
});
