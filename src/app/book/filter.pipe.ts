
import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './book'
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: Book[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
searchText = searchText.toLowerCase();
return items.filter( it => {
      return it.name.toLowerCase().includes(searchText);
    });
   }
}