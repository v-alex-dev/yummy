import { Component } from '@angular/core';

import { generateClient } from 'aws-amplify/api';
import { SelectButtonModule } from 'primeng/selectbutton';
import { listCategorieIngredients } from '../../graphql/queries';

interface ISelectCategoryCompoment {
  id: string;
  label: string;
  value: string;
}

@Component({
  selector: 'app-select-category-i',
  standalone: true,
  imports: [SelectButtonModule],
  templateUrl: './select-category-i.component.html',
  styleUrl: './select-category-i.component.scss',
})
export class SelectCategoryIComponent {
  public client = generateClient();
  public categories: ISelectCategoryCompoment[] = [];

  ngOnInit(): void {
    this.initSelectOption();
  }

  async initSelectOption() {
    try {
      const response = await this.client.graphql({
        query: listCategorieIngredients,
      });
      this.categories = response.data.listCategorieIngredients.items.map(
        (item: any) => {
          return {
            id: item.id,
            label: item.name,
            value: item.name,
          };
        }
      );
      console.log('response', response);
    } catch (error) {
      console.log('error fetch categories ingredient', error);
    }
  }
}
