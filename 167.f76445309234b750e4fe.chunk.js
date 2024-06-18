"use strict";(self.webpackChunkau_slickgrid_demo=self.webpackChunkau_slickgrid_demo||[]).push([[167],{4723:(e,t,i)=>{i.d(t,{M:()=>n});var r=i(9628);class n{_clearFilterTriggered=!1;_shouldTriggerQuery=!0;filterElm;grid;searchTerms=[];columnDef;callback;operator=r.huT.equal;get columnFilter(){return this.columnDef?.filter??{}}get gridOptions(){return this.grid?.getOptions()??{}}init(e){this.grid=e.grid,this.callback=e.callback,this.columnDef=e.columnDef,this.searchTerms=(e.hasOwnProperty("searchTerms")?e.searchTerms:[])||[];const t=Array.isArray(this.searchTerms)&&this.searchTerms.length>0?this.searchTerms[0]:"";this.filterElm=this.createDomElement(t),this.filterElm.addEventListener("keyup",this.handleKeyup.bind(this))}handleKeyup(e){let t=e.target?.value??"";const i=this.gridOptions.enableFilterTrimWhiteSpace||this.columnFilter.enableTrimWhiteSpace;"string"==typeof t&&i&&(t=t.trim()),this._clearFilterTriggered?(this.callback(e,{columnDef:this.columnDef,clearFilterTriggered:this._clearFilterTriggered,shouldTriggerQuery:this._shouldTriggerQuery}),this.filterElm.classList.remove("filled")):(""===t?this.filterElm.classList.remove("filled"):this.filterElm.classList.add("filled"),this.callback(e,{columnDef:this.columnDef,searchTerms:[t],shouldTriggerQuery:this._shouldTriggerQuery})),this._clearFilterTriggered=!1,this._shouldTriggerQuery=!0}clear(e=!0){this.filterElm&&(this._clearFilterTriggered=!0,this._shouldTriggerQuery=e,this.filterElm.value="",this.filterElm.dispatchEvent(new Event("keyup")))}destroy(){this.filterElm&&(this.filterElm.removeEventListener("keyup",this.handleKeyup),this.filterElm.remove())}setValues(e){e&&(this.filterElm.value=e)}createDomElement(e){const t=this.grid.getHeaderRowColumn(this.columnDef.id);(0,r.i3Z)(t);let i=this.gridOptions?.defaultFilterPlaceholder??"";this.columnFilter?.placeholder&&(i=this.columnFilter.placeholder);const n=document.createElement("input");n.className="form-control search-filter",n.placeholder=i;const l=e;return n.value=l,n.dataset.columnid=`${this.columnDef.id}`,t&&t.appendChild(n),n}}},3167:(e,t,i)=>{i.r(t),i.d(t,{Example23:()=>D});var r={};i.r(r),i.d(r,{bindables:()=>c,default:()=>s,dependencies:()=>o,name:()=>l,register:()=>u,template:()=>a});var n=i(3148);const l="example23",a='<h2>\n  ${title}\n  <span class="float-end">\n    <a style="font-size: 18px"\n        target="_blank"\n        href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/packages/demo/src/examples/slickgrid/example23.ts">\n      <span class="mdi mdi-link-variant"></span> code\n    </a>\n  </span>\n</h2>\n<div class="subtitle" innerhtml.bind="subTitle"></div>\n\n<br />\n\n<span if.bind="metrics">\n  <b>Metrics:</b>\n  ${metrics.endTime | dateFormat: \'DD MMM, h:mm:ss a\'} | ${metrics.itemCount} of ${metrics.totalItemCount} items\n</span>\n\n<div class="row row-cols-lg-auto g-1 align-items-center">\n  <div class="col">\n    <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="clear-filters"\n            click.trigger="aureliaGrid.filterService.clearFilters()">\n      Clear Filters\n    </button>\n  </div>\n  <div class="col">\n    <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="clear-sorting"\n            click.trigger="aureliaGrid.sortService.clearSorting()">\n      Clear Sorting\n    </button>\n  </div>\n  <div class="col">\n    <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="set-dynamic-filter"\n            click.trigger="setFiltersDynamically()">\n      Set Filters Dynamically\n    </button>\n  </div>\n  <div class="col">\n    <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="set-dynamic-sorting"\n            click.trigger="setSortingDynamically()">\n      Set Sorting Dynamically\n    </button>\n  </div>\n  <div class="col">\n    <label for="selectedFilter" style="margin-left: 10px">Predefined Filters</label>\n  </div>\n  <div class="col">\n    <select name="selectedFilter" class="form-select" data-test="select-dynamic-filter"\n            value.bind="selectedPredefinedFilter" change.trigger="predefinedFilterChanged(selectedPredefinedFilter)">\n      <option model.bind="filter.value" repeat.for="filter of filterList">${filter.label}</option>\n    </select>\n  </div>\n</div>\n\n<div class="row mt-2">\n  <div class="col">\n    <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="language" click.trigger="switchLanguage()">\n      <i class="mdi mdi-translate"></i>\n      Switch Language\n    </button>\n    <b>Locale:</b> <span style="font-style: italic" data-test="selected-locale">${selectedLanguage + \'.json\'}</span>\n  </div>\n</div>\n\n<aurelia-slickgrid grid-id="grid23"\n                    column-definitions.bind="columnDefinitions"\n                    grid-options.bind="gridOptions"\n                    dataset.bind="dataset"\n                    instances.bind="aureliaGrid"\n                    on-grid-state-changed.trigger="gridStateChanged($event.detail)"\n                    on-row-count-changed.trigger="refreshMetrics($event.detail.eventData, $event.detail.args)">\n</aurelia-slickgrid>\n',s=a,o=[],c=[];let d;function u(e){d||(d=n.K94.define({name:l,template:a,dependencies:o,bindables:c})),e.register(d)}var m=i(816),h=i(4848),g=i(8944),p=i(6832),f=i(4723),b=i(9628),v=i(5522);function T(e,t){return Math.floor(Math.random()*(t-e+1)+e)}i(3262);const y=(e,t,i,r,n,l)=>{const a=l.getOptions().i18n;return a?.tr("TASK_X",{x:i})??""};class D{i18n;title="Example 23: Filtering from Range of Search Values";subTitle='\n    This demo shows how to use Filters with Range of Search Values (<a href="https://ghiscoding.gitbook.io/aurelia-slickgrid/column-functionalities/filters/range-filters" target="_blank">Wiki docs</a>)\n    <br/>\n    <ul class="small">\n      <li>All input filters support the following operators: (>, >=, <, <=, <>, !=, =, ==, *) and now also the (..) for an input range</li>\n      <li>All filters (which support ranges) can be defined via the 2 dots (..) which represents a range, this also works for dates and slider in the "presets"</li>\n      <ul>\n        <li>For a numeric range defined in an input filter (must be of type text), you can use 2 dots (..) to represent a range</li>\n        <li>example: typing "10..90" will filter values between 10 and 90 (but excluding the number 10 and 90)</li>\n      </ul>\n    </ul>\n  ';aureliaGrid;columnDefinitions=[];gridOptions;dataset=[];selectedLanguage;metrics;filterList=[{value:"",label:""},{value:"currentYearTasks",label:"Current Year Completed Tasks"},{value:"nextYearTasks",label:"Next Year Active Tasks"}];selectedPredefinedFilter="";constructor(e=(0,v.hd)(m.TH)){this.i18n=e,this.defineGrid(),this.i18n.setLocale("en"),this.selectedLanguage="en"}attached(){this.dataset=this.mockData(1500)}detaching(){this.saveCurrentGridState()}defineGrid(){this.columnDefinitions=[{id:"title",name:"Title",field:"id",nameKey:"TITLE",minWidth:100,formatter:y,sortable:!0,filterable:!0,params:{useFormatterOuputToFilter:!0}},{id:"description",name:"Description",field:"description",filterable:!0,sortable:!0,minWidth:80,type:b.PUO.string,filter:{model:f.M,enableTrimWhiteSpace:!0}},{id:"percentComplete",name:"% Complete",field:"percentComplete",nameKey:"PERCENT_COMPLETE",minWidth:120,sortable:!0,customTooltip:{position:"center"},formatter:b._tQ.progressBar,type:b.PUO.number,filterable:!0,filter:{model:b.CuW.sliderRange,maxValue:100,operator:b.huT.rangeInclusive,filterOptions:{hideSliderNumbers:!1,min:0,step:5}}},{id:"start",name:"Start",field:"start",nameKey:"START",formatter:b._tQ.dateIso,sortable:!0,minWidth:75,width:100,exportWithFormatter:!0,type:b.PUO.date,filterable:!0,filter:{model:b.CuW.compoundDate}},{id:"finish",name:"Finish",field:"finish",nameKey:"FINISH",formatter:b._tQ.dateIso,sortable:!0,minWidth:75,width:120,exportWithFormatter:!0,type:b.PUO.date,filterable:!0,filter:{model:b.CuW.dateRange}},{id:"duration",field:"duration",nameKey:"DURATION",maxWidth:90,type:b.PUO.number,sortable:!0,filterable:!0,filter:{model:b.CuW.input,operator:b.huT.rangeExclusive}},{id:"completed",name:"Completed",field:"completed",nameKey:"COMPLETED",minWidth:85,maxWidth:90,formatter:b._tQ.checkmarkMaterial,exportWithFormatter:!0,filterable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"True"},{value:!1,label:"False"}],model:b.CuW.singleSelect,filterOptions:{autoAdjustDropHeight:!0}}}];const e=new Date,t=(0,h.GP)((0,h.kO)(new Date,-2),"YYYY-MM-DD"),i=(0,h.GP)((0,h.kO)(new Date,e.getDate()<14?30:25),"YYYY-MM-DD");this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableExcelCopyBuffer:!0,enableFiltering:!0,enableTranslate:!0,i18n:this.i18n,presets:{filters:[{columnId:"duration",searchTerms:["4..88"]},{columnId:"percentComplete",operator:"RangeInclusive",searchTerms:[5,80]},{columnId:"finish",operator:"RangeInclusive",searchTerms:[t,i]}],sorters:[{columnId:"percentComplete",direction:"DESC"},{columnId:"duration",direction:"ASC"}]},externalResources:[new g.T,new p.N]}}mockData(e,t=0){const i=[];for(let r=t;r<t+e;r++){const e=T(0,365),t=T((new Date).getFullYear(),(new Date).getFullYear()+1),n=T(0,12),l=T(10,28),a=T(0,100);i.push({id:r,title:"Task "+r,description:r%5?"desc "+r:null,duration:e,percentComplete:a,percentCompleteNumber:a,start:r%4?null:new Date(t,n,l),finish:new Date(t,n,l),completed:100===a})}return i}clearFilters(){this.selectedPredefinedFilter="",this.aureliaGrid.filterService.clearFilters()}gridStateChanged(e){console.log("Client sample, Grid State changed:: ",e)}saveCurrentGridState(){console.log("Client sample, current Grid State:: ",this.aureliaGrid.gridStateService.getCurrentGridState())}refreshMetrics(e,t){t&&t.current>=0&&setTimeout((()=>{this.metrics={startTime:new Date,itemCount:t&&t.current||0,totalItemCount:this.dataset.length||0}}))}setFiltersDynamically(){const e=(0,h.GP)((0,h.kO)(new Date,-5),"YYYY-MM-DD"),t=(0,h.GP)((0,h.kO)(new Date,25),"YYYY-MM-DD");this.aureliaGrid.filterService.updateFilters([{columnId:"duration",searchTerms:["14..78"],operator:"RangeInclusive"},{columnId:"percentComplete",operator:"RangeExclusive",searchTerms:[15,85]},{columnId:"finish",operator:"RangeInclusive",searchTerms:[e,t]}])}setSortingDynamically(){this.aureliaGrid.sortService.updateSorting([{columnId:"finish",direction:"DESC"},{columnId:"percentComplete",direction:"ASC"}])}async switchLanguage(){const e="en"===this.selectedLanguage?"fr":"en";await this.i18n.setLocale(e),this.selectedLanguage=e}predefinedFilterChanged(e){let t=[];const i=(new Date).getFullYear();switch(e){case"currentYearTasks":t=[{columnId:"finish",operator:b.huT.rangeInclusive,searchTerms:[`${i}-01-01`,`${i}-12-31`]},{columnId:"completed",operator:b.huT.equal,searchTerms:[!0]}];break;case"nextYearTasks":t=[{columnId:"start",operator:">=",searchTerms:[`${i+1}-01-01`]}]}this.aureliaGrid.filterService.updateFilters(t)}}n.K94.define(r,D)}}]);