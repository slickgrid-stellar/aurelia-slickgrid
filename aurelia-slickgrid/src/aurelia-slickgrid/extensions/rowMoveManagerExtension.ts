import { singleton, inject } from 'aurelia-framework';
import { CellArgs, Extension } from '../models';
import { SharedService } from '../services/shared.service';

// using external non-typed js libraries
declare var Slick: any;
declare function require(name: string);

@singleton(true)
@inject(SharedService)
export class RowMoveManagerExtension implements Extension {
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

  register(rowSelectionPlugin?: any): any {
    if (this.sharedService && this.sharedService.grid && this.sharedService.gridOptions) {
      // dynamically import the SlickGrid plugin with requireJS
      require('slickgrid/plugins/slick.rowmovemanager.js');

      // this also requires the Row Selection Model to be registered as well
      if (!rowSelectionPlugin || !this.sharedService.grid.getSelectionModel()) {
        require('slickgrid/plugins/slick.rowselectionmodel');
        rowSelectionPlugin = new Slick.RowSelectionModel(this.sharedService.gridOptions.rowSelectionOptions || {});
        this.sharedService.grid.setSelectionModel(rowSelectionPlugin);
      }

      this._extension = new Slick.RowMoveManager(this.sharedService.gridOptions.rowMoveManager || { cancelEditOnDrag: true });
      this.sharedService.grid.registerPlugin(this._extension);

      // hook all events
      if (this.sharedService.grid && this.sharedService.gridOptions.rowMoveManager) {
        this._eventHandler.subscribe(this._extension.onBeforeMoveRows, (e: any, args: CellArgs) => {
          if (this.sharedService.gridOptions.rowMoveManager && typeof this.sharedService.gridOptions.rowMoveManager.onBeforeMoveRows === 'function') {
            this.sharedService.gridOptions.rowMoveManager.onBeforeMoveRows(e, args);
          }
        });
        this._eventHandler.subscribe(this._extension.onMoveRows, (e: any, args: CellArgs) => {
          if (this.sharedService.gridOptions.rowMoveManager && typeof this.sharedService.gridOptions.rowMoveManager.onMoveRows === 'function') {
            this.sharedService.gridOptions.rowMoveManager.onMoveRows(e, args);
          }
        });
      }
      return this._extension;
    }
    return null;
  }
}
