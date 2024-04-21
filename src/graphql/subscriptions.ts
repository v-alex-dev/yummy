/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateRecipe = /* GraphQL */ `subscription OnCreateRecipe($filter: ModelSubscriptionRecipeFilterInput) {
  onCreateRecipe(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateRecipeSubscriptionVariables,
  APITypes.OnCreateRecipeSubscription
>;
export const onUpdateRecipe = /* GraphQL */ `subscription OnUpdateRecipe($filter: ModelSubscriptionRecipeFilterInput) {
  onUpdateRecipe(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateRecipeSubscriptionVariables,
  APITypes.OnUpdateRecipeSubscription
>;
export const onDeleteRecipe = /* GraphQL */ `subscription OnDeleteRecipe($filter: ModelSubscriptionRecipeFilterInput) {
  onDeleteRecipe(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteRecipeSubscriptionVariables,
  APITypes.OnDeleteRecipeSubscription
>;
export const onCreateCategorieIngredient = /* GraphQL */ `subscription OnCreateCategorieIngredient(
  $filter: ModelSubscriptionCategorieIngredientFilterInput
) {
  onCreateCategorieIngredient(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCategorieIngredientSubscriptionVariables,
  APITypes.OnCreateCategorieIngredientSubscription
>;
export const onUpdateCategorieIngredient = /* GraphQL */ `subscription OnUpdateCategorieIngredient(
  $filter: ModelSubscriptionCategorieIngredientFilterInput
) {
  onUpdateCategorieIngredient(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCategorieIngredientSubscriptionVariables,
  APITypes.OnUpdateCategorieIngredientSubscription
>;
export const onDeleteCategorieIngredient = /* GraphQL */ `subscription OnDeleteCategorieIngredient(
  $filter: ModelSubscriptionCategorieIngredientFilterInput
) {
  onDeleteCategorieIngredient(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCategorieIngredientSubscriptionVariables,
  APITypes.OnDeleteCategorieIngredientSubscription
>;
export const onCreateCategorieRecipes = /* GraphQL */ `subscription OnCreateCategorieRecipes(
  $filter: ModelSubscriptionCategorieRecipesFilterInput
) {
  onCreateCategorieRecipes(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCategorieRecipesSubscriptionVariables,
  APITypes.OnCreateCategorieRecipesSubscription
>;
export const onUpdateCategorieRecipes = /* GraphQL */ `subscription OnUpdateCategorieRecipes(
  $filter: ModelSubscriptionCategorieRecipesFilterInput
) {
  onUpdateCategorieRecipes(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCategorieRecipesSubscriptionVariables,
  APITypes.OnUpdateCategorieRecipesSubscription
>;
export const onDeleteCategorieRecipes = /* GraphQL */ `subscription OnDeleteCategorieRecipes(
  $filter: ModelSubscriptionCategorieRecipesFilterInput
) {
  onDeleteCategorieRecipes(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCategorieRecipesSubscriptionVariables,
  APITypes.OnDeleteCategorieRecipesSubscription
>;
export const onCreateStep = /* GraphQL */ `subscription OnCreateStep($filter: ModelSubscriptionStepFilterInput) {
  onCreateStep(filter: $filter) {
    id
    number
    description
    createdAt
    updatedAt
    recipeStepId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateStepSubscriptionVariables,
  APITypes.OnCreateStepSubscription
>;
export const onUpdateStep = /* GraphQL */ `subscription OnUpdateStep($filter: ModelSubscriptionStepFilterInput) {
  onUpdateStep(filter: $filter) {
    id
    number
    description
    createdAt
    updatedAt
    recipeStepId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateStepSubscriptionVariables,
  APITypes.OnUpdateStepSubscription
>;
export const onDeleteStep = /* GraphQL */ `subscription OnDeleteStep($filter: ModelSubscriptionStepFilterInput) {
  onDeleteStep(filter: $filter) {
    id
    number
    description
    createdAt
    updatedAt
    recipeStepId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteStepSubscriptionVariables,
  APITypes.OnDeleteStepSubscription
>;
export const onCreateIngredient = /* GraphQL */ `subscription OnCreateIngredient(
  $filter: ModelSubscriptionIngredientFilterInput
) {
  onCreateIngredient(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateIngredientSubscriptionVariables,
  APITypes.OnCreateIngredientSubscription
>;
export const onUpdateIngredient = /* GraphQL */ `subscription OnUpdateIngredient(
  $filter: ModelSubscriptionIngredientFilterInput
) {
  onUpdateIngredient(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateIngredientSubscriptionVariables,
  APITypes.OnUpdateIngredientSubscription
>;
export const onDeleteIngredient = /* GraphQL */ `subscription OnDeleteIngredient(
  $filter: ModelSubscriptionIngredientFilterInput
) {
  onDeleteIngredient(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteIngredientSubscriptionVariables,
  APITypes.OnDeleteIngredientSubscription
>;
export const onCreateIngredientRecipe = /* GraphQL */ `subscription OnCreateIngredientRecipe(
  $filter: ModelSubscriptionIngredientRecipeFilterInput
) {
  onCreateIngredientRecipe(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateIngredientRecipeSubscriptionVariables,
  APITypes.OnCreateIngredientRecipeSubscription
>;
export const onUpdateIngredientRecipe = /* GraphQL */ `subscription OnUpdateIngredientRecipe(
  $filter: ModelSubscriptionIngredientRecipeFilterInput
) {
  onUpdateIngredientRecipe(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateIngredientRecipeSubscriptionVariables,
  APITypes.OnUpdateIngredientRecipeSubscription
>;
export const onDeleteIngredientRecipe = /* GraphQL */ `subscription OnDeleteIngredientRecipe(
  $filter: ModelSubscriptionIngredientRecipeFilterInput
) {
  onDeleteIngredientRecipe(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteIngredientRecipeSubscriptionVariables,
  APITypes.OnDeleteIngredientRecipeSubscription
>;
