/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateRecipeInput = {
  id?: string | null,
  title?: string | null,
  categorieRecipeId?: string | null,
};

export type ModelRecipeConditionInput = {
  title?: ModelStringInput | null,
  categorieRecipeId?: ModelIDInput | null,
  and?: Array< ModelRecipeConditionInput | null > | null,
  or?: Array< ModelRecipeConditionInput | null > | null,
  not?: ModelRecipeConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Recipe = {
  __typename: "Recipe",
  id: string,
  title?: string | null,
  step?: ModelStepConnection | null,
  ingredients?: ModelIngredientRecipeConnection | null,
  categorieRecipeId?: string | null,
  categorie?: CategorieRecipes | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelStepConnection = {
  __typename: "ModelStepConnection",
  items:  Array<Step | null >,
  nextToken?: string | null,
};

export type Step = {
  __typename: "Step",
  id: string,
  number?: number | null,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
  recipeStepId?: string | null,
};

export type ModelIngredientRecipeConnection = {
  __typename: "ModelIngredientRecipeConnection",
  items:  Array<IngredientRecipe | null >,
  nextToken?: string | null,
};

export type IngredientRecipe = {
  __typename: "IngredientRecipe",
  recipeId?: string | null,
  ingredientId?: string | null,
  recipe?: Recipe | null,
  ingredient?: Ingredient | null,
  quanity?: number | null,
  measurement?: Measurement | null,
  id: string,
  createdAt: string,
  updatedAt: string,
  recipeIngredientsId?: string | null,
};

export type Ingredient = {
  __typename: "Ingredient",
  id: string,
  name: string,
  categorieIngredientId?: string | null,
  categorie?: CategorieIngredient | null,
  createdAt: string,
  updatedAt: string,
};

export type CategorieIngredient = {
  __typename: "CategorieIngredient",
  id: string,
  name?: string | null,
  createdAt: string,
  updatedAt: string,
};

export enum Measurement {
  MILILITRE = "MILILITRE",
  LITRE = "LITRE",
  MILIGRAMME = "MILIGRAMME",
  GRAMME = "GRAMME",
}


export type CategorieRecipes = {
  __typename: "CategorieRecipes",
  id: string,
  name?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateRecipeInput = {
  id: string,
  title?: string | null,
  categorieRecipeId?: string | null,
};

export type DeleteRecipeInput = {
  id: string,
};

export type CreateCategorieIngredientInput = {
  id?: string | null,
  name?: string | null,
};

export type ModelCategorieIngredientConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelCategorieIngredientConditionInput | null > | null,
  or?: Array< ModelCategorieIngredientConditionInput | null > | null,
  not?: ModelCategorieIngredientConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateCategorieIngredientInput = {
  id: string,
  name?: string | null,
};

export type DeleteCategorieIngredientInput = {
  id: string,
};

export type CreateCategorieRecipesInput = {
  id?: string | null,
  name?: string | null,
};

export type ModelCategorieRecipesConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelCategorieRecipesConditionInput | null > | null,
  or?: Array< ModelCategorieRecipesConditionInput | null > | null,
  not?: ModelCategorieRecipesConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateCategorieRecipesInput = {
  id: string,
  name?: string | null,
};

export type DeleteCategorieRecipesInput = {
  id: string,
};

export type CreateStepInput = {
  id?: string | null,
  number?: number | null,
  description?: string | null,
  recipeStepId?: string | null,
};

export type ModelStepConditionInput = {
  number?: ModelIntInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelStepConditionInput | null > | null,
  or?: Array< ModelStepConditionInput | null > | null,
  not?: ModelStepConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  recipeStepId?: ModelIDInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateStepInput = {
  id: string,
  number?: number | null,
  description?: string | null,
  recipeStepId?: string | null,
};

export type DeleteStepInput = {
  id: string,
};

export type CreateIngredientInput = {
  id?: string | null,
  name: string,
  categorieIngredientId?: string | null,
};

export type ModelIngredientConditionInput = {
  name?: ModelStringInput | null,
  categorieIngredientId?: ModelIDInput | null,
  and?: Array< ModelIngredientConditionInput | null > | null,
  or?: Array< ModelIngredientConditionInput | null > | null,
  not?: ModelIngredientConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateIngredientInput = {
  id: string,
  name?: string | null,
  categorieIngredientId?: string | null,
};

export type DeleteIngredientInput = {
  id: string,
};

export type CreateIngredientRecipeInput = {
  recipeId?: string | null,
  ingredientId?: string | null,
  quanity?: number | null,
  measurement?: Measurement | null,
  id?: string | null,
  recipeIngredientsId?: string | null,
};

export type ModelIngredientRecipeConditionInput = {
  recipeId?: ModelIDInput | null,
  ingredientId?: ModelIDInput | null,
  quanity?: ModelFloatInput | null,
  measurement?: ModelMeasurementInput | null,
  and?: Array< ModelIngredientRecipeConditionInput | null > | null,
  or?: Array< ModelIngredientRecipeConditionInput | null > | null,
  not?: ModelIngredientRecipeConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  recipeIngredientsId?: ModelIDInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelMeasurementInput = {
  eq?: Measurement | null,
  ne?: Measurement | null,
};

export type UpdateIngredientRecipeInput = {
  recipeId?: string | null,
  ingredientId?: string | null,
  quanity?: number | null,
  measurement?: Measurement | null,
  id: string,
  recipeIngredientsId?: string | null,
};

export type DeleteIngredientRecipeInput = {
  id: string,
};

export type ModelRecipeFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  categorieRecipeId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelRecipeFilterInput | null > | null,
  or?: Array< ModelRecipeFilterInput | null > | null,
  not?: ModelRecipeFilterInput | null,
};

export type ModelRecipeConnection = {
  __typename: "ModelRecipeConnection",
  items:  Array<Recipe | null >,
  nextToken?: string | null,
};

export type ModelCategorieIngredientFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCategorieIngredientFilterInput | null > | null,
  or?: Array< ModelCategorieIngredientFilterInput | null > | null,
  not?: ModelCategorieIngredientFilterInput | null,
};

export type ModelCategorieIngredientConnection = {
  __typename: "ModelCategorieIngredientConnection",
  items:  Array<CategorieIngredient | null >,
  nextToken?: string | null,
};

export type ModelCategorieRecipesFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCategorieRecipesFilterInput | null > | null,
  or?: Array< ModelCategorieRecipesFilterInput | null > | null,
  not?: ModelCategorieRecipesFilterInput | null,
};

export type ModelCategorieRecipesConnection = {
  __typename: "ModelCategorieRecipesConnection",
  items:  Array<CategorieRecipes | null >,
  nextToken?: string | null,
};

export type ModelStepFilterInput = {
  id?: ModelIDInput | null,
  number?: ModelIntInput | null,
  description?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStepFilterInput | null > | null,
  or?: Array< ModelStepFilterInput | null > | null,
  not?: ModelStepFilterInput | null,
  recipeStepId?: ModelIDInput | null,
};

export type ModelIngredientFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  categorieIngredientId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelIngredientFilterInput | null > | null,
  or?: Array< ModelIngredientFilterInput | null > | null,
  not?: ModelIngredientFilterInput | null,
};

export type ModelIngredientConnection = {
  __typename: "ModelIngredientConnection",
  items:  Array<Ingredient | null >,
  nextToken?: string | null,
};

export type ModelIngredientRecipeFilterInput = {
  recipeId?: ModelIDInput | null,
  ingredientId?: ModelIDInput | null,
  quanity?: ModelFloatInput | null,
  measurement?: ModelMeasurementInput | null,
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelIngredientRecipeFilterInput | null > | null,
  or?: Array< ModelIngredientRecipeFilterInput | null > | null,
  not?: ModelIngredientRecipeFilterInput | null,
  recipeIngredientsId?: ModelIDInput | null,
};

export type ModelSubscriptionRecipeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  categorieRecipeId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionRecipeFilterInput | null > | null,
  or?: Array< ModelSubscriptionRecipeFilterInput | null > | null,
  recipeStepId?: ModelSubscriptionIDInput | null,
  recipeIngredientsId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionCategorieIngredientFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCategorieIngredientFilterInput | null > | null,
  or?: Array< ModelSubscriptionCategorieIngredientFilterInput | null > | null,
};

export type ModelSubscriptionCategorieRecipesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCategorieRecipesFilterInput | null > | null,
  or?: Array< ModelSubscriptionCategorieRecipesFilterInput | null > | null,
};

export type ModelSubscriptionStepFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  number?: ModelSubscriptionIntInput | null,
  description?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStepFilterInput | null > | null,
  or?: Array< ModelSubscriptionStepFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionIngredientFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  categorieIngredientId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionIngredientFilterInput | null > | null,
  or?: Array< ModelSubscriptionIngredientFilterInput | null > | null,
};

export type ModelSubscriptionIngredientRecipeFilterInput = {
  recipeId?: ModelSubscriptionIDInput | null,
  ingredientId?: ModelSubscriptionIDInput | null,
  quanity?: ModelSubscriptionFloatInput | null,
  measurement?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionIngredientRecipeFilterInput | null > | null,
  or?: Array< ModelSubscriptionIngredientRecipeFilterInput | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateRecipeMutationVariables = {
  input: CreateRecipeInput,
  condition?: ModelRecipeConditionInput | null,
};

export type CreateRecipeMutation = {
  createRecipe?:  {
    __typename: "Recipe",
    id: string,
    title?: string | null,
    step?:  {
      __typename: "ModelStepConnection",
      nextToken?: string | null,
    } | null,
    ingredients?:  {
      __typename: "ModelIngredientRecipeConnection",
      nextToken?: string | null,
    } | null,
    categorieRecipeId?: string | null,
    categorie?:  {
      __typename: "CategorieRecipes",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRecipeMutationVariables = {
  input: UpdateRecipeInput,
  condition?: ModelRecipeConditionInput | null,
};

export type UpdateRecipeMutation = {
  updateRecipe?:  {
    __typename: "Recipe",
    id: string,
    title?: string | null,
    step?:  {
      __typename: "ModelStepConnection",
      nextToken?: string | null,
    } | null,
    ingredients?:  {
      __typename: "ModelIngredientRecipeConnection",
      nextToken?: string | null,
    } | null,
    categorieRecipeId?: string | null,
    categorie?:  {
      __typename: "CategorieRecipes",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRecipeMutationVariables = {
  input: DeleteRecipeInput,
  condition?: ModelRecipeConditionInput | null,
};

export type DeleteRecipeMutation = {
  deleteRecipe?:  {
    __typename: "Recipe",
    id: string,
    title?: string | null,
    step?:  {
      __typename: "ModelStepConnection",
      nextToken?: string | null,
    } | null,
    ingredients?:  {
      __typename: "ModelIngredientRecipeConnection",
      nextToken?: string | null,
    } | null,
    categorieRecipeId?: string | null,
    categorie?:  {
      __typename: "CategorieRecipes",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCategorieIngredientMutationVariables = {
  input: CreateCategorieIngredientInput,
  condition?: ModelCategorieIngredientConditionInput | null,
};

export type CreateCategorieIngredientMutation = {
  createCategorieIngredient?:  {
    __typename: "CategorieIngredient",
    id: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCategorieIngredientMutationVariables = {
  input: UpdateCategorieIngredientInput,
  condition?: ModelCategorieIngredientConditionInput | null,
};

export type UpdateCategorieIngredientMutation = {
  updateCategorieIngredient?:  {
    __typename: "CategorieIngredient",
    id: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCategorieIngredientMutationVariables = {
  input: DeleteCategorieIngredientInput,
  condition?: ModelCategorieIngredientConditionInput | null,
};

export type DeleteCategorieIngredientMutation = {
  deleteCategorieIngredient?:  {
    __typename: "CategorieIngredient",
    id: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCategorieRecipesMutationVariables = {
  input: CreateCategorieRecipesInput,
  condition?: ModelCategorieRecipesConditionInput | null,
};

export type CreateCategorieRecipesMutation = {
  createCategorieRecipes?:  {
    __typename: "CategorieRecipes",
    id: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCategorieRecipesMutationVariables = {
  input: UpdateCategorieRecipesInput,
  condition?: ModelCategorieRecipesConditionInput | null,
};

export type UpdateCategorieRecipesMutation = {
  updateCategorieRecipes?:  {
    __typename: "CategorieRecipes",
    id: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCategorieRecipesMutationVariables = {
  input: DeleteCategorieRecipesInput,
  condition?: ModelCategorieRecipesConditionInput | null,
};

export type DeleteCategorieRecipesMutation = {
  deleteCategorieRecipes?:  {
    __typename: "CategorieRecipes",
    id: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateStepMutationVariables = {
  input: CreateStepInput,
  condition?: ModelStepConditionInput | null,
};

export type CreateStepMutation = {
  createStep?:  {
    __typename: "Step",
    id: string,
    number?: number | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    recipeStepId?: string | null,
  } | null,
};

export type UpdateStepMutationVariables = {
  input: UpdateStepInput,
  condition?: ModelStepConditionInput | null,
};

export type UpdateStepMutation = {
  updateStep?:  {
    __typename: "Step",
    id: string,
    number?: number | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    recipeStepId?: string | null,
  } | null,
};

export type DeleteStepMutationVariables = {
  input: DeleteStepInput,
  condition?: ModelStepConditionInput | null,
};

export type DeleteStepMutation = {
  deleteStep?:  {
    __typename: "Step",
    id: string,
    number?: number | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    recipeStepId?: string | null,
  } | null,
};

export type CreateIngredientMutationVariables = {
  input: CreateIngredientInput,
  condition?: ModelIngredientConditionInput | null,
};

export type CreateIngredientMutation = {
  createIngredient?:  {
    __typename: "Ingredient",
    id: string,
    name: string,
    categorieIngredientId?: string | null,
    categorie?:  {
      __typename: "CategorieIngredient",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateIngredientMutationVariables = {
  input: UpdateIngredientInput,
  condition?: ModelIngredientConditionInput | null,
};

export type UpdateIngredientMutation = {
  updateIngredient?:  {
    __typename: "Ingredient",
    id: string,
    name: string,
    categorieIngredientId?: string | null,
    categorie?:  {
      __typename: "CategorieIngredient",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteIngredientMutationVariables = {
  input: DeleteIngredientInput,
  condition?: ModelIngredientConditionInput | null,
};

export type DeleteIngredientMutation = {
  deleteIngredient?:  {
    __typename: "Ingredient",
    id: string,
    name: string,
    categorieIngredientId?: string | null,
    categorie?:  {
      __typename: "CategorieIngredient",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateIngredientRecipeMutationVariables = {
  input: CreateIngredientRecipeInput,
  condition?: ModelIngredientRecipeConditionInput | null,
};

export type CreateIngredientRecipeMutation = {
  createIngredientRecipe?:  {
    __typename: "IngredientRecipe",
    recipeId?: string | null,
    ingredientId?: string | null,
    recipe?:  {
      __typename: "Recipe",
      id: string,
      title?: string | null,
      categorieRecipeId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    ingredient?:  {
      __typename: "Ingredient",
      id: string,
      name: string,
      categorieIngredientId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    quanity?: number | null,
    measurement?: Measurement | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    recipeIngredientsId?: string | null,
  } | null,
};

export type UpdateIngredientRecipeMutationVariables = {
  input: UpdateIngredientRecipeInput,
  condition?: ModelIngredientRecipeConditionInput | null,
};

export type UpdateIngredientRecipeMutation = {
  updateIngredientRecipe?:  {
    __typename: "IngredientRecipe",
    recipeId?: string | null,
    ingredientId?: string | null,
    recipe?:  {
      __typename: "Recipe",
      id: string,
      title?: string | null,
      categorieRecipeId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    ingredient?:  {
      __typename: "Ingredient",
      id: string,
      name: string,
      categorieIngredientId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    quanity?: number | null,
    measurement?: Measurement | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    recipeIngredientsId?: string | null,
  } | null,
};

export type DeleteIngredientRecipeMutationVariables = {
  input: DeleteIngredientRecipeInput,
  condition?: ModelIngredientRecipeConditionInput | null,
};

export type DeleteIngredientRecipeMutation = {
  deleteIngredientRecipe?:  {
    __typename: "IngredientRecipe",
    recipeId?: string | null,
    ingredientId?: string | null,
    recipe?:  {
      __typename: "Recipe",
      id: string,
      title?: string | null,
      categorieRecipeId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    ingredient?:  {
      __typename: "Ingredient",
      id: string,
      name: string,
      categorieIngredientId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    quanity?: number | null,
    measurement?: Measurement | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    recipeIngredientsId?: string | null,
  } | null,
};

export type GetRecipeQueryVariables = {
  id: string,
};

export type GetRecipeQuery = {
  getRecipe?:  {
    __typename: "Recipe",
    id: string,
    title?: string | null,
    step?:  {
      __typename: "ModelStepConnection",
      nextToken?: string | null,
    } | null,
    ingredients?:  {
      __typename: "ModelIngredientRecipeConnection",
      nextToken?: string | null,
    } | null,
    categorieRecipeId?: string | null,
    categorie?:  {
      __typename: "CategorieRecipes",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRecipesQueryVariables = {
  filter?: ModelRecipeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRecipesQuery = {
  listRecipes?:  {
    __typename: "ModelRecipeConnection",
    items:  Array< {
      __typename: "Recipe",
      id: string,
      title?: string | null,
      categorieRecipeId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCategorieIngredientQueryVariables = {
  id: string,
};

export type GetCategorieIngredientQuery = {
  getCategorieIngredient?:  {
    __typename: "CategorieIngredient",
    id: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCategorieIngredientsQueryVariables = {
  filter?: ModelCategorieIngredientFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategorieIngredientsQuery = {
  listCategorieIngredients?:  {
    __typename: "ModelCategorieIngredientConnection",
    items:  Array< {
      __typename: "CategorieIngredient",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCategorieRecipesQueryVariables = {
  id: string,
};

export type GetCategorieRecipesQuery = {
  getCategorieRecipes?:  {
    __typename: "CategorieRecipes",
    id: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCategorieRecipesQueryVariables = {
  filter?: ModelCategorieRecipesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategorieRecipesQuery = {
  listCategorieRecipes?:  {
    __typename: "ModelCategorieRecipesConnection",
    items:  Array< {
      __typename: "CategorieRecipes",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStepQueryVariables = {
  id: string,
};

export type GetStepQuery = {
  getStep?:  {
    __typename: "Step",
    id: string,
    number?: number | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    recipeStepId?: string | null,
  } | null,
};

export type ListStepsQueryVariables = {
  filter?: ModelStepFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStepsQuery = {
  listSteps?:  {
    __typename: "ModelStepConnection",
    items:  Array< {
      __typename: "Step",
      id: string,
      number?: number | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      recipeStepId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetIngredientQueryVariables = {
  id: string,
};

export type GetIngredientQuery = {
  getIngredient?:  {
    __typename: "Ingredient",
    id: string,
    name: string,
    categorieIngredientId?: string | null,
    categorie?:  {
      __typename: "CategorieIngredient",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListIngredientsQueryVariables = {
  filter?: ModelIngredientFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListIngredientsQuery = {
  listIngredients?:  {
    __typename: "ModelIngredientConnection",
    items:  Array< {
      __typename: "Ingredient",
      id: string,
      name: string,
      categorieIngredientId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetIngredientRecipeQueryVariables = {
  id: string,
};

export type GetIngredientRecipeQuery = {
  getIngredientRecipe?:  {
    __typename: "IngredientRecipe",
    recipeId?: string | null,
    ingredientId?: string | null,
    recipe?:  {
      __typename: "Recipe",
      id: string,
      title?: string | null,
      categorieRecipeId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    ingredient?:  {
      __typename: "Ingredient",
      id: string,
      name: string,
      categorieIngredientId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    quanity?: number | null,
    measurement?: Measurement | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    recipeIngredientsId?: string | null,
  } | null,
};

export type ListIngredientRecipesQueryVariables = {
  filter?: ModelIngredientRecipeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListIngredientRecipesQuery = {
  listIngredientRecipes?:  {
    __typename: "ModelIngredientRecipeConnection",
    items:  Array< {
      __typename: "IngredientRecipe",
      recipeId?: string | null,
      ingredientId?: string | null,
      quanity?: number | null,
      measurement?: Measurement | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      recipeIngredientsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateRecipeSubscriptionVariables = {
  filter?: ModelSubscriptionRecipeFilterInput | null,
};

export type OnCreateRecipeSubscription = {
  onCreateRecipe?:  {
    __typename: "Recipe",
    id: string,
    title?: string | null,
    step?:  {
      __typename: "ModelStepConnection",
      nextToken?: string | null,
    } | null,
    ingredients?:  {
      __typename: "ModelIngredientRecipeConnection",
      nextToken?: string | null,
    } | null,
    categorieRecipeId?: string | null,
    categorie?:  {
      __typename: "CategorieRecipes",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRecipeSubscriptionVariables = {
  filter?: ModelSubscriptionRecipeFilterInput | null,
};

export type OnUpdateRecipeSubscription = {
  onUpdateRecipe?:  {
    __typename: "Recipe",
    id: string,
    title?: string | null,
    step?:  {
      __typename: "ModelStepConnection",
      nextToken?: string | null,
    } | null,
    ingredients?:  {
      __typename: "ModelIngredientRecipeConnection",
      nextToken?: string | null,
    } | null,
    categorieRecipeId?: string | null,
    categorie?:  {
      __typename: "CategorieRecipes",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRecipeSubscriptionVariables = {
  filter?: ModelSubscriptionRecipeFilterInput | null,
};

export type OnDeleteRecipeSubscription = {
  onDeleteRecipe?:  {
    __typename: "Recipe",
    id: string,
    title?: string | null,
    step?:  {
      __typename: "ModelStepConnection",
      nextToken?: string | null,
    } | null,
    ingredients?:  {
      __typename: "ModelIngredientRecipeConnection",
      nextToken?: string | null,
    } | null,
    categorieRecipeId?: string | null,
    categorie?:  {
      __typename: "CategorieRecipes",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCategorieIngredientSubscriptionVariables = {
  filter?: ModelSubscriptionCategorieIngredientFilterInput | null,
};

export type OnCreateCategorieIngredientSubscription = {
  onCreateCategorieIngredient?:  {
    __typename: "CategorieIngredient",
    id: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCategorieIngredientSubscriptionVariables = {
  filter?: ModelSubscriptionCategorieIngredientFilterInput | null,
};

export type OnUpdateCategorieIngredientSubscription = {
  onUpdateCategorieIngredient?:  {
    __typename: "CategorieIngredient",
    id: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCategorieIngredientSubscriptionVariables = {
  filter?: ModelSubscriptionCategorieIngredientFilterInput | null,
};

export type OnDeleteCategorieIngredientSubscription = {
  onDeleteCategorieIngredient?:  {
    __typename: "CategorieIngredient",
    id: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCategorieRecipesSubscriptionVariables = {
  filter?: ModelSubscriptionCategorieRecipesFilterInput | null,
};

export type OnCreateCategorieRecipesSubscription = {
  onCreateCategorieRecipes?:  {
    __typename: "CategorieRecipes",
    id: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCategorieRecipesSubscriptionVariables = {
  filter?: ModelSubscriptionCategorieRecipesFilterInput | null,
};

export type OnUpdateCategorieRecipesSubscription = {
  onUpdateCategorieRecipes?:  {
    __typename: "CategorieRecipes",
    id: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCategorieRecipesSubscriptionVariables = {
  filter?: ModelSubscriptionCategorieRecipesFilterInput | null,
};

export type OnDeleteCategorieRecipesSubscription = {
  onDeleteCategorieRecipes?:  {
    __typename: "CategorieRecipes",
    id: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateStepSubscriptionVariables = {
  filter?: ModelSubscriptionStepFilterInput | null,
};

export type OnCreateStepSubscription = {
  onCreateStep?:  {
    __typename: "Step",
    id: string,
    number?: number | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    recipeStepId?: string | null,
  } | null,
};

export type OnUpdateStepSubscriptionVariables = {
  filter?: ModelSubscriptionStepFilterInput | null,
};

export type OnUpdateStepSubscription = {
  onUpdateStep?:  {
    __typename: "Step",
    id: string,
    number?: number | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    recipeStepId?: string | null,
  } | null,
};

export type OnDeleteStepSubscriptionVariables = {
  filter?: ModelSubscriptionStepFilterInput | null,
};

export type OnDeleteStepSubscription = {
  onDeleteStep?:  {
    __typename: "Step",
    id: string,
    number?: number | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    recipeStepId?: string | null,
  } | null,
};

export type OnCreateIngredientSubscriptionVariables = {
  filter?: ModelSubscriptionIngredientFilterInput | null,
};

export type OnCreateIngredientSubscription = {
  onCreateIngredient?:  {
    __typename: "Ingredient",
    id: string,
    name: string,
    categorieIngredientId?: string | null,
    categorie?:  {
      __typename: "CategorieIngredient",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateIngredientSubscriptionVariables = {
  filter?: ModelSubscriptionIngredientFilterInput | null,
};

export type OnUpdateIngredientSubscription = {
  onUpdateIngredient?:  {
    __typename: "Ingredient",
    id: string,
    name: string,
    categorieIngredientId?: string | null,
    categorie?:  {
      __typename: "CategorieIngredient",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteIngredientSubscriptionVariables = {
  filter?: ModelSubscriptionIngredientFilterInput | null,
};

export type OnDeleteIngredientSubscription = {
  onDeleteIngredient?:  {
    __typename: "Ingredient",
    id: string,
    name: string,
    categorieIngredientId?: string | null,
    categorie?:  {
      __typename: "CategorieIngredient",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateIngredientRecipeSubscriptionVariables = {
  filter?: ModelSubscriptionIngredientRecipeFilterInput | null,
};

export type OnCreateIngredientRecipeSubscription = {
  onCreateIngredientRecipe?:  {
    __typename: "IngredientRecipe",
    recipeId?: string | null,
    ingredientId?: string | null,
    recipe?:  {
      __typename: "Recipe",
      id: string,
      title?: string | null,
      categorieRecipeId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    ingredient?:  {
      __typename: "Ingredient",
      id: string,
      name: string,
      categorieIngredientId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    quanity?: number | null,
    measurement?: Measurement | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    recipeIngredientsId?: string | null,
  } | null,
};

export type OnUpdateIngredientRecipeSubscriptionVariables = {
  filter?: ModelSubscriptionIngredientRecipeFilterInput | null,
};

export type OnUpdateIngredientRecipeSubscription = {
  onUpdateIngredientRecipe?:  {
    __typename: "IngredientRecipe",
    recipeId?: string | null,
    ingredientId?: string | null,
    recipe?:  {
      __typename: "Recipe",
      id: string,
      title?: string | null,
      categorieRecipeId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    ingredient?:  {
      __typename: "Ingredient",
      id: string,
      name: string,
      categorieIngredientId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    quanity?: number | null,
    measurement?: Measurement | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    recipeIngredientsId?: string | null,
  } | null,
};

export type OnDeleteIngredientRecipeSubscriptionVariables = {
  filter?: ModelSubscriptionIngredientRecipeFilterInput | null,
};

export type OnDeleteIngredientRecipeSubscription = {
  onDeleteIngredientRecipe?:  {
    __typename: "IngredientRecipe",
    recipeId?: string | null,
    ingredientId?: string | null,
    recipe?:  {
      __typename: "Recipe",
      id: string,
      title?: string | null,
      categorieRecipeId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    ingredient?:  {
      __typename: "Ingredient",
      id: string,
      name: string,
      categorieIngredientId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    quanity?: number | null,
    measurement?: Measurement | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    recipeIngredientsId?: string | null,
  } | null,
};
