/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getRecipe = /* GraphQL */ `query GetRecipe($id: ID!) {
  getRecipe(id: $id) {
    id
    title
    step {
      nextToken
      __typename
    }
    ingredients {
      nextToken
      __typename
    }
    categorieRecipeId
    categorie {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetRecipeQueryVariables, APITypes.GetRecipeQuery>;
export const listRecipes = /* GraphQL */ `query ListRecipes(
  $filter: ModelRecipeFilterInput
  $limit: Int
  $nextToken: String
) {
  listRecipes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      categorieRecipeId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRecipesQueryVariables,
  APITypes.ListRecipesQuery
>;
export const getCategorieIngredient = /* GraphQL */ `query GetCategorieIngredient($id: ID!) {
  getCategorieIngredient(id: $id) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCategorieIngredientQueryVariables,
  APITypes.GetCategorieIngredientQuery
>;
export const listCategorieIngredients = /* GraphQL */ `query ListCategorieIngredients(
  $filter: ModelCategorieIngredientFilterInput
  $limit: Int
  $nextToken: String
) {
  listCategorieIngredients(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCategorieIngredientsQueryVariables,
  APITypes.ListCategorieIngredientsQuery
>;
export const getCategorieRecipes = /* GraphQL */ `query GetCategorieRecipes($id: ID!) {
  getCategorieRecipes(id: $id) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCategorieRecipesQueryVariables,
  APITypes.GetCategorieRecipesQuery
>;
export const listCategorieRecipes = /* GraphQL */ `query ListCategorieRecipes(
  $filter: ModelCategorieRecipesFilterInput
  $limit: Int
  $nextToken: String
) {
  listCategorieRecipes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCategorieRecipesQueryVariables,
  APITypes.ListCategorieRecipesQuery
>;
export const getStep = /* GraphQL */ `query GetStep($id: ID!) {
  getStep(id: $id) {
    id
    number
    description
    createdAt
    updatedAt
    recipeStepId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetStepQueryVariables, APITypes.GetStepQuery>;
export const listSteps = /* GraphQL */ `query ListSteps(
  $filter: ModelStepFilterInput
  $limit: Int
  $nextToken: String
) {
  listSteps(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      number
      description
      createdAt
      updatedAt
      recipeStepId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListStepsQueryVariables, APITypes.ListStepsQuery>;
export const getIngredient = /* GraphQL */ `query GetIngredient($id: ID!) {
  getIngredient(id: $id) {
    id
    name
    categorieIngredientId
    categorie {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetIngredientQueryVariables,
  APITypes.GetIngredientQuery
>;
export const listIngredients = /* GraphQL */ `query ListIngredients(
  $filter: ModelIngredientFilterInput
  $limit: Int
  $nextToken: String
) {
  listIngredients(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      categorieIngredientId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListIngredientsQueryVariables,
  APITypes.ListIngredientsQuery
>;
export const getIngredientRecipe = /* GraphQL */ `query GetIngredientRecipe($id: ID!) {
  getIngredientRecipe(id: $id) {
    recipeId
    ingredientId
    recipe {
      id
      title
      categorieRecipeId
      createdAt
      updatedAt
      __typename
    }
    ingredient {
      id
      name
      categorieIngredientId
      createdAt
      updatedAt
      __typename
    }
    quanity
    measurement
    id
    createdAt
    updatedAt
    recipeIngredientsId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetIngredientRecipeQueryVariables,
  APITypes.GetIngredientRecipeQuery
>;
export const listIngredientRecipes = /* GraphQL */ `query ListIngredientRecipes(
  $filter: ModelIngredientRecipeFilterInput
  $limit: Int
  $nextToken: String
) {
  listIngredientRecipes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      recipeId
      ingredientId
      quanity
      measurement
      id
      createdAt
      updatedAt
      recipeIngredientsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListIngredientRecipesQueryVariables,
  APITypes.ListIngredientRecipesQuery
>;
