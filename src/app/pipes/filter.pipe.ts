import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
@Injectable()
export class FilterPipe implements PipeTransform {
  transform(items: any[], field: string, value: string): any[] {

    if (!items) {
      return [];
    }
    if (!field || !value) {
      return items;
    }

    if (!items.length) {
        return [];
    }

    return items.filter(singleItem =>
      singleItem[field].toLowerCase().includes(value.toLowerCase())
    );
  }
}

