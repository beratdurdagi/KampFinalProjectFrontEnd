import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Product[], searchText: string): Product[] {

    searchText =searchText?searchText.toLocaleLowerCase() : "";
    
    if (!value) {
      return [];
    }
    if (!searchText) {
      return value;
    }
    

    return value.filter(p => {
      return p.productName.toLocaleLowerCase().indexOf(searchText)!==-1;
    });
  }
}


