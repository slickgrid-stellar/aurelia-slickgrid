"use strict";(self.webpackChunkau_slickgrid_demo=self.webpackChunkau_slickgrid_demo||[]).push([[6158],{9372:(t,e,a)=>{a.d(e,{A:()=>s});var l=a(6240),i=a.n(l),r=a(2753),o=a.n(r)()(i());o.push([t.id,"input[type=number].narrow{height:32px;width:50px;border:1px solid silver;border-radius:3px}#grid36 .slick-row:not(.slick-group)>.cell-unselectable{background:#ececec !important;font-weight:bold}#grid36 .text-sub-total{font-style:italic;color:#215073 !important}#grid36 .text-taxes{font-style:italic;color:#c65911}#grid36 .text-total{font-weight:bold;color:#005a9e}",""]);const s=o},6158:(t,e,a)=>{a.r(e),a.d(e,{Example36:()=>R});var l={};a.r(l),a.d(l,{bindables:()=>u,default:()=>c,dependencies:()=>d,name:()=>s,register:()=>m,template:()=>n});var i=a(2443),r=a(6056),o=a(9372);const s="example36",n='<div id="demo-container" class="container-fluid">\n  <h2>\n    Example 36: Excel Export Formulas\n    <span class="float-end">\n      <a style="font-size: 18px"\n         target="_blank"\n         href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/packages/demo/src/examples/slickgrid/example36.ts">\n        <span class="mdi mdi-link-variant"></span> code\n      </a>\n    </span>\n  </h2>\n  <div class="subtitle">\n    Grid with Excel Formulas (<a href="https://ghiscoding.gitbook.io/aurelia-slickgrid/grid-functionalities/export-to-excel#cell-value-parser" target="_blank">Wiki docs</a>).\n    Calculate Totals via Formatters in the UI, but use Excel Formula when exporting via <code>excelExportOptions.valueParserCallback</code>\n    When Grouped we will also calculate the Group Totals in the UI via Group Formatter and we again use Excel Formula to calculate the Group Totals (sum) dynamically.\n    For Grouping we need to use <code>groupTotalsExcelExportOptions.valueParserCallback</code> instead.\n  </div>\n\n  <section class="row mb-2">\n    <div class="mb-1">\n      <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="exportToExcel()" data-test="export-excel-btn">\n        <span class="mdi mdi-file-excel-outline text-success"></span>\n        <span>Export to Excel</span>\n      </button>\n      <span>\n        <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="groupByTaxable()" data-test="group-by-btn">\n          <span>Group by Taxable</span>\n        </button>\n        <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="clearGrouping()" data-test="clear-grouping-btn">\n          <span>Clear grouping</span>\n        </button>\n      </span>\n      <span class="ms-4 text-bold d-inline-flex align-items-center gap-4px">\n        Tax Rate (%):\n        <input type="number" value.bind="taxRate" class="narrow input" step="0.25" data-test="taxrate" />\n        <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="updateTaxRate()" data-test="update-btn">\n          Update\n        </button>\n      </span>\n    </div>\n  </section>\n\n  <aurelia-slickgrid grid-id="grid36"\n    column-definitions.bind="columnDefinitions"\n    grid-options.bind="gridOptions"\n    dataset.bind="dataset"\n    instances.bind="aureliaGrid"\n    on-cell-change.trigger="invalidateAll()">\n  </aurelia-slickgrid>\n</div>\n',c=n,d=[],u={};let p;function m(t){p||(p=r.K94.define({name:s,template:n,dependencies:d,bindables:u})),t.register(p)}var b=a(5700),x=a(2099),h=a(9123),g=a.n(h),f=a(4472),y=a.n(f),C=a(948),k=a.n(C),F=a(9747),G=a.n(F),E=a(7383),T=a.n(E),v=a(8308),w=a.n(v),$={};$.styleTagTransform=w(),$.setAttributes=G(),$.insert=k().bind(null,"head"),$.domAPI=y(),$.insertStyleElement=T(),g()(o.A,$),o.A&&o.A.locals&&o.A.locals,a(3778);const A=(t,e,a,l,i,r)=>{const o=function(t,e,a){const l=a.getOptions(),i=e.editor;return l.editable&&i}(0,l,r);a=null==a?"":a;const s=document.createElement("div");return s.className="editing-field",a instanceof HTMLElement?s.appendChild(a):s.textContent=a,o?s:a};class P{field;taxRate;_sum=0;_type="sum";constructor(t,e){this.field=t,this.taxRate=e}get type(){return this._type}init(){this._sum=0}accumulate(t){if("taxes"===this.field&&t.taxable&&(this._sum+=t.price*t.qty*(this.taxRate/100)),"subTotal"===this.field&&(this._sum+=t.price*t.qty),"total"===this.field){let e=0;t.taxable&&(e=t.price*t.qty*(this.taxRate/100)),this._sum+=t.price*t.qty+e}}storeResult(t){t&&void 0!==t[this._type]||(t[this._type]={}),t[this._type][this.field]=this._sum}}let R=(()=>{let t,e,a=[(0,r.EMX)(l)],o=[];return class{static{e=this}static{const l="function"==typeof Symbol&&Symbol.metadata?Object.create(null):void 0;(0,i.G4)(null,t={value:e},a,{kind:"class",name:e.name,metadata:l},null,o),e=t.value,l&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:l}),(0,i.zF)(e,o)}columnDefinitions=[];gridOptions;dataset=[];aureliaGrid;excelExportService;isDataGrouped=!1;taxRate=7.5;constructor(){this.excelExportService=new x.N,this.defineGrid()}attached(){this.dataset=this.getData()}defineGrid(){this.columnDefinitions=[{id:"sel",name:"#",field:"id",headerCssClass:"header-centered",cssClass:"cell-unselectable",excludeFromExport:!0,maxWidth:30},{id:"name",name:"Name",field:"name",sortable:!0,width:140,filterable:!0,excelExportOptions:{width:18}},{id:"price",name:"Price",field:"price",type:b.PUO.number,editor:{model:b.R8o.float,decimal:2},sortable:!0,width:70,filterable:!0,formatter:b._tQ.dollar,groupTotalsFormatter:b.tao.sumTotalsDollarBold,groupTotalsExcelExportOptions:{style:{font:{bold:!0,size:11.5},format:"$0.00",border:{top:{color:"FF747474",style:"thick"}}},valueParserCallback:this.excelGroupCellParser.bind(this)}},{id:"qty",name:"Quantity",field:"qty",type:b.PUO.number,groupTotalsFormatter:b.tao.sumTotalsBold,groupTotalsExcelExportOptions:{style:{font:{bold:!0,size:11.5},border:{top:{color:"FF747474",style:"thick"}}},valueParserCallback:this.excelGroupCellParser.bind(this)},params:{minDecimal:0,maxDecimal:0},editor:{model:b.R8o.integer},sortable:!0,width:60,filterable:!0},{id:"subTotal",name:"Sub-Total",field:"subTotal",cssClass:"text-sub-total",type:b.PUO.number,sortable:!0,width:70,filterable:!0,exportWithFormatter:!1,formatter:b._tQ.multiple,groupTotalsFormatter:b.tao.sumTotalsDollarBold,params:{formatters:[(t,e,a,l,i)=>i.price*i.qty,b._tQ.dollar]},excelExportOptions:{style:{font:{outline:!0,italic:!0,color:"FF215073"},format:"$0.00"},width:12,valueParserCallback:this.excelRegularCellParser.bind(this)},groupTotalsExcelExportOptions:{style:{font:{bold:!0,italic:!0,size:11.5},format:"$0.00",border:{top:{color:"FF747474",style:"thick"}}},valueParserCallback:this.excelGroupCellParser.bind(this)}},{id:"taxable",name:"Taxable",field:"taxable",cssClass:"text-center",sortable:!0,width:60,filterable:!0,formatter:b._tQ.checkmarkMaterial,exportCustomFormatter:(t,e,a)=>a?"✓":"",excelExportOptions:{style:{alignment:{horizontal:"center"}}}},{id:"taxes",name:"Taxes",field:"taxes",cssClass:"text-taxes",type:b.PUO.number,sortable:!0,width:70,filterable:!0,formatter:b._tQ.multiple,groupTotalsFormatter:b.tao.sumTotalsDollarBold,params:{formatters:[(t,e,a,l,i)=>i.taxable?i.price*i.qty*(this.taxRate/100):null,b._tQ.dollar]},excelExportOptions:{style:{font:{outline:!0,italic:!0,color:"FFC65911"},format:"$0.00"},width:12,valueParserCallback:this.excelRegularCellParser.bind(this)},groupTotalsExcelExportOptions:{style:{font:{bold:!0,italic:!0,color:"FFC65911",size:11.5},format:"$0.00",border:{top:{color:"FF747474",style:"thick"}}},valueParserCallback:this.excelGroupCellParser.bind(this)}},{id:"total",name:"Total",field:"total",type:b.PUO.number,sortable:!0,width:70,filterable:!0,cssClass:"text-total",formatter:b._tQ.multiple,groupTotalsFormatter:b.tao.sumTotalsDollarBold,params:{formatters:[(t,e,a,l,i)=>{let r=i.price*i.qty;return i.taxable&&(r+=r*(this.taxRate/100)),r},b._tQ.dollar]},excelExportOptions:{style:{font:{outline:!0,bold:!0,color:"FF005A9E"},format:"$0.00"},width:12,valueParserCallback:this.excelRegularCellParser.bind(this)},groupTotalsExcelExportOptions:{style:{font:{bold:!0,color:"FF005A9E",size:12},format:"$0.00",border:{top:{color:"FF747474",style:"thick"}}},valueParserCallback:this.excelGroupCellParser.bind(this)}}],this.gridOptions={autoAddCustomEditorFormatter:A,gridHeight:410,gridWidth:750,enableCellNavigation:!0,autoEdit:!0,autoCommitEdit:!0,editable:!0,rowHeight:33,formatterOptions:{maxDecimal:2,minDecimal:2},enableGrouping:!0,externalResources:[this.excelExportService],enableExcelExport:!0,excelExportOptions:{filename:"grocery-list",sanitizeDataExport:!0,sheetName:"Grocery List",columnHeaderStyle:{font:{color:"FFFFFFFF"},fill:{type:"pattern",patternType:"solid",fgColor:"FF4a6c91"}},customExcelHeader:(t,e)=>{const a=t.getStyleSheet().createFormat({font:{size:18,fontName:"Calibri",bold:!0,color:"FFFFFFFF"},alignment:{wrapText:!0,horizontal:"center"},fill:{type:"pattern",patternType:"solid",fgColor:"FF203764"}});e.setRowInstructions(0,{height:40});const l=this.isDataGrouped?"H1":"G1";e.mergeCells("A1",l),e.data.push([{value:"Grocery Shopping List",metadata:{style:a.id}}])}}}}invalidateAll(){this.aureliaGrid.dataView?.refresh(),this.aureliaGrid.slickGrid?.invalidate()}updateTaxRate(){this.isDataGrouped&&this.groupByTaxable(),this.invalidateAll()}exportToExcel(){this.excelExportService.exportToExcel()}excelGroupCellParser(t,{columnDef:e,excelFormatId:a,dataRowIdx:l}){const i=this.aureliaGrid.slickGrid?.getColumnIndex("price")||0,r=this.aureliaGrid.slickGrid?.getColumnIndex("qty")||0,o=this.aureliaGrid.slickGrid?.getColumnIndex("taxes")||0,s=this.aureliaGrid.slickGrid?.getColumnIndex("subTotal")||0,n=this.aureliaGrid.slickGrid?.getColumnIndex("total")||0,c=t?.group?.count||0,d=`${String.fromCharCode("A".charCodeAt(0)+i-0)}`,u=`${String.fromCharCode("A".charCodeAt(0)+r-0)}`,p=`${String.fromCharCode("A".charCodeAt(0)+s-0)}`,m=`${String.fromCharCode("A".charCodeAt(0)+o-0)}`,b=`${String.fromCharCode("A".charCodeAt(0)+n-0)}`;let x="";switch(e.id){case"price":x=d;break;case"qty":x=u;break;case"subTotal":x=p;break;case"taxes":x=m;break;case"total":x=b}return{value:`SUM(${x}${l+3-c}:${x}${l+3-1})`,metadata:{type:"formula",style:a}}}excelRegularCellParser(t,{columnDef:e,excelFormatId:a,dataRowIdx:l,dataContext:i}){const r=this.isDataGrouped?0:1,o=this.aureliaGrid.slickGrid?.getColumnIndex("price")||0,s=this.aureliaGrid.slickGrid?.getColumnIndex("qty")||0,n=this.aureliaGrid.slickGrid?.getColumnIndex("taxes")||0,c=`${String.fromCharCode("A".charCodeAt(0)+o-r)}${l+3}`,d=`${String.fromCharCode("A".charCodeAt(0)+s-r)}${l+3}`,u=`${String.fromCharCode("A".charCodeAt(0)+n-r)}${l+3}`;let p="";switch(e.id){case"subTotal":p=`${c}*${d}`;break;case"taxes":p=i.taxable?`${c}*${d}*${this.taxRate/100}`:"";break;case"total":p=`(${c}*${d})+${u}`}return{value:p,metadata:{type:"formula",style:a}}}getData(){let t=1;return[{id:t++,name:"Oranges",qty:4,taxable:!1,price:2.22},{id:t++,name:"Apples",qty:3,taxable:!1,price:1.55},{id:t++,name:"Honeycomb Cereals",qty:2,taxable:!0,price:4.55},{id:t++,name:"Raisins",qty:77,taxable:!1,price:.23},{id:t++,name:"Corn Flake Cereals",qty:1,taxable:!0,price:6.62},{id:t++,name:"Tomatoes",qty:3,taxable:!1,price:1.88},{id:t++,name:"Butter",qty:1,taxable:!1,price:3.33},{id:t++,name:"BBQ Chicken",qty:1,taxable:!1,price:12.33},{id:t++,name:"Chicken Wings",qty:12,taxable:!0,price:.53},{id:t++,name:"Drinkable Yogurt",qty:6,taxable:!0,price:1.22},{id:t++,name:"Milk",qty:3,taxable:!0,price:3.11}]}clearGrouping(){this.isDataGrouped=!1,this.aureliaGrid?.dataView?.setGrouping([])}groupByTaxable(){this.isDataGrouped=!0,this.aureliaGrid?.dataView?.setGrouping({getter:"taxable",formatter:t=>`Taxable: <span class="mdi ${t.value?"mdi-check-box-outline":"mdi-checkbox-blank-outline"} text-info"></span> <span class="text-primary">(${t.count} items)</span>`,comparer:(t,e)=>e.value-t.value,aggregators:[new b.J2q.Sum("price"),new b.J2q.Sum("qty"),new P("subTotal",this.taxRate),new P("taxes",this.taxRate),new P("total",this.taxRate)],aggregateCollapsed:!1,lazyTotalsCalculation:!1}),this.aureliaGrid?.dataView?.refresh()}},e})()}}]);