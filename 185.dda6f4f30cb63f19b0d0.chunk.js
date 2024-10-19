"use strict";(self.webpackChunkau_slickgrid_demo=self.webpackChunkau_slickgrid_demo||[]).push([[185],{185:(e,t,i)=>{i.r(t),i.d(t,{Example26:()=>y});var l={};i.r(l),i.d(l,{bindables:()=>c,default:()=>s,dependencies:()=>d,name:()=>o,register:()=>u,template:()=>r});var n=i(3952),a=i(7414);const o="example26",r='<h2>\n  ${title}\n  <span class="float-end">\n    <a style="font-size: 18px"\n        target="_blank"\n        href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/packages/demo/src/examples/slickgrid/example26.ts">\n      <span class="mdi mdi-link-variant"></span> code\n    </a>\n  </span>\n</h2>\n<div class="subtitle" innerhtml.bind="subTitle"></div>\n\n<div class="col-sm-6">\n  <label>autoEdit setting</label>\n  <br />\n  <span id="radioAutoEdit">\n    <div class="row">\n      <div class="col">\n        <label class="radio-inline control-label" for="radioTrue">\n          <input type="radio" name="inlineRadioOptions" id="radioTrue" checked value.bind="isAutoEdit"\n                  click.trigger="setAutoEdit(true)"> ON\n          (single-click)\n        </label>\n        <label class="radio-inline control-label" for="radioFalse">\n          <input type="radio" name="inlineRadioOptions" id="radioFalse" value.bind="isAutoEdit"\n                  click.trigger="setAutoEdit(false)"> OFF\n          (double-click)\n        </label>\n      </div>\n    </div>\n    <div class="row">\n      <div class="col">\n        <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="undo()">\n          <i class="mdi mdi-undo"></i>\n          Undo last edit(s)\n        </button>\n        <label class="checkbox-inline control-label" for="autoCommitEdit">\n          <input type="checkbox" id="autoCommitEdit" value.bind="gridOptions.autoCommitEdit"\n                  click.trigger="changeAutoCommit()">\n          Auto Commit Edit\n        </label>\n      </div>\n    </div>\n  </span>\n  <div class="row" style="margin-top: 5px">\n    <div class="col">\n      <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="aureliaGrid.filterService.clearFilters()">Clear\n        Filters</button>\n      <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="aureliaGrid.sortService.clearSorting()">Clear\n        Sorting</button>\n    </div>\n  </div>\n</div>\n\n<div class="col-sm-6">\n  <div class="alert alert-info" show.bind="updatedObject">\n    <strong>Updated Item:</strong> ${updatedObject | stringify}\n  </div>\n  <div class="alert alert-warning" show.bind="alertWarning">\n    ${alertWarning}\n  </div>\n</div>\n\n<div id="grid-container" class="col-sm-12">\n  <aurelia-slickgrid grid-id="grid26"\n                      column-definitions.bind="columnDefinitions"\n                      grid-options.bind="gridOptions"\n                      dataset.bind="dataset"\n                      instances.bind="aureliaGrid"\n                      on-cell-change.trigger="onCellChanged($event.detail.eventData, $event.detail.args)"\n                      on-click.trigger="onCellClicked($event.detail.eventData, $event.detail.args)">\n  </aurelia-slickgrid>\n</div>\n',s=r,d=[],c={};let m;function u(e){m||(m=a.K9.define({name:o,template:r,dependencies:d,bindables:c})),e.register(m)}var h=i(6824),g=i(6360);class p{args;aureliaViewModel;defaultId;defaultItem;selectedItem;grid;vm;elmBindingContext;constructor(e){this.args=e,this.grid=e&&e.grid,this.init()}get aureliaUtilService(){let e=this.gridOptions?.params?.aureliaUtilService;return e&&e instanceof g.hj0||(e=this.columnEditor?.params?.aureliaUtilService),e}get collection(){return this.columnDef?.editor?.collection??[]}get columnDef(){return this.args?.column??{}}get columnEditor(){return this.columnDef?.editor??{}}get gridOptions(){return this.grid?.getOptions()??{}}get hasAutoCommitEdit(){return this.args.grid.getOptions().autoCommitEdit}get validator(){return this.columnEditor.validator||this.columnDef.validator}async init(){if(!this.columnEditor?.params?.viewModel)throw new Error("[Aurelia-Slickgrid] For the Editors.aureliaComponent to work properly, you need to fill in the \"templateUrl\" property of your Custom Element Editor.\n      Example: this.columnDefs = [{ id: 'title', field: 'title', editor: { model: CustomEditor, collection: [...], param: { viewModel: MyVM } },");if(this.columnEditor?.params?.viewModel){const e={grid:this.grid,model:{collection:this.collection}},t=this.columnEditor.params.viewModel;this.vm=await this.aureliaUtilService.createAureliaViewModelAddToSlot(t,e,this.args.container),this.elmBindingContext=this.vm?.controller?.children?.[0].scope.bindingContext}}save(){const e=this.validate();e&&e.valid&&(this.hasAutoCommitEdit?this.args.grid.getEditorLock().commitCurrentEdit():this.args.commitChanges())}cancel(){this.elmBindingContext&&(this.elmBindingContext.selectedItem=this.defaultItem),this.args?.cancelChanges&&this.args.cancelChanges()}destroy(){this.vm?.controller?.deactivate(this.vm.controller,null)}hide(){this.elmBindingContext?.hide()}show(){this.elmBindingContext?.focus()}focus(){this.elmBindingContext?.focus()}applyValue(e,t){e[this.columnDef.field]=t}getValue(){return this.elmBindingContext?.selectedItem.id}loadValue(e){const t=e?.[this.columnDef.field];this.selectedItem=t,this.defaultItem=t,window.setTimeout((()=>{this.focus(),this.elmBindingContext&&(this.elmBindingContext.selectedItem=t,this.elmBindingContext.selectedItemChanged=e=>{this.selectedItem=e,e!==t&&this.save()})}),0)}serializeValue(){return this.selectedItem}isValueChanged(){return!(""===this.selectedItem.id&&(null===this.defaultId||void 0===this.defaultId))&&this.selectedItem.id!==this.defaultId}validate(){if(this.validator){const e=this.selectedItem.id;return this.validator(e,this.args)}return{valid:!0,msg:null}}}class f{_shouldTriggerQuery=!0;container;grid;searchTerms=[];columnDef;callback;operator=g.huT.equal;vm;elmBindingContext;get aureliaUtilService(){let e=this.gridOptions?.params?.aureliaUtilService;return e&&e instanceof g.hj0||(e=this.columnFilter?.params?.aureliaUtilService),e}get collection(){return this.columnFilter?.collection??[]}get columnFilter(){return this.columnDef?.filter??{}}get gridOptions(){return this.grid?.getOptions()??{}}async init(e){if(this.grid=e.grid,this.callback=e.callback,this.columnDef=e.columnDef,this.searchTerms=(e.hasOwnProperty("searchTerms")?e.searchTerms:[])||[],!this.columnFilter?.params?.viewModel)throw new Error("[Aurelia-Slickgrid] For the Filters.aureliaComponent to work properly, you need to fill in the \"viewModel\" property of your Custom Element Filter.\n      Example: this.columnDefs = [{ id: 'title', field: 'title', filter: { model: CustomFilter, collection: [...], param: { viewModel: MyVM } },");if(this.columnFilter.params.viewModel){this.container=this.grid.getHeaderRowColumn(this.columnDef.id),(0,g.i3Z)(this.container);const e={grid:this.grid,model:{collection:this.collection}},t=this.columnFilter.params.viewModel;this.vm=await this.aureliaUtilService.createAureliaViewModelAddToSlot(t,e,this.container),this.elmBindingContext=this.vm?.controller?.children?.[0].scope.bindingContext,this.elmBindingContext&&(this.elmBindingContext.selectedItemChanged=e=>{this.callback(void 0,{columnDef:this.columnDef,operator:this.operator,searchTerms:[e.id],shouldTriggerQuery:this._shouldTriggerQuery}),this._shouldTriggerQuery=!0})}}clear(e=!0){this._shouldTriggerQuery=e,this.elmBindingContext?.selectedItem&&(this.elmBindingContext.selectedItem={id:"",name:""})}destroy(){this.vm?.controller?.deactivate(this.vm.controller,null),this.container=this.grid.getHeaderRowColumn(this.columnDef.id),(0,g.i3Z)(this.container)}setValues(e){this.elmBindingContext?.selectedItem&&(this.elmBindingContext.selectedItem=e)}}var b=i(5014),v=i(4646),C=i(3443);i(1376);let y=(()=>{let e,t,i=[(0,a.EM)(l)],o=[];return class{static{t=this}static{const l="function"==typeof Symbol&&Symbol.metadata?Object.create(null):void 0;(0,n.G4)(null,e={value:t},i,{kind:"class",name:t.name,metadata:l},null,o),t=e.value,l&&Object.defineProperty(t,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:l}),(0,n.zF)(t,o)}aureliaUtilService;title="Example 26: Use of Aurelia Custom Elements";subTitle='\n  <h3>Filters, Editors, AsyncPostRender with Aurelia Custom Elements</h3>\n  Grid with usage of Aurelia Custom Elements as Editor &amp; AsyncPostRender (similar to Formatter).\n  <ul>\n    <li>Support of Aurelia Custom Element as Custom Editor (click on any "Assignee" name cell)</li>\n    <ul>\n      <li>That column uses a simple select drodown wrapped in an Aurelia Custom Element\n      <li>Increased Grid Options "rowHeight" &amp; "headerRowHeight" to 45 so that the Custom Element fits in the cell.</li>\n    </ul>\n    <li>Support of Aurelia Custom Element as Custom Filter ("Assignee" columns), which also uses Custom Element\n    <li>The 2nd "Assignee" column (showing in bold text) uses "asyncPostRender" with an Aurelia Custom Element</li>\n    <ul>\n      <li>Why can\'t we use Aurelia Custom Element as Customer Formatter and why do I see a slight delay in loading the data?</li>\n      <li>It\'s totally normal since SlickGrid Formatters only accept strings (synchronously),\n      so we cannot use that (Aurelia requires at least 1 full cycle to render the element), so we are left with SlickGrid "asyncPostRender" and\n      it works but as the name suggest it\'s async users might see noticeable delay in loading the data\n      </li>\n    </ul>\n  </ul>\n  ';_commandQueue=[];aureliaGrid;gridOptions;columnDefinitions=[];dataset=[];updatedObject;isAutoEdit=!0;alertWarning;assignees=[{id:"",name:""},{id:"1",name:"John"},{id:"2",name:"Pierre"},{id:"3",name:"Paul"}];constructor(e=(0,h.hd)(g.hj0)){this.aureliaUtilService=e,this.defineGrid()}attached(){this.dataset=this.mockData(100)}defineGrid(){this.columnDefinitions=[{id:"title",name:"Title",field:"title",filterable:!0,sortable:!0,type:g.PUO.string,editor:{model:g.R8o.longText,minLength:5,maxLength:255},minWidth:100,onCellChange:(e,t)=>{console.log(t),this.alertWarning=`Updated Title: ${t.dataContext.title}`}},{id:"assignee",name:"Assignee",field:"assignee",minWidth:100,filterable:!0,sortable:!0,filter:{model:f,collection:this.assignees,params:{viewModel:C.J}},queryFieldFilter:"assignee.id",queryFieldSorter:"assignee.name",formatter:g._tQ.complexObject,params:{complexFieldLabel:"assignee.name"},exportWithFormatter:!0,editor:{model:p,collection:this.assignees,params:{viewModel:v.A}},onCellChange:(e,t)=>{console.log(t),this.alertWarning=`Updated Title: ${t.dataContext.title}`}},{id:"assignee2",name:"Assignee with Aurelia Component",field:"assignee",minWidth:125,filterable:!0,sortable:!0,filter:{model:f,collection:this.assignees,params:{viewModel:C.J}},queryFieldFilter:"assignee.id",queryFieldSorter:"assignee.name",formatter:()=>"...",asyncPostRender:this.renderAureliaComponent.bind(this),params:{viewModel:b.y,complexFieldLabel:"assignee.name"},exportCustomFormatter:g._tQ.complexObject},{id:"duration",name:"Duration (days)",field:"duration",filterable:!0,minWidth:100,sortable:!0,type:g.PUO.number,filter:{model:g.CuW.slider,filterOptions:{hideSliderNumber:!1}},editor:{model:g.R8o.slider,minValue:0,maxValue:100}},{id:"complete",name:"% Complete",field:"percentComplete",filterable:!0,formatter:g._tQ.multiple,type:g.PUO.number,editor:{enableRenderHtml:!0,collection:Array.from(Array(101).keys()).map((e=>({value:e,label:e,symbol:'<i class="mdi mdi-percent-outline" style="color:cadetblue"></i>'}))),customStructure:{value:"value",label:"label",labelSuffix:"symbol"},collectionSortBy:{property:"label",sortDesc:!0},collectionFilterBy:{property:"value",value:0,operator:g.huT.notEqual},model:g.R8o.singleSelect},minWidth:100,params:{formatters:[g._tQ.collectionEditor,g._tQ.percentCompleteBar]}},{id:"start",name:"Start",field:"start",filterable:!0,filter:{model:g.CuW.compoundDate},formatter:g._tQ.dateIso,sortable:!0,minWidth:100,type:g.PUO.date,editor:{model:g.R8o.date}},{id:"finish",name:"Finish",field:"finish",filterable:!0,filter:{model:g.CuW.compoundDate},formatter:g._tQ.dateIso,sortable:!0,minWidth:100,type:g.PUO.date,editor:{model:g.R8o.date}}],this.gridOptions={asyncEditorLoading:!1,autoEdit:this.isAutoEdit,autoCommitEdit:!1,autoResize:{container:"#demo-container",rightPadding:10},rowHeight:45,editable:!0,enableCellNavigation:!0,enableColumnPicker:!0,enableExcelCopyBuffer:!0,enableFiltering:!0,enableAsyncPostRender:!0,asyncPostRenderDelay:0,editCommandHandler:(e,t,i)=>{this._commandQueue.push(i),i.execute()},params:{aureliaUtilService:this.aureliaUtilService}}}mockData(e,t=0){const i=[];for(let l=t;l<t+e;l++){const e=2e3+Math.floor(10*Math.random()),t=Math.floor(11*Math.random()),n=Math.floor(29*Math.random()),a=Math.round(100*Math.random());i.push({id:l,title:"Task "+l,assignee:l%3?this.assignees[2]:l%2?this.assignees[1]:this.assignees[0],duration:Math.round(100*Math.random())+"",percentComplete:a,percentCompleteNumber:a,start:new Date(e,t,n),finish:new Date(e,t+1,n),effortDriven:l%5==0})}return i}onCellChanged(e,t){console.log("onCellChange",t),this.updatedObject={...t.item}}onCellClicked(e,t){const i=this.aureliaGrid.gridService.getColumnFromEventArguments(t);console.log(i),"edit"===i.columnDef.id?(this.alertWarning=`open a modal window to edit: ${i.dataContext.title}`,this.aureliaGrid.gridService.highlightRow(t.row,1500)):"delete"===i.columnDef.id&&confirm("Are you sure?")&&(this.aureliaGrid.gridService.deleteItemById(i.dataContext.id),this.alertWarning=`Deleted: ${i.dataContext.title}`)}onCellValidation(e,t){alert(t.validationResults.msg)}changeAutoCommit(){return this.gridOptions.autoCommitEdit=!this.gridOptions.autoCommitEdit,this.aureliaGrid.slickGrid.setOptions({autoCommitEdit:this.gridOptions.autoCommitEdit}),!0}renderAureliaComponent(e,t,i,l){if(l.params.viewModel&&e){const t={model:i,grid:this.aureliaGrid.slickGrid};this.aureliaUtilService.createAureliaViewModelAddToSlot(l.params.viewModel,t,e)}}setAutoEdit(e){return this.isAutoEdit=e,this.aureliaGrid.slickGrid.setOptions({autoEdit:e}),!0}undo(){const e=this._commandQueue.pop();e&&g.W9y.cancelCurrentEdit()&&(e.undo(),this.aureliaGrid.slickGrid.gotoCell(e.row,e.cell,!1))}},t})()}}]);