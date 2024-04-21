/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createRecipe = /* GraphQL */ `mutation CreateRecipe(
  $input: CreateRecipeInput!
  $condition: ModelRecipeConditionInput
) {
  createRecipe(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateRecipeMutationVariables,
  APITypes.CreateRecipeMutation
>;
export const updateRecipe = /* GraphQL */ `mutation UpdateRecipe(
  $input: UpdateRecipeInput!
  $condition: ModelRecipeConditionInput
) {
  updateRecipe(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateRecipeMutationVariables,
  APITypes.UpdateRecipeMutation
>;
export const deleteRecipe = /* GraphQL */ `mutation DeleteRecipe(
  $input: DeleteRecipeInput!
  $condition: ModelRecipeConditionInput
) {
  deleteRecipe(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteRecipeMutationVariables,
  APITypes.DeleteRecipeMutation
>;
export const createCategorieIngredient = /* GraphQL */ `mutation CreateCategorieIngredient(
  $input: CreateCategorieIngredientInput!
  $condition: ModelCategorieIngredientConditionInput
) {
  createCategorieIngredient(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCategorieIngredientMutationVariables,
  APITypes.CreateCategorieIngredientMutation
>;
export const updateCategorieIngredient = /* GraphQL */ `mutation UpdateCategorieIngredient(
  $input: UpdateCategorieIngredientInput!
  $condition: ModelCategorieIngredientConditionInput
) {
  updateCategorieIngredient(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCategorieIngredientMutationVariables,
  APITypes.UpdateCategorieIngredientMutation
>;
export const deleteCategorieIngredient = /* GraphQL */ `mutation DeleteCategorieIngredient(
  $input: DeleteCategorieIngredientInput!
  $condition: ModelCategorieIngredientConditionInput
) {
  deleteCategorieIngredient(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCategorieIngredientMutationVariables,
  APITypes.DeleteCategorieIngredientMutation
>;
export const createCategorieRecipes = /* GraphQL */ `mutation CreateCategorieRecipes(
  $input: CreateCategorieRecipesInput!
  $condition: ModelCategorieRecipesConditionInput
) {
  createCategorieRecipes(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCategorieRecipesMutationVariables,
  APITypes.CreateCategorieRecipesMutation
>;
export const updateCategorieRecipes = /* GraphQL */ `mutation UpdateCategorieRecipes(
  $input: UpdateCategorieRecipesInput!
  $condition: ModelCategorieRecipesConditionInput
) {
  updateCategorieRecipes(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCategorieRecipesMutationVariables,
  APITypes.UpdateCategorieRecipesMutation
>;
export const deleteCategorieRecipes = /* GraphQL */ `mutation DeleteCategorieRecipes(
  $input: DeleteCategorieRecipesInput!
  $condition: ModelCategorieRecipesConditionInput
) {
  deleteCategorieRecipes(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCategorieRecipesMutationVariables,
  APITypes.DeleteCategorieRecipesMutation
>;
export const createStep = /* GraphQL */ `mutation CreateStep(
  $input: CreateStepInput!
  $condition: ModelStepConditionInput
) {
  createStep(input: $input, condition: $condition) {
    id
    number
    description
    createdAt
    updatedAt
    recipeStepId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateStepMutationVariables,
  APITypes.CreateStepMutation
>;
export const updateStep = /* GraphQL */ `mutation UpdateStep(
  $input: UpdateStepInput!
  $condition: ModelStepConditionInput
) {
  updateStep(input: $input, condition: $condition) {
    id
    number
    description
    createdAt
    updatedAt
    recipeStepId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateStepMutationVariables,
  APITypes.UpdateStepMutation
>;
export const deleteStep = /* GraphQL */ `mutation DeleteStep(
  $input: DeleteStepInput!
  $condition: ModelStepConditionInput
) {
  deleteStep(input: $input, condition: $condition) {
    id
    number
    description
    createdAt
    updatedAt
    recipeStepId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteStepMutationVariables,
  APITypes.DeleteStepMutation
>;
export const createIngredient = /* GraphQL */ `mutation CreateIngredient(
  $input: CreateIngredientInput!
  $condition: ModelIngredientConditionInput
) {
  createIngredient(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateIngredientMutationVariables,
  APITypes.CreateIngredientMutation
>;
export const updateIngredient = /* GraphQL */ `mutation UpdateIngredient(
  $input: UpdateIngredientInput!
  $condition: ModelIngredientConditionInput
) {
  updateIngredient(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateIngredientMutationVariables,
  APITypes.UpdateIngredientMutation
>;
export const deleteIngredient = /* GraphQL */ `mutation DeleteIngredient(
  $input: DeleteIngredientInput!
  $condition: ModelIngredientConditionInput
) {
  deleteIngredient(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteIngredientMutationVariables,
  APITypes.DeleteIngredientMutation
>;
export const createIngredientRecipe = /* GraphQL */ `mutation CreateIngredientRecipe(
  $input: CreateIngredientRecipeInput!
  $condition: ModelIngredientRecipeConditionInput
) {
  createIngredientRecipe(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateIngredientRecipeMutationVariables,
  APITypes.CreateIngredientRecipeMutation
>;
export const updateIngredientRecipe = /* GraphQL */ `mutation UpdateIngredientRecipe(
  $input: UpdateIngredientRecipeInput!
  $condition: ModelIngredientRecipeConditionInput
) {
  updateIngredientRecipe(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateIngredientRecipeMutationVariables,
  APITypes.UpdateIngredientRecipeMutation
>;
export const deleteIngredientRecipe = /* GraphQL */ `mutation DeleteIngredientRecipe(
  $input: DeleteIngredientRecipeInput!
  $condition: ModelIngredientRecipeConditionInput
) {
  deleteIngredientRecipe(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteIngredientRecipeMutationVariables,
  APITypes.DeleteIngredientRecipeMutation
>;
