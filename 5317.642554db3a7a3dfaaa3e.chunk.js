"use strict";(self.webpackChunkau_slickgrid_demo=self.webpackChunkau_slickgrid_demo||[]).push([[5317],{5894:(e,t,i)=>{i.d(t,{A:()=>d});var a=i(8986),o=i.n(a),n=i(3603),l=i.n(n)()(o());l.push([e.id,".editable-field{background-color:rgba(227,240,251,.569) !important}.slick-dark-mode .editable-field{background-color:rgba(105,123,145,.57) !important}.unsaved-editable-field{background-color:#fbfdd1 !important}.slick-dark-mode .unsaved-editable-field{background-color:rgba(255,183,50,.8) !important;color:#fff}.slick-dark-mode{--bs-btn-color: #bebebe}.panel-wm{width:calc(100vw - 12px)}",""]);const d=l},5317:(e,t,i)=>{i.r(t),i.d(t,{Example30:()=>A});var a={};i.r(a),i.d(a,{bindables:()=>c,default:()=>r,dependencies:()=>m,name:()=>d,register:()=>p,template:()=>s});var o=i(2741),n=i(7689),l=i(5894);const d="example30",s='<h2>\n  ${title}\n  <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="toggleDarkMode()" data-test="toggle-dark-mode">\n    <i class="mdi mdi-theme-light-dark"></i>\n    <span>Toggle Dark Mode</span>\n  </button>\n  <span class="float-end">\n    <a style="font-size: 18px"\n        target="_blank"\n        href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/packages/demo/src/examples/slickgrid/example30.ts">\n      <span class="mdi mdi-link-variant"></span> code\n    </a>\n  </span>\n</h2>\n<div class="subtitle" innerhtml.bind="subTitle"></div>\n\n<div class="mb-2">\n  <div class="btn-group btn-group-sm" role="group" aria-label="Basic Editing Commands">\n    <button type="button" class="btn btn-outline-secondary btn-icon" data-test="toggle-readonly-btn"\n            click.trigger="toggleGridEditReadonly()">\n      <i class="mdi mdi-table-edit"></i> Toggle Edit/Readonly Grid\n    </button>\n    <button type="button" class="btn btn-outline-secondary btn-icon" data-test="undo-last-edit-btn"\n            click.trigger="undoLastEdit()">\n      <i class="mdi mdi-undo"></i> Undo Last Edit\n    </button>\n    <button type="button" class="btn btn-outline-secondary btn-icon" data-test="undo-open-editor-btn"\n            click.trigger="undoLastEdit(true)">\n      <i class="mdi mdi-undo"></i> Undo Last Edit &amp; Open Editor\n    </button>\n    <button type="button" class="btn btn-outline-secondary btn-icon" data-test="undo-all-edits-btn"\n            click.trigger="undoAllEdits()">\n      <i class="mdi mdi-history"></i> Undo All Edits\n    </button>\n    <button type="button" class="btn btn-outline-secondary btn-icon" data-test="save-all-btn"\n            click.trigger="saveAll()">\n        <span>Save All</span>\n    </button>\n  </div>\n</div>\n\n<div class="mb-3">\n  <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">\n    <button type="button" class="btn btn-outline-secondary btn-icon" data-test="open-modal-create-btn"\n            click.trigger="openCompositeModal(\'create\')" disabled.bind="isCompositeDisabled">\n      <i class="mdi mdi-shape-square-plus"></i> Item Create\n    </button>\n    <button type="button" class="btn btn-outline-secondary btn-icon" data-test="open-modal-clone-btn"\n            click.trigger="openCompositeModal(\'clone\')" disabled.bind="isCompositeDisabled">\n      <i class="mdi mdi-content-copy"></i> Item Clone\n    </button>\n    <button type="button" class="btn btn-outline-secondary btn-icon" data-test="open-modal-edit-btn"\n            click.trigger="openCompositeModal(\'edit\')" disabled.bind="isCompositeDisabled">\n      <i class="mdi mdi-pencil"></i> Item Edit\n    </button>\n    <button type="button" class="btn btn-outline-secondary btn-icon" data-test="open-modal-mass-update-btn"\n            click.trigger="openCompositeModal(\'mass-update\')" disabled.bind="isCompositeDisabled">\n      <i class="mdi mdi-pencil-box-multiple-outline"></i> Mass Update\n    </button>\n    <button type="button" class="btn btn-outline-secondary btn-icon" data-test="open-modal-mass-selection-btn"\n            click.trigger="openCompositeModal(\'mass-selection\')" disabled.bind="isMassSelectionDisabled">\n      <i class="mdi mdi-check-box-outline"></i> Update Selected\n    </button>\n  </div>\n</div>\n\n<aurelia-slickgrid grid-id="grid30"\n                    column-definitions.bind="columnDefinitions"\n                    grid-options.bind="gridOptions"\n                    dataset.bind="dataset"\n                    on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"\n                    on-before-edit-cell.trigger="handleOnBeforeEditCell($event.detail.eventData, $event.detail.args)"\n                    on-cell-change.trigger="handleOnCellChange($event.detail.eventData, $event.detail.args)"\n                    on-click.trigger="handleOnCellClicked($event.detail.eventData, $event.detail.args)"\n                    on-composite-editor-change.trigger="handleOnCompositeEditorChange($event.detail.eventData, $event.detail.args)"\n                    on-item-deleted.trigger="handleItemDeleted($event.detail)"\n                    on-grid-state-changed.trigger="handleOnGridStateChanged($event.detail)"\n                    on-filter-changed.trigger="handleReRenderUnsavedStyling()"\n                    on-pagination-changed.trigger="handleReRenderUnsavedStyling()"\n                    on-validation-error.trigger="handleValidationError($event.detail.eventData, $event.detail.args)">\n</aurelia-slickgrid>\n',r=s,m=[],c={};let u;function p(e){u||(u=n.K94.define({name:d,template:s,dependencies:m,bindables:c})),e.register(u)}var h=i(597),g=i(3339),b=i(3061),y=i(1578),f=i(6492),C=i(8480),v=i(1337),k=i.n(v),w=i(334),S=i.n(w),x=i(2166),T=i.n(x),E=i(2185),I=i.n(E),M=i(4517),O=i.n(M),R=i(6658),U=i.n(R),G={};G.styleTagTransform=U(),G.setAttributes=I(),G.insert=T().bind(null,"head"),G.domAPI=S(),G.insertStyleElement=O(),k()(l.A,G),l.A&&l.A.locals&&l.A.locals,i(7375);const P=(e,t,i,a,o,n)=>(i=null==i?"":i,n.getOptions().editable&&a.editor?{text:i,addClasses:"editable-field",toolTip:"Click to Edit"}:i),N=(e,t)=>null!=e&&e.length||!(t.compositeEditorOptions&&"create"===t.compositeEditorOptions.modalType||"edit"===t.compositeEditorOptions.modalType)?/^(task\s\d+)*$/i.test(e)?{valid:!0,msg:""}:{valid:!1,msg:'Your title is invalid, it must start with "Task" followed by a number.'}:{valid:!1,msg:"This is a required field."};let A=(()=>{let e,t,i=[(0,n.EMX)(a)],l=[];return class{static{t=this}static{const a="function"==typeof Symbol&&Symbol.metadata?Object.create(null):void 0;(0,o.G4)(null,e={value:t},i,{kind:"class",name:t.name,metadata:a},null,l),t=e.value,a&&Object.defineProperty(t,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:a}),(0,o.zF)(t,l)}http;_darkMode=!1;title="Example 30: Composite Editor Modal";subTitle='Composite Editor allows you to Create, Clone, Edit, Mass Update & Mass Selection Changes inside a nice Modal Window.\n  <br>The modal is simply populated by looping through your column definition list and also uses a lot of the same logic as inline editing (see <a href="https://ghiscoding.gitbook.io/aurelia-slickgrid/grid-functionalities/composite-editor-modal" target="_blank">Composite Editor - Wiki</a>.)';aureliaGrid;compositeEditorInstance;gridOptions;columnDefinitions=[];dataset=[];editQueue=[];editedItems={};isGridEditable=!0;isCompositeDisabled=!1;isMassSelectionDisabled=!0;cellCssStyleQueue=[];complexityLevelList=[{value:0,label:"Very Simple"},{value:1,label:"Simple"},{value:2,label:"Straightforward"},{value:3,label:"Complex"},{value:4,label:"Very Complex"}];constructor(e=(0,g.hd)((0,g.pn)(h.xl))){this.http=e,this.compositeEditorInstance=new f.y}created(){this.defineGrids()}attached(){this.dataset=this.loadData(500)}detaching(){document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light"}defineGrids(){this.columnDefinitions=[{id:"title",name:'<span title="Task must always be followed by a number" class="text-warning mdi mdi-alert-outline"></span> Title <span title="Title is always rendered as UPPERCASE" class="mdi mdi-information-outline"></span>',field:"title",sortable:!0,type:C.PUO.string,minWidth:75,cssClass:"text-uppercase fw-bold",columnGroup:"Common Factor",filterable:!0,filter:{model:C.CuW.compoundInputText},editor:{model:C.R8o.longText,massUpdate:!1,required:!0,alwaysSaveOnEnterKey:!0,maxLength:12,editorOptions:{cols:45,rows:6,buttonTexts:{cancel:"Close",save:"Done"}},validator:N}},{id:"duration",name:"Duration",field:"duration",sortable:!0,filterable:!0,minWidth:75,type:C.PUO.number,columnGroup:"Common Factor",formatter:(e,t,i)=>null==i||""===i?"":i>1?`${i} days`:`${i} day`,editor:{model:C.R8o.float,massUpdate:!0,decimal:2,valueStep:1,minValue:0,maxValue:1e4,alwaysSaveOnEnterKey:!0,required:!0}},{id:"cost",name:"Cost",field:"cost",width:90,minWidth:70,sortable:!0,filterable:!0,type:C.PUO.number,columnGroup:"Analysis",filter:{model:C.CuW.compoundInputNumber},formatter:C._tQ.dollar},{id:"percentComplete",name:"% Complete",field:"percentComplete",minWidth:100,type:C.PUO.number,sortable:!0,filterable:!0,columnGroup:"Analysis",filter:{model:C.CuW.compoundSlider,operator:">="},editor:{model:C.R8o.slider,massUpdate:!0,minValue:0,maxValue:100},customTooltip:{position:"center"}},{id:"complexity",name:"Complexity",field:"complexity",minWidth:100,type:C.PUO.number,sortable:!0,filterable:!0,columnGroup:"Analysis",formatter:(e,t,i)=>this.complexityLevelList[i]?.label,exportCustomFormatter:(e,t,i)=>this.complexityLevelList[i]?.label,filter:{model:C.CuW.multipleSelect,collection:this.complexityLevelList},editor:{model:C.R8o.singleSelect,collection:this.complexityLevelList,massUpdate:!0}},{id:"start",name:"Start",field:"start",sortable:!0,minWidth:100,formatter:C._tQ.dateUs,columnGroup:"Period",exportCustomFormatter:C._tQ.dateUs,type:C.PUO.date,outputType:C.PUO.dateUs,saveOutputType:C.PUO.dateUtc,filterable:!0,filter:{model:C.CuW.compoundDate},editor:{model:C.R8o.date,massUpdate:!0,editorOptions:{hideClearButton:!1}}},{id:"completed",name:"Completed",field:"completed",width:80,minWidth:75,maxWidth:100,sortable:!0,filterable:!0,columnGroup:"Period",cssClass:"text-center",formatter:C._tQ.checkmarkMaterial,exportWithFormatter:!1,filter:{collection:[{value:"",label:""},{value:!0,label:"True"},{value:!1,label:"False"}],model:C.CuW.singleSelect},editor:{model:C.R8o.checkbox,massUpdate:!0}},{id:"finish",name:"Finish",field:"finish",sortable:!0,minWidth:100,formatter:C._tQ.dateUs,columnGroup:"Period",type:C.PUO.date,outputType:C.PUO.dateUs,saveOutputType:C.PUO.dateUtc,filterable:!0,filter:{model:C.CuW.compoundDate},exportCustomFormatter:C._tQ.dateUs,editor:{model:C.R8o.date,editorOptions:{range:{min:"today"}},massUpdate:!0,validator:(e,t)=>{const i=t?.item;return i&&i.completed&&!e?{valid:!1,msg:'You must provide a "Finish" date when "Completed" is checked.'}:{valid:!0,msg:""}}}},{id:"product",name:"Product",field:"product",filterable:!0,columnGroup:"Item",minWidth:100,exportWithFormatter:!0,dataKey:"id",labelKey:"itemName",formatter:C._tQ.complexObject,exportCustomFormatter:C._tQ.complex,type:C.PUO.object,sortComparer:C.Luy.objectString,editor:{model:C.R8o.autocompleter,alwaysSaveOnEnterKey:!0,massUpdate:!0,editorOptions:{minLength:1,fetch:(e,t)=>{t(this.mockProducts().filter((t=>t.itemName.toLowerCase().includes(e.toLowerCase()))))},renderItem:{layout:"fourCorners",templateCallback:e=>this.renderItemCallbackWith4Corners(e)}}},filter:{model:C.CuW.inputText,type:C.PUO.string,queryField:"product.itemName"}},{id:"origin",name:"Country of Origin",field:"origin",formatter:C._tQ.complexObject,columnGroup:"Item",exportCustomFormatter:C._tQ.complex,dataKey:"code",labelKey:"name",type:C.PUO.object,sortComparer:C.Luy.objectString,filterable:!0,sortable:!0,minWidth:100,editor:{model:C.R8o.autocompleter,massUpdate:!0,customStructure:{label:"name",value:"code"},collectionAsync:this.http.fetch("assets/data/countries.json"),editorOptions:{minLength:0}},filter:{model:C.CuW.inputText,type:"string",queryField:"origin.name"}},{id:"action",name:"Action",field:"action",width:70,minWidth:70,maxWidth:70,excludeFromExport:!0,formatter:()=>'<div class="button-style margin-auto" style="width: 35px;"><span class="mdi mdi-chevron-down text-primary"></span></div>',cellMenu:{hideCloseButton:!1,commandTitle:"Commands",commandItems:[{command:"edit",title:"Edit Row",iconCssClass:"mdi mdi-pencil",positionOrder:66,action:()=>this.openCompositeModal("edit")},{command:"clone",title:"Clone Row",iconCssClass:"mdi mdi-content-copy",positionOrder:66,action:()=>this.openCompositeModal("clone")},"divider",{command:"delete-row",title:"Delete Row",positionOrder:64,iconCssClass:"mdi mdi-close color-danger",cssClass:"red",textCssClass:"text-italic color-danger-light",itemVisibilityOverride:e=>!e.dataContext?.completed,action:(e,t)=>{const i=t.dataContext;confirm(`Do you really want to delete row (${(t?.row??0)+1}) with "${i.title}"`)&&this.aureliaGrid.gridService.deleteItemById(i.id)}}]}}],this.gridOptions={enableAddRow:!0,enableCellNavigation:!0,asyncEditorLoading:!1,autoEdit:!0,autoCommitEdit:!0,editable:!0,autoAddCustomEditorFormatter:P,autoResize:{container:"#demo-container",rightPadding:10},darkMode:this._darkMode,enableAutoSizeColumns:!0,enableAutoResize:!0,showCustomFooter:!0,enablePagination:!0,pagination:{pageSize:10,pageSizes:[10,200,250,500,5e3]},enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!1},externalResources:[new b.N,new y.T,this.compositeEditorInstance],enableFiltering:!0,rowSelectionOptions:{selectActiveRow:!1},createPreHeaderPanel:!0,showPreHeaderPanel:!0,preHeaderPanelHeight:28,enableCheckboxSelector:!0,enableRowSelection:!0,multiSelect:!1,checkboxSelector:{hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0},enableCompositeEditor:!0,editCommandHandler:(e,t,i)=>{const a=Array.isArray(i.prevSerializedValue)?i.prevSerializedValue:[i.prevSerializedValue],o=Array.isArray(i.serializedValue)?i.serializedValue:[i.serializedValue],n=this.columnDefinitions.filter((e=>void 0!==e.editor)),l=[];a.forEach(((d,s)=>{const r=a[s],m=o[s];if(r!==m||""===m){const a=Array.isArray(i.prevSerializedValue)?n[s]:t;this.editedItems[this.gridOptions.datasetIdPropertyName||"id"]=e,this.aureliaGrid.slickGrid.invalidate(),i.execute(),this.renderUnsavedCellStyling(e,a,i),l.push(a)}})),this.editQueue.push({item:e,columns:l,editCommand:i})},enableCellMenu:!0,cellMenu:{activateCellOnMenuClick:!0},gridMenu:{hideToggleDarkModeCommand:!1,onCommand:(e,t)=>{"toggle-dark-mode"===t.command&&(this._darkMode=!this._darkMode,this.toggleBodyBackground())}}}}loadData(e){const t=[];for(let i=0;i<e;i++){const e=Math.floor(Math.random()*this.mockProducts().length),a=2e3+Math.floor(10*Math.random()),o=(new Date).getFullYear()+Math.floor(10*Math.random()),n=Math.floor(11*Math.random()),l=Math.floor(29*Math.random()),d=Math.floor(59*Math.random()),s=new Date(o,n+1,l,d,d,d),r=Math.floor(100*Math.random())+15,m=r>100?i>5?100:88:r,c=100===m;t[i]={id:i,title:"Task "+i,duration:Math.floor(100*Math.random())+10,percentComplete:m,analysis:{percentComplete:m},complexity:i%3?0:2,start:new Date(a,n,l,l,d,d,d),finish:c||i%3==0&&s>new Date&&i>3?c?new Date:s:"",cost:i%33==0?null:Math.round(1e4*Math.random())/100,completed:c||i%3==0&&s>new Date&&i>3,product:{id:this.mockProducts()[e]?.id,itemName:this.mockProducts()[e]?.itemName},origin:i%2?{code:"CA",name:"Canada"}:{code:"US",name:"United States"}},i%8||(delete t[i].finish,delete t[i].percentComplete)}return t}aureliaGridReady(e){this.aureliaGrid=e}handleValidationError(e,t){if(t.validationResults){let e=t.validationResults.msg||"";if(t.editor&&t.editor instanceof f.L){if(t.validationResults.errors){e+="\n";for(const i of t.validationResults.errors)e+=`${i.editor.args.column.name.toUpperCase()}: ${i.msg}`}console.log(e)}}else alert(t.validationResults.msg);return e.preventDefault(),!1}handleItemDeleted(e){console.log("item deleted with id:",e)}handleOnBeforeEditCell(e,t){const{column:i,item:a,grid:o}=t;return!(i&&a&&!function(e,t,i){const a=i?.getOptions(),o=t.editor;let n=!(!a.editable||!o);return e&&t&&a?.editable&&"finish"===t.id&&(n=!!e?.completed),n}(a,i,o)&&(e.preventDefault(),1))}handleOnCellChange(e,t){const i=t?.item;i&&!i.completed&&(i.finish=null,this.aureliaGrid.gridService.updateItem(i))}handleOnCellClicked(e,t){console.log(e,t)}handleOnCompositeEditorChange(e,t){const i=t.column,a=t.formValues;"percentComplete"===i.id&&100===a.percentComplete&&(this.compositeEditorInstance.changeFormInputValue("completed",!0),this.compositeEditorInstance.changeFormInputValue("finish",new Date))}handleReRenderUnsavedStyling(){this.removeAllUnsavedStylingFromCell(),this.renderUnsavedStylingOnAllVisibleCells()}handleOnGridStateChanged(e){Array.isArray(e.gridState?.rowSelection?.dataContextIds)&&(this.isMassSelectionDisabled=0===e.gridState?.rowSelection?.dataContextIds.length)}openCompositeModal(e){let t="";switch(e){case"create":t="Inserting New Task";break;case"clone":t="Clone - {{title}}";break;case"edit":t='Editing - {{title}} (<span class="text-muted">id:</span> <span class="text-primary">{{id}}</span>)';break;case"mass-update":t="Mass Update All Records";break;case"mass-selection":t="Update Selected Records"}this.compositeEditorInstance?.openDetails({headerTitle:t,modalType:e,insertOptions:{highlightRow:!1},showFormResetButton:!0,resetFormButtonIconCssClass:"mdi mdi-undo",onClose:()=>Promise.resolve(confirm("You have unsaved changes, are you sure you want to close this window?")),onError:e=>alert(e.message),onRendered:e=>{e.dataset.bsTheme=this._darkMode?"dark":"light"},onSave:(t,i,a)=>"mass-update"===e||"mass-selection"===e?new Promise(((e,i)=>{window.setTimeout((()=>{t.percentComplete>=50?e(!0):i("Unfortunately we only accept a minimum of 50% Completion...")}),50)})):(console.log(`${e} item data context`,a),new Promise((e=>window.setTimeout((()=>e(!0)),50))))})}toggleGridEditReadonly(){this.undoAllEdits(),this.isGridEditable=!this.isGridEditable,this.isCompositeDisabled=!this.isGridEditable,this.isGridEditable||(this.isMassSelectionDisabled=!0),this.aureliaGrid.slickGrid.setOptions({editable:this.isGridEditable})}toggleDarkMode(){this._darkMode=!this._darkMode,this.toggleBodyBackground(),this.aureliaGrid.slickGrid?.setOptions({darkMode:this._darkMode})}toggleBodyBackground(){this._darkMode?(document.querySelector(".panel-wm-content").classList.add("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="dark"):(document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light")}removeUnsavedStylingFromCell(e,t,i){const a=`unsaved_highlight_${[t.id]}${i}`;this.aureliaGrid.slickGrid.removeCellCssStyles(a);const o=this.cellCssStyleQueue.findIndex((e=>e===a));o>=0&&this.cellCssStyleQueue.splice(o,1)}removeAllUnsavedStylingFromCell(){for(const e of this.cellCssStyleQueue)this.aureliaGrid.slickGrid.removeCellCssStyles(e);this.cellCssStyleQueue=[]}renderUnsavedStylingOnAllVisibleCells(){for(const e of this.editQueue)if(e){const{item:t,columns:i,editCommand:a}=e;Array.isArray(i)&&i.forEach((e=>{this.renderUnsavedCellStyling(t,e,a)}))}}renderUnsavedCellStyling(e,t,i){if(i&&e&&t){const i=this.aureliaGrid.dataView.getRowByItem(e);if(i>=0){const e={[i]:{[t.id]:"unsaved-editable-field"}},a=`unsaved_highlight_${[t.id]}${i}`;this.aureliaGrid.slickGrid.setCellCssStyles(`unsaved_highlight_${[t.id]}${i}`,e),this.cellCssStyleQueue.push(a)}}}saveAll(){console.log(this.editQueue),console.log(this.editedItems),this.removeAllUnsavedStylingFromCell(),this.editQueue=[],this.editedItems={}}undoLastEdit(e=!1){const t=this.editQueue.pop(),i=t?.editCommand;if(t&&i&&C.W9y.cancelCurrentEdit()){i.undo();for(const e of t.columns)this.removeUnsavedStylingFromCell(t.item,e,i.row);this.aureliaGrid.slickGrid.invalidate(),e&&this.aureliaGrid.slickGrid.gotoCell(i.row,i.cell,!1)}}undoAllEdits(){for(const e of this.editQueue){const t=e?.editCommand;if(t&&C.W9y.cancelCurrentEdit()){t.undo();for(const i of e.columns)this.removeUnsavedStylingFromCell(e.item,i,t.row)}}this.aureliaGrid.slickGrid.invalidate(),this.editQueue=[]}mockProducts(){return[{id:0,itemName:"Sleek Metal Computer",itemNameTranslated:"some fantastic sleek metal computer description",listPrice:2100.23,itemTypeName:"I",image:"http://i.stack.imgur.com/pC1Tv.jpg",icon:this.getRandomIcon(0)},{id:1,itemName:"Tasty Granite Table",itemNameTranslated:"an extremely huge and heavy table",listPrice:3200.12,itemTypeName:"I",image:"https://i.imgur.com/Fnm7j6h.jpg",icon:this.getRandomIcon(1)},{id:2,itemName:"Awesome Wooden Mouse",itemNameTranslated:"super old mouse",listPrice:15,itemTypeName:"I",image:"https://i.imgur.com/RaVJuLr.jpg",icon:this.getRandomIcon(2)},{id:3,itemName:"Gorgeous Fresh Shirt",itemNameTranslated:"what a gorgeous shirt seriously",listPrice:25.76,itemTypeName:"I",image:"http://i.stack.imgur.com/pC1Tv.jpg",icon:this.getRandomIcon(3)},{id:4,itemName:"Refined Cotton Table",itemNameTranslated:"super light table that will fall apart amazingly fast",listPrice:13.35,itemTypeName:"I",image:"https://i.imgur.com/Fnm7j6h.jpg",icon:this.getRandomIcon(4)},{id:5,itemName:"Intelligent Wooden Pizza",itemNameTranslated:"wood not included",listPrice:23.33,itemTypeName:"I",image:"https://i.imgur.com/RaVJuLr.jpg",icon:this.getRandomIcon(5)},{id:6,itemName:"Licensed Cotton Chips",itemNameTranslated:"not sure what that is",listPrice:71.21,itemTypeName:"I",image:"http://i.stack.imgur.com/pC1Tv.jpg",icon:this.getRandomIcon(6)},{id:7,itemName:"Ergonomic Rubber Soap",itemNameTranslated:"so good you'll want to use it every night",listPrice:2.43,itemTypeName:"I",image:"https://i.imgur.com/Fnm7j6h.jpg",icon:this.getRandomIcon(7)},{id:8,itemName:"Handcrafted Steel Car",itemNameTranslated:"aka tesla truck",listPrice:31288.39,itemTypeName:"I",image:"https://i.imgur.com/RaVJuLr.jpg",icon:this.getRandomIcon(8)}]}getRandomIcon(e){const t=["mdi-arrow-collapse","mdi-arrow-expand","mdi-cancel","mdi-check","mdi-checkbox-blank-outline","mdi-check-box-outline","mdi-checkbox-marked","mdi-close","mdi-close-circle","mdi-close-circle-outline","mdi-close-thick","mdi-content-copy","mdi-database-refresh","mdi-download","mdi-file-document-outline","mdi-file-excel-outline","mdi-file-music-outline","mdi-file-pdf-outline","mdi-filter-remove-outline","mdi-flip-vertical","mdi-folder","mdi-folder-open","mdi-help-circle","mdi-help-circle-outline","mdi-history","mdi-information","mdi-information-outline","mdi-link","mdi-link-variant","mdi-menu","mdi-microsoft-excel","mdi-minus","mdi-page-first","mdi-page-last","mdi-paperclip","mdi-pin-off-outline","mdi-pin-outline","mdi-playlist-plus","mdi-playlist-remove","mdi-plus","mdi-redo","mdi-refresh","mdi-shape-square-plus","mdi-sort-ascending","mdi-sort-descending","mdi-swap-horizontal","mdi-swap-vertical","mdi-sync","mdi-table-edit","mdi-table-refresh","mdi-undo"],i=Math.floor(Math.random()*t.length-1);return t[e??i]}renderItemCallbackWith2Rows(e){return`<div class="autocomplete-container-list">\n      <div class="autocomplete-left">\n        \x3c!--<img src="http://i.stack.imgur.com/pC1Tv.jpg" width="50" />--\x3e\n        <span class="fa ${e.icon}"></span>\n      </div>\n      <div>\n        <span class="autocomplete-top-left">\n          <span class="fa ${"I"===e.itemTypeName?"mdi-information-outline":"mdi-content-copy"}"></span>\n          ${e.itemName}\n        </span>\n      <div>\n      </div>\n    <div>\n    <div class="autocomplete-bottom-left">${e.itemNameTranslated}</div>\n    </div>`}renderItemCallbackWith4Corners(e){return`<div class="autocomplete-container-list">\n          <div class="autocomplete-left">\n            \x3c!--<img src="http://i.stack.imgur.com/pC1Tv.jpg" width="50" />--\x3e\n            <span class="fa ${e.icon}"></span>\n          </div>\n          <div>\n            <span class="autocomplete-top-left">\n              <span class="fa ${"I"===e.itemTypeName?"mdi-information-outline":"mdi-content-copy"}"></span>\n              ${e.itemName}\n            </span>\n            <span class="autocomplete-top-right">${(0,C.ZVp)(e.listPrice,2,2,!1,"$")}</span>\n          <div>\n        </div>\n        <div>\n          <div class="autocomplete-bottom-left">${e.itemNameTranslated}</div>\n          <span class="autocomplete-bottom-right">Type: <b>${"I"===e.itemTypeName?"Item":"C"===e.itemTypeName?"PdCat":"Cat"}</b></span>\n        </div>`}},t})()}}]);