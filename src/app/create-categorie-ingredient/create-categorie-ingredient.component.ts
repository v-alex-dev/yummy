import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

// Amplify-api
import { generateClient, type Client } from 'aws-amplify/api';
import * as mutations from '../../graphql/mutations';
@Component({
  selector: 'app-create-categorie-ingredient',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonModule, InputTextModule],
  templateUrl: './create-categorie-ingredient.component.html',
  styleUrl: './create-categorie-ingredient.component.scss',
})
export class CreateCategorieIngredientComponent {
  public client: Client = generateClient();
  formGroup: FormGroup = new FormGroup({});
  ngOnInit(): void {
    this.formGroup = new FormGroup({
      category: new FormControl<string>(this.formGroup.value.category),
    });
  }

  async onSubmitCI() {
    try {
      const response = await this.client.graphql({
        query: mutations.createCategorieIngredient,
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
