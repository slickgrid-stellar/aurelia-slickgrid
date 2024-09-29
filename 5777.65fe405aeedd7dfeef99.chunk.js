"use strict";(self.webpackChunkau_slickgrid_demo=self.webpackChunkau_slickgrid_demo||[]).push([[5777],{7634:(e,t,n)=>{n.d(t,{A:()=>o});var i=n(8986),a=n.n(i),r=n(3603),l=n.n(r)()(a());l.push([e.id,".trading-platform.full-screen{position:absolute;top:0;left:0;right:0;bottom:0;padding:10px 12px 0 10px;background-color:#fff;z-index:1040;position:fixed}.changed-gain{background-color:#eafae8 !important}.changed-loss{background-color:#ffeae8 !important}.simulation-form input[type=number]{height:32px;width:50px;border:1px solid silver;border-radius:3px}.simulation-form div.range{display:contents;width:200px}.simulation-form div.range label.form-label{margin:0}.simulation-form div.range input.form-range{width:120px}.simulation-form .refresh-rate input{height:30px;width:46px}.sparkline{stroke:#00b78d;fill:rgba(0,183,141,.05)}*[hidden]{display:none}.trading-tooltip{position:absolute;background:rgba(0,0,0,.7);color:#fff;padding:2px 5px;font-size:12px;white-space:nowrap;z-index:9999}.slick-dark-mode .text-success,.dark-mode .text-success{color:#42b47f !important}.slick-dark-mode .changed-gain,.dark-mode .changed-gain{background-color:rgba(0,255,0,.1137254902) !important}.slick-dark-mode .changed-loss,.dark-mode .changed-loss{background-color:rgba(255,0,0,.1058823529) !important}.slick-dark-mode .trading-platform.full-screen,.dark-mode .trading-platform.full-screen{background-color:#33393e}",""]);const o=l},5777:(e,t,n)=>{n.r(t),n.d(t,{Example34:()=>q});var i={};n.r(i),n.d(i,{bindables:()=>c,default:()=>d,dependencies:()=>m,name:()=>o,register:()=>h,template:()=>s});var a=n(2741),r=n(7689),l=n(7634);const o="example34",s='<h2>\n  ${title}\n  <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="toggleDarkMode()" data-test="toggle-dark-mode">\n    <span class="mdi mdi-theme-light-dark"></span>\n    <span>Toggle Dark Mode</span>\n  </button>\n  <span class="float-end">\n    <a style="font-size: 18px" target="_blank"\n        href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/packages/demo/src/examples/slickgrid/example34.ts">\n      <span class="mdi mdi-link-variant"></span> code\n    </a>\n  </span>\n</h2>\n<div class="subtitle" innerhtml.bind="subTitle"></div>\n\n<div class="trading-platform">\n  <div class="row mb-4 simulation-form">\n    <div class="col-sm-12 d-flex align-items-center">\n      <div class="range">\n        <label for="refreshRateRange" class="form-label me-1">Changes Rate(ms)</label>\n        <input type="range" class="form-range" id="refreshRateRange" min="0" max="250" value.bind="refreshRate">\n        <span class="refresh-rate">\n          <input type="number" value.bind="refreshRate">\n        </span>\n      </div>\n      <span class="ms-3 me-1">\n        <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="start-btn" click.trigger="startSimulation()">\n          <li class="mdi mdi-play-circle-outline"></li> Start Simulation\n        </button>\n      </span>\n      <span class="me-3">\n        <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="stop-btn" click.trigger="stopSimulation()">\n          <li class="mdi mdi-stop-circle-outline"></li> Stop Simulation\n        </button>\n      </span>\n      <span class="mx-1">\n        <label for="change-per-cycle-input">Changes p/Cycle</label>\n        <input type="number" id="change-per-cycle-input" value.bind="minChangePerCycle" max.bind="maxChangePerCycle">\n        to\n        <input type="number" value.bind="maxChangePerCycle" min.bind="minChangePerCycle">\n      </span>\n      <span class="ms-2">\n        <label for="highlight-input">Highlight Duration(ms)</label>\n        <input type="number" id="highlight-input" data-test="highlight-input" value.bind="highlightDuration">\n      </span>\n      <div class="ms-auto">\n        <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="toggleFullScreen()">\n          <li class.bind="isFullScreen ? \'mdi mdi-arrow-collapse\' : \'mdi mdi-arrow-expand\'"></li> Toggle Full-Screen\n        </button>\n      </div>\n    </div>\n  </div>\n\n  <aurelia-slickgrid grid-id="grid34" column-definitions.bind="columnDefinitions" grid-options.bind="gridOptions"\n                      dataset.bind="dataset" instances.bind="aureliaGrid">\n  </aurelia-slickgrid>\n</div>\n',d=s,m=[],c={};let u;function h(e){u||(u=r.K94.define({name:o,template:s,dependencies:m,bindables:c})),e.register(u)}var p=n(8738),g=n(9580),b=n.n(g),f=n(8480),y=n(1337),C=n.n(y),k=n(334),v=n.n(k),w=n(2166),x=n.n(w),S=n(2185),T=n.n(S),D=n(4517),M=n.n(D),P=n(6658),N=n.n(P),W={};W.styleTagTransform=N(),W.setAttributes=T(),W.insert=x().bind(null,"head"),W.domAPI=v(),W.insertStyleElement=M(),C()(l.A,W),l.A&&l.A.locals&&l.A.locals,n(7375);const $=(e,t,n)=>`<img src="https://flags.fmcdn.net/data/flags/mini/${n.substring(0,2).toLowerCase()}.png" width="20"/> ${n}`,G=(e,t,n,i,a)=>{const r=a.priceChange>=0?"up":"down",l=new DocumentFragment,o=document.createElement("div");o.className="d-inline-flex align-items-center text-"+("up"===r?"success":"danger");const s=document.createElement("span");return s.className=`mdi mdi-arrow-${r}`,o.appendChild(s),l.appendChild(o),n instanceof HTMLElement?o.appendChild(n):o.appendChild(document.createTextNode(n)),l},A=(e,t,n)=>`<div class="d-inline-flex align-items-center"><span class="me-1 mdi mdi-16px mdi-${"Buy"===n?"plus":"minus"}-circle ${"Buy"===n?"text-info":"text-warning"}"></span> ${n}</div>`,_=(e,t,n,i,a)=>{if(a.historic.length<2)return"";const r=document.createElementNS("http://www.w3.org/2000/svg","svg");r.setAttributeNS(null,"width","135"),r.setAttributeNS(null,"height","30"),r.setAttributeNS(null,"stroke-width","2"),r.classList.add("sparkline"),b()(r,a.historic,{cursorwidth:2,onmousemove:(e,t)=>{const n=e.target.closest("svg"),i=n?.nextElementSibling;i&&(i.hidden=!1,i.textContent=`$${(100*t.value/100).toFixed(2)}`,i.style.top=`${e.offsetY}px`,i.style.left=`${e.offsetX+20}px`)},onmouseout:e=>{const t=e.target.closest("svg"),n=t?.nextElementSibling;n&&(n.hidden=!0)}});const l=document.createElement("div");return l.appendChild(r),l.appendChild((0,f.fhB)("div",{className:"trading-tooltip",hidden:!0})),l};let q=(()=>{let e,t,n=[(0,r.EMX)(i)],l=[];return class{static{t=this}static{const i="function"==typeof Symbol&&Symbol.metadata?Object.create(null):void 0;(0,a.G4)(null,e={value:t},n,{kind:"class",name:t.name,metadata:i},null,l),t=e.value,i&&Object.defineProperty(t,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:i}),(0,a.zF)(t,l)}_darkMode=!1;title="Example 34: Real-Time Trading Platform";subTitle="Simulate a stock trading platform with lot of price changes\n  <ul>\n    <li>you can start/stop the simulation</li>\n    <li>optionally change random numbers, between 0 and 10 symbols, per cycle (higher numbers means more changes)</li>\n    <li>optionally change the simulation changes refresh rate in ms (lower number means more changes).</li>\n    <li>you can Group by 1 of these columns: Currency, Market or Type</li>\n    <li>to show SlickGrid HUGE PERF., do the following: (1) lower Changes Rate (2) increase both Changes per Cycle and (3) lower Highlight Duration\n  </ul>";aureliaGrid;gridOptions;columnDefinitions=[];dataset=[];isFullScreen=!1;highlightDuration=150;itemCount=200;minChangePerCycle=0;maxChangePerCycle=10;refreshRate=75;timer;constructor(){this.defineGrid()}attached(){this.getData(),window.setTimeout((()=>{this.startSimulation()}),this.refreshRate)}detaching(){this.stopSimulation(),document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light"}defineGrid(){this.columnDefinitions=[{id:"currency",name:"Currency",field:"currency",filterable:!0,sortable:!0,minWidth:65,width:65,formatter:$,filter:{model:f.CuW.singleSelect,collection:[{label:"",value:""},{label:"CAD",value:"CAD"},{label:"USD",value:"USD"}]},grouping:{getter:"currency",formatter:e=>`Currency: <span style="color: var(--slick-primary-color); font-weight: bold;">${e.value}</span>  <span style="color: #659bff;">(${e.count} items)</span>`,aggregators:[new f.J2q.Sum("amount")],aggregateCollapsed:!0,collapsed:!1}},{id:"symbol",name:"Symbol",field:"symbol",filterable:!0,sortable:!0,minWidth:65,width:65},{id:"market",name:"Market",field:"market",filterable:!0,sortable:!0,minWidth:75,width:75,grouping:{getter:"market",formatter:e=>`Market: <span style="color: var(--slick-primary-color); font-weight: bold;">${e.value}</span>  <span style="color: #659bff;">(${e.count} items)</span>`,aggregators:[new f.J2q.Sum("amount")],aggregateCollapsed:!0,collapsed:!1}},{id:"company",name:"Company",field:"company",filterable:!0,sortable:!0,minWidth:80,width:130},{id:"trsnType",name:"Type",field:"trsnType",filterable:!0,sortable:!0,minWidth:60,width:60,formatter:A,filter:{model:f.CuW.singleSelect,collection:[{label:"",value:""},{label:"Buy",value:"Buy"},{label:"Sell",value:"Sell"}]},grouping:{getter:"trsnType",formatter:e=>`Type: <span style="color: var(--slick-primary-color); font-weight: bold;">${e.value}</span>  <span style="color: #659bff;">(${e.count} items)</span>`,aggregators:[new f.J2q.Sum("amount")],aggregateCollapsed:!0,collapsed:!1}},{id:"priceChange",name:"Change",field:"priceChange",filterable:!0,sortable:!0,minWidth:80,width:80,filter:{model:f.CuW.compoundInputNumber},type:f.PUO.number,formatter:f._tQ.multiple,params:{formatters:[f._tQ.dollar,G],maxDecimal:2}},{id:"price",name:"Price",field:"price",filterable:!0,sortable:!0,minWidth:70,width:70,filter:{model:f.CuW.compoundInputNumber},type:f.PUO.number,formatter:f._tQ.dollar,params:{maxDecimal:2}},{id:"quantity",name:"Quantity",field:"quantity",filterable:!0,sortable:!0,minWidth:70,width:70,filter:{model:f.CuW.compoundInputNumber},type:f.PUO.number},{id:"amount",name:"Amount",field:"amount",filterable:!0,sortable:!0,minWidth:70,width:60,filter:{model:f.CuW.compoundInputNumber},type:f.PUO.number,formatter:f._tQ.dollar,params:{maxDecimal:2},groupTotalsFormatter:f.tao.sumTotalsDollarBold},{id:"historic",name:"Price History",field:"historic",minWidth:100,width:150,maxWidth:150,formatter:_},{id:"execution",name:"Execution Timestamp",field:"execution",filterable:!0,sortable:!0,minWidth:125,formatter:f._tQ.dateTimeIsoAmPm,exportWithFormatter:!0,type:f.PUO.dateTimeIsoAM_PM,filter:{model:f.CuW.compoundDate}}],this.gridOptions={autoResize:{container:".trading-platform",rightPadding:0,bottomPadding:10},formatterOptions:{displayNegativeNumberWithParentheses:!0,thousandSeparator:","},draggableGrouping:{dropPlaceHolderText:"Drop a column header here to group by any of these available columns: Currency, Market or Type",deleteIconCssClass:"mdi mdi-close"},enableDraggableGrouping:!0,createPreHeaderPanel:!0,darkMode:this._darkMode,showPreHeaderPanel:!0,preHeaderPanelHeight:40,enableCellNavigation:!0,enableFiltering:!0,cellHighlightCssClass:"changed"}}getData(){const e=[];for(let t=0;t<200;t++){const n=Math.round(100*Math.random()),i=this.randomNumber(1,50),a=this.randomNumber(125,255),r=this.randomNumber(-25,35,!1),l=this.randomNumber(r,300),o=l<5?a:i,s=l*o,d=new Date;d.setHours(9,30,0);const m=Math.floor(10*Math.random())%2?"CAD":"USD",c=p.a.company.name();e[t]={id:t,currency:m,trsnType:Math.round(100*Math.random())%2?"Buy":"Sell",company:c,symbol:"CAD"===m?c.substr(0,3).toUpperCase()+".TO":c.substr(0,4).toUpperCase(),market:"CAD"===m?"TSX":l>200?"Nasdaq":"S&P 500",duration:t%33==0?null:100*Math.random()+"",percentCompleteNumber:n,priceChange:r,price:l,quantity:o,amount:s,execution:d,historic:[l]}}this.dataset=e}startSimulation(){const e={},t=this.randomNumber(this.minChangePerCycle,this.maxChangePerCycle);for(let n=0;n<t;n++){const t=this.randomNumber(1,50),n=this.randomNumber(125,255),i=Math.round(Math.random()*(this.dataset.length-1)),a=this.randomNumber(-25,25,!1),r=(0,f.A4q)(this.dataset[i]),l={...this.dataset[i]};l.priceChange=a,l.price=l.price+a<0?0:l.price+a,l.quantity=l.price<5?n:t,l.amount=l.price*l.quantity,l.trsnType=Math.round(100*Math.random())%2?"Buy":"Sell",l.execution=new Date,l.historic.push(l.price),l.historic=l.historic.slice(-20),e[i]||(e[i]={}),e[i].id="changed",this.renderCellHighlighting(l,this.findColumnById("priceChange"),a),(r.priceChange<0&&l.priceChange>0||r.priceChange>0&&l.priceChange<0)&&this.renderCellHighlighting(l,this.findColumnById("price"),a),this.aureliaGrid.dataView.updateItem(l.id,l)}this.timer=window.setTimeout(this.startSimulation.bind(this),this.refreshRate||0)}stopSimulation(){window.clearTimeout(this.timer)}findColumnById(e){return this.columnDefinitions.find((t=>t?.field===e))}renderCellHighlighting(e,t,n){if(e&&t){const i=this.aureliaGrid.dataView.getRowByItem(e);if(i>=0){const a={[i]:{[t.id]:n>=0?"changed-gain":"changed-loss"}};this.aureliaGrid.slickGrid.setCellCssStyles(`highlight_${[t.id]}${i}`,a),window.setTimeout((()=>this.removeUnsavedStylingFromCell(e,t,i)),this.highlightDuration)}}}removeUnsavedStylingFromCell(e,t,n){this.aureliaGrid.slickGrid.removeCellCssStyles(`highlight_${[t.id]}${n}`)}toggleFullScreen(){const e=document.querySelector(".trading-platform");e?.classList.contains("full-screen")?(e.classList.remove("full-screen"),this.isFullScreen=!1):e&&(e.classList.add("full-screen"),this.isFullScreen=!0),this.aureliaGrid.resizerService.resizeGrid()}toggleDarkMode(){this._darkMode=!this._darkMode,this.toggleBodyBackground(),this.aureliaGrid.slickGrid?.setOptions({darkMode:this._darkMode})}toggleBodyBackground(){this._darkMode?(document.querySelector(".panel-wm-content").classList.add("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="dark"):(document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light")}randomNumber(e,t,n=!0){const i=Math.random()*(t-e+1)+e;return n?Math.floor(i):i}},t})()}}]);