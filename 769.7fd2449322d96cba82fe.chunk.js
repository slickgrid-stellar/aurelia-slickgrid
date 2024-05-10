"use strict";(self.webpackChunkau_slickgrid_demo=self.webpackChunkau_slickgrid_demo||[]).push([[769],{544:(t,e,i)=>{i.d(e,{A:()=>d});var a=i(1157),n=i.n(a),o=i(8614),r=i.n(o)()(n());r.push([t.id,".duration-bg{background-color:#e9d4f1 !important}",""]);const d=r},2769:(t,e,i)=>{i.r(e),i.d(e,{Example11:()=>G});var a={};i.r(a),i.d(a,{default:()=>l,dependencies:()=>s,name:()=>r,register:()=>h,template:()=>d});var n=i(3399),o=i(544);const r="example11",d='<h2>\n  ${title}\n  <span class="float-end">\n    <a style="font-size: 18px"\n        target="_blank"\n        href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/packages/demo/src/examples/slickgrid/example11.ts">\n      <span class="mdi mdi-link-variant"></span> code\n    </a>\n  </span>\n</h2>\n<div class="subtitle" innerhtml.bind="subTitle"></div>\n\n<div class="col-sm-12">\n  <span>\n    <label>Scroll: </label>\n    <div class="btn-group" role="group" aria-label="...">\n      <button class="btn btn-sm btn-outline-secondary btn-icon" data-test="scroll-top-btn" click.trigger="scrollGridTop()">\n        <i class="mdi mdi-arrow-down mdi-rotate-180 icon"></i>\n      </button>\n      <button class="btn btn-sm btn-outline-secondary btn-icon" data-test="scroll-bottom-btn"\n              click.trigger="scrollGridBottom()">\n        <i class="mdi mdi-arrow-down icon"></i>\n      </button>\n    </div>\n    <button class="btn btn-sm btn-outline-secondary btn-icon" data-test="add-new-item-top-btn"\n            click.trigger="addNewItem()">Add New Mocked Item (top)</button>\n    <button class="btn btn-sm btn-outline-secondary btn-icon" data-test="add-new-item-bottom-btn"\n            click.trigger="addNewItem(\'bottom\')">Add New Mocked Item\n      (bottom)</button>\n    <button class="btn btn-sm btn-outline-secondary btn-icon" data-test="update-second-item-btn"\n            click.trigger="updateSecondItem()">\n      Update 2nd Row Item with Random Duration\n    </button>\n    <button class="btn btn-sm btn-outline-secondary btn-icon" data-test="highlight-row5-btn"\n            click.trigger="highlighFifthRow()">Highlight 5th Row</button>\n    <button class="btn btn-sm btn-outline-secondary btn-icon" data-test="highlight-duration40-btn"\n            click.trigger="changeDurationBackgroundColor()">\n      Highlight Rows with Duration over 50\n    </button>\n  </span>\n  <hr />\n</div>\n\n<aurelia-slickgrid grid-id="grid11"\n                    column-definitions.bind="columnDefinitions"\n                    grid-options.bind="gridOptions"\n                    dataset.bind="dataset"\n                    on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)">\n</aurelia-slickgrid>\n',l=d,s=[];let c;function h(t){c||(c=n.K94.define({name:r,template:d,dependencies:s})),t.register(c)}var u=i(764),g=i(3957),m=i.n(g),b=i(1794),p=i.n(b),f=i(8866),k=i.n(f),w=i(621),v=i.n(w),y=i(3897),M=i.n(y),C=i(5462),I=i.n(C),D={};D.styleTagTransform=I(),D.setAttributes=v(),D.insert=k().bind(null,"head"),D.domAPI=p(),D.insertStyleElement=M(),m()(o.A,D),o.A&&o.A.locals&&o.A.locals,i(1125);class G{title="Example 11: Add / Update / Highlight a Datagrid Item";subTitle='\n  Add / Update / Hightlight an Item from the Datagrid (<a href="https://ghiscoding.gitbook.io/aurelia-slickgrid/grid-functionalities/add-update-highlight" target="_blank">Wiki docs</a>).\n  <ul>\n    <li><b>Note:</b> this demo is <b>only</b> on the datagrid (client) side, you still need to deal with the backend yourself</li>\n    <li>Adding an item, will always be showing as the 1st item in the grid because that is the best visual place to add it</li>\n    <li>Add/Update an item requires a valid Slickgrid Selection Model, you have 2 choices to deal with this:</li>\n    <ul><li>You can enable "enableCheckboxSelector" or "enableRowSelection" to True</li></ul>\n    <li>Click on any of the buttons below to test this out</li>\n    <li>You can change the highlighted color &amp; animation by changing the <a href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/aurelia-slickgrid/src/aurelia-slickgrid/styles/_variables.scss" target="_blank">SASS Variables</a></li>\n    <ul>\n      <li>"$row-highlight-background-color" or "$row-highlight-fade-animation"</li>\n    </ul>\n    <li>You can also add CSS class(es) on the fly (or on page load) on rows with certain criteria, (e.g. click on last button)\n    <ul>\n      <li>Example, click on button "Highlight Rows with Duration over 50" to see row styling changing. <a href="https://ghiscoding.gitbook.io/aurelia-slickgrid/grid-functionalities/dynamic-item-metadata" target="_blank">Wiki doc</a></li>\n    </ul>\n  </ul>\n  ';aureliaGrid;dataView;grid;gridService;columnDefinitions=[];gridOptions;dataset=[];updatedObject;constructor(){this.defineGrid(),this.mockData(1e3)}aureliaGridReady(t){this.aureliaGrid=t,this.dataView=t.dataView,this.grid=t.slickGrid,this.gridService=t.gridService}defineGrid(){this.columnDefinitions=[{id:"delete",field:"id",excludeFromHeaderMenu:!0,formatter:u._tQ.icon,params:{iconCssClass:"mdi mdi-trash-can pointer"},minWidth:30,maxWidth:30,onCellClick:(t,e)=>{console.log(e),confirm("Are you sure?")&&this.aureliaGrid.gridService.deleteItemById(e.dataContext.id)}},{id:"title",name:"Title",field:"title",sortable:!0,type:u.PUO.string,editor:{model:u.R8o.longText}},{id:"duration",name:"Duration (days)",field:"duration",sortable:!0,type:u.PUO.number,editor:{model:u.R8o.text},onCellChange:(t,e)=>{alert("onCellChange directly attached to the column definition"),console.log(e)}},{id:"complete",name:"% Complete",field:"percentComplete",formatter:u._tQ.percentCompleteBar,type:u.PUO.number,editor:{model:u.R8o.integer}},{id:"start",name:"Start",field:"start",formatter:u._tQ.dateIso,sortable:!0,type:u.PUO.date},{id:"finish",name:"Finish",field:"finish",formatter:u._tQ.dateIso,sortable:!0,type:u.PUO.date},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",formatter:u._tQ.checkmarkMaterial,type:u.PUO.number,editor:{model:u.R8o.checkbox}}],this.gridOptions={asyncEditorLoading:!1,autoResize:{container:"#demo-container",rightPadding:10},editable:!0,enableColumnPicker:!0,enableCellNavigation:!0,enableRowSelection:!0}}mockData(t){const e=[];for(let i=0;i<t;i++){const t=2e3+Math.floor(10*Math.random()),a=Math.floor(11*Math.random()),n=Math.floor(29*Math.random()),o=Math.round(100*Math.random());e[i]={id:i,title:"Task "+i,duration:Math.round(100*Math.random())+"",percentComplete:o,percentCompleteNumber:o,start:new Date(t,a,n),finish:new Date(t,a+1,n),effortDriven:i%5==0}}this.dataset=e}addNewItem(t){const e=this.createNewItem(1);this.aureliaGrid.gridService.addItem(e,{position:t})}createNewItem(t=1){const e=this.aureliaGrid.dataView.getItems();let i=0;e.forEach((t=>{t.id>i&&(i=t.id)}));const a=i+t,n=2e3+Math.floor(10*Math.random()),o=Math.floor(11*Math.random()),r=Math.floor(29*Math.random()),d=Math.round(100*Math.random());return{id:a,title:"Task "+a,duration:Math.round(100*Math.random())+"",percentComplete:d,percentCompleteNumber:d,start:new Date(n,o,r),finish:new Date(n,o+2,r),effortDriven:!0}}changeDurationBackgroundColor(){this.dataView.getItemMetadata=this.updateItemMetadataForDurationOver40(this.dataView.getItemMetadata),this.grid.invalidate(),this.grid.render()}highlighFifthRow(){this.scrollGridTop(),this.aureliaGrid.gridService.highlightRow(4,1500)}updateItemMetadataForDurationOver40(t){return e=>{const i=this.dataView.getItem(e);let a={cssClasses:""};return"object"==typeof t&&(a=t(e)),a&&i&&i.duration&&+i.duration>40&&(a.cssClasses=(a.cssClasses||"")+" duration-bg"),a}}updateSecondItem(){this.scrollGridTop();const t=this.aureliaGrid.gridService.getDataItemByRowNumber(1);t.duration=Math.round(100*Math.random()),this.aureliaGrid.gridService.updateItem(t)}scrollGridBottom(){this.aureliaGrid.slickGrid.navigateBottom()}scrollGridTop(){this.aureliaGrid.slickGrid.navigateTop()}}n.K94.define(a,G)}}]);