import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CreateCategorieIngredientComponent } from '../create-categorie-ingredient/create-categorie-ingredient.component';
import { SelectCategoryIComponent } from '../select-category-i/select-category-i.component';

// Amplify-api
import { generateClient, type Client } from 'aws-amplify/api';
import * as mutations from '../../graphql/mutations';

@Component({
  selector: 'app-create-categorie-recipe',
  standalone: true,
  imports: [
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
    CreateCategorieIngredientComponent,
    SelectCategoryIComponent,
  ],
  templateUrl: './create-categorie-recipe.component.html',
  styleUrl: './create-categorie-recipe.component.scss',
})
export class CreateCategorieRecipeComponent {
  public client: Client = generateClient();
  formGroup: FormGroup = new FormGroup({});
  ngOnInit(): void {
    this.formGroup = new FormGroup({
      category: new FormControl<string>(this.formGroup.value.category),
    });
  }

  async onSubmitCR() {
    try {
      const response = await this.client.graphql({
        query: mutations.createCategorieRecipes,
        variables: {
          input: {
            name: this.formGroup.value.category,
          },
        },
      });
    } catch (error) {
      console.log('error creating category', error);
    }
  }
}
