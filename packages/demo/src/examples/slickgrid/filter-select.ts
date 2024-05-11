import { bindable, resolve } from 'aurelia';
import { SlickGrid } from 'aurelia-slickgrid';

export class FilterSelect {
  model: {
    collection: any[]; // this will be filled by the collection of your column definition
  };
  grid!: SlickGrid;
  selectedItem: any;

  itemMatcher = (a: any, b: any) => a && b && a.id === b.id;

  constructor(private elm: HTMLElement = resolve(HTMLElement)) { }

  focus() {
    this.elm.querySelector('select')?.focus();
  }

  // we need to define the method, it can be empty so that we can override it
  // inside the `custom-aureliaViewModelFilter()` method
  selectedItemChanged() { }
}
