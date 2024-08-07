"use strict";(self.webpackChunkau_slickgrid_demo=self.webpackChunkau_slickgrid_demo||[]).push([[8009],{8009:(t,e,i)=>{i.r(e),i.d(e,{Example40:()=>g});var n={};i.r(n),i.d(n,{bindables:()=>c,default:()=>o,dependencies:()=>d,name:()=>l,register:()=>u,template:()=>s});var a=i(2443),r=i(6056);const l="example40",s='<div class="demo40">\n  <h2>\n    Example 40: Infinite Scroll from JSON data\n    <span class="float-end">\n      <a style="font-size: 18px" target="_blank"\n        href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/packages/demo/src/examples/slickgrid/example40.ts">\n        <span class="mdi mdi-link-variant"></span> code\n      </a>\n    </span>\n  </h2>\n\n  <h6 class="title is-6 italic content">\n    <ul>\n      <li>\n        Infinite scrolling allows the grid to lazy-load rows from the server when reaching the scroll bottom (end) position.\n        In its simplest form, the more the user scrolls down, the more rows get loaded.\n      </li>\n      <li>NOTES: <code>presets.pagination</code> is not supported with Infinite Scroll and will revert to the first page,\n          simply because since we keep appending data, we always have to start from index zero (no offset).\n      </li>\n    </ul>\n  </h6>\n\n  <div class="row">\n    <div class="col-sm-12">\n      <button class="btn btn-outline-secondary btn-sm" data-test="clear-filters-sorting"\n              click.trigger="clearAllFiltersAndSorts()" title="Clear all Filters & Sorts">\n        <span class="mdi mdi-close"></span>\n        <span>Clear all Filter & Sorts</span>\n      </button>\n      <button class="btn btn-outline-secondary btn-sm" data-test="set-dynamic-filter" click.trigger="setFiltersDynamically()">\n        Set Filters Dynamically\n      </button>\n      <button class="btn btn-outline-secondary btn-sm" data-test="set-dynamic-sorting" click.trigger="setSortingDynamically()">\n        Set Sorting Dynamically\n      </button>\n      <button class="btn btn-outline-secondary btn-sm" data-test="group-by-duration" click.trigger="groupByDuration()">\n        Group by Duration\n      </button>\n\n      <label class="ml-4">Reset Dataset <code>onSort</code>:</label>\n      <button class="btn btn-outline-secondary btn-sm" data-test="onsort-on" click.trigger="onSortReset(true)">\n        ON\n      </button>\n      <button class="btn btn-outline-secondary btn-sm" data-test="onsort-off" click.trigger="onSortReset(false)">\n        OFF\n      </button>\n    </div>\n  </div>\n\n  <div show.bind="metrics" class="mt-2" style="margin: 10px 0px">\n    <b>Metrics:</b>\n    <span>\n    <span>${metrics.endTime | dateFormat: \'DD MMM, h:mm:ss a\'}</span> —\n      <span data-test="totalItemCount">${metrics.totalItemCount}</span>\n      items\n    </span>\n  </div>\n\n  <aurelia-slickgrid\n    grid-id="grid40"\n    column-definitions.bind="columnDefinitions"\n    grid-options.bind="gridOptions"\n    dataset.bind="dataset"\n    instances.bind="aureliaGrid"\n    on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"\n    on-row-count-changed.trigger="refreshMetrics($event.detail.args)"\n    on-sort.trigger="handleOnSort()"\n    on-scroll.trigger="handleOnScroll($event.detail.args)">\n  </aurelia-slickgrid>\n</div>\n',o=s,d=[],c={};let m;function u(t){m||(m=r.K94.define({name:l,template:s,dependencies:d,bindables:c})),t.register(m)}var h=i(5700);i(3778);let g=(()=>{let t,e,i=[(0,r.EMX)(n)],l=[];return class{static{e=this}static{const n="function"==typeof Symbol&&Symbol.metadata?Object.create(null):void 0;(0,a.G4)(null,t={value:e},i,{kind:"class",name:e.name,metadata:n},null,l),e=t.value,n&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:n}),(0,a.zF)(e,l)}aureliaGrid;columnDefinitions;dataset=[];gridOptions;metrics;scrollEndCalled=!1;shouldResetOnSort=!1;constructor(){this.defineGrid(),this.dataset=this.loadData(0,50),this.metrics={itemCount:50,totalItemCount:50}}aureliaGridReady(t){this.aureliaGrid=t}defineGrid(){this.columnDefinitions=[{id:"title",name:"Title",field:"title",sortable:!0,minWidth:100,filterable:!0},{id:"duration",name:"Duration (days)",field:"duration",sortable:!0,minWidth:100,filterable:!0,type:h.PUO.number},{id:"percentComplete",name:"% Complete",field:"percentComplete",sortable:!0,minWidth:100,filterable:!0,type:h.PUO.number},{id:"start",name:"Start",field:"start",formatter:h._tQ.dateIso,exportWithFormatter:!0,filterable:!0},{id:"finish",name:"Finish",field:"finish",formatter:h._tQ.dateIso,exportWithFormatter:!0,filterable:!0},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",sortable:!0,minWidth:100,filterable:!0,formatter:h._tQ.checkmarkMaterial}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableAutoResize:!0,enableFiltering:!0,enableGrouping:!0,editable:!1,rowHeight:33}}handleOnScroll(t){const e=t.grid.getViewportNode();if(["mousewheel","scroll"].includes(t.triggeredBy||"")&&!this.scrollEndCalled&&e.scrollTop>0&&Math.ceil(e.offsetHeight+t.scrollTop)>=t.scrollHeight){console.log("onScroll end reached, add more items");const t=this.aureliaGrid.dataView?.getItemCount()||0,e=this.loadData(t,50);this.aureliaGrid.dataView?.addItems(e),this.scrollEndCalled=!1}}handleOnSort(){if(this.shouldResetOnSort){const t=this.loadData(0,50);this.aureliaGrid.slickGrid?.scrollTo(0),this.aureliaGrid.dataView?.setItems(t),this.aureliaGrid.dataView?.reSort()}}groupByDuration(){this.aureliaGrid?.dataView?.setGrouping({getter:"duration",formatter:t=>`Duration: ${t.value} <span class="text-green">(${t.count} items)</span>`,comparer:(t,e)=>h.Luy.numeric(t.value,e.value,h.Lo1.asc),aggregators:[new h.J2q.Avg("percentComplete"),new h.J2q.Sum("cost")],aggregateCollapsed:!1,lazyTotalsCalculation:!0}),this.aureliaGrid?.slickGrid?.setSortColumns([{columnId:"duration",sortAsc:!0}]),this.aureliaGrid?.slickGrid?.invalidate()}loadData(t,e){const i=[];for(let n=t;n<t+e;n++)i.push(this.newItem(n));return i}newItem(t){const e=2e3+Math.floor(10*Math.random()),i=Math.floor(11*Math.random()),n=Math.floor(29*Math.random()),a=Math.round(100*Math.random());return{id:t,title:"Task "+t,duration:Math.round(100*Math.random())+"",percentComplete:a,start:new Date(e,i+1,n),finish:new Date(e+1,i+1,n),effortDriven:t%5==0}}onSortReset(t){this.shouldResetOnSort=t}clearAllFiltersAndSorts(){this.aureliaGrid?.gridService&&this.aureliaGrid.gridService.clearAllFiltersAndSorts()}setFiltersDynamically(){this.aureliaGrid?.filterService.updateFilters([{columnId:"percentComplete",searchTerms:["50"],operator:">="}])}refreshMetrics(t){this.aureliaGrid&&t?.current>=0&&(this.metrics.itemCount=this.aureliaGrid.dataView?.getFilteredItemCount()||0,this.metrics.totalItemCount=t.itemCount||0)}setSortingDynamically(){this.aureliaGrid?.sortService.updateSorting([{columnId:"title",direction:"DESC"}])}},e})()}}]);