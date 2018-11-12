import { singleton, inject } from 'aurelia-framework';
import { HeaderButtonOnCommandArgs } from '../models';
import { SharedService } from '../services/shared.service';

// using external non-typed js libraries
declare var Slick: any;
declare function require(name: string);

@singleton(true)
@inject(SharedService)
export class HeaderButtonExtension {
  private _eventHandler: any = new Slick.EventHandler();
  private _extension: any;

  constructor(private sharedService: SharedService) { }

  dispose() {
    // unsubscribe all SlickGrid events
    this._eventHandler.unsubscribeAll();

    if (this._extension && this._extension.destroy) {
      this._extension.destroy();
    }
  }

  // Header Button Plugin
  register(): any {
    if (this.sharedService && this.sharedService.grid && this.sharedService.gridOptions) {
      // dynamically import the SlickGrid plugin with requireJS
      require('slickgrid/plugins/slick.headerbuttons');

      this._extension = new Slick.Plugins.HeaderButtons(this.sharedService.gridOptions.headerButton || {});
      this.sharedService.grid.registerPlugin(this._extension);
      this._eventHandler.subscribe(this._extension.onCommand, (e: any, args: HeaderButtonOnCommandArgs) => {
        if (this.sharedService.gridOptions.headerButton && typeof this.sharedService.gridOptions.headerButton.onCommand === 'function') {
          this.sharedService.gridOptions.headerButton.onCommand(e, args);
        }
      });
      return this._extension;
    }
    return null;
  }
}
