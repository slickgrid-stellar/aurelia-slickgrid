"use strict";(self.webpackChunkau_slickgrid_demo=self.webpackChunkau_slickgrid_demo||[]).push([[229],{4723:(e,t,i)=>{i.d(t,{M:()=>s});var r=i(9628);class s{_clearFilterTriggered=!1;_shouldTriggerQuery=!0;filterElm;grid;searchTerms=[];columnDef;callback;operator=r.huT.equal;get columnFilter(){return this.columnDef?.filter??{}}get gridOptions(){return this.grid?.getOptions()??{}}init(e){this.grid=e.grid,this.callback=e.callback,this.columnDef=e.columnDef,this.searchTerms=(e.hasOwnProperty("searchTerms")?e.searchTerms:[])||[];const t=Array.isArray(this.searchTerms)&&this.searchTerms.length>0?this.searchTerms[0]:"";this.filterElm=this.createDomElement(t),this.filterElm.addEventListener("keyup",this.handleKeyup.bind(this))}handleKeyup(e){let t=e.target?.value??"";const i=this.gridOptions.enableFilterTrimWhiteSpace||this.columnFilter.enableTrimWhiteSpace;"string"==typeof t&&i&&(t=t.trim()),this._clearFilterTriggered?(this.callback(e,{columnDef:this.columnDef,clearFilterTriggered:this._clearFilterTriggered,shouldTriggerQuery:this._shouldTriggerQuery}),this.filterElm.classList.remove("filled")):(""===t?this.filterElm.classList.remove("filled"):this.filterElm.classList.add("filled"),this.callback(e,{columnDef:this.columnDef,searchTerms:[t],shouldTriggerQuery:this._shouldTriggerQuery})),this._clearFilterTriggered=!1,this._shouldTriggerQuery=!0}clear(e=!0){this.filterElm&&(this._clearFilterTriggered=!0,this._shouldTriggerQuery=e,this.filterElm.value="",this.filterElm.dispatchEvent(new Event("keyup")))}destroy(){this.filterElm&&(this.filterElm.removeEventListener("keyup",this.handleKeyup),this.filterElm.remove())}setValues(e){e&&(this.filterElm.value=e)}createDomElement(e){const t=this.grid.getHeaderRowColumn(this.columnDef.id);(0,r.i3Z)(t);let i=this.gridOptions?.defaultFilterPlaceholder??"";this.columnFilter?.placeholder&&(i=this.columnFilter.placeholder);const s=document.createElement("input");s.className="form-control search-filter",s.placeholder=i;const n=e;return s.value=n,s.dataset.columnid=`${this.columnDef.id}`,t&&t.appendChild(s),s}}},5229:(e,t,i)=>{i.r(t),i.d(t,{Example4:()=>y});var r={};i.r(r),i.d(r,{bindables:()=>c,default:()=>o,dependencies:()=>l,name:()=>n,register:()=>u,template:()=>a});var s=i(3148);const n="example4",a='<h2>\n  ${title}\n  <span class="float-end">\n    <a style="font-size: 18px"\n        target="_blank"\n        href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/packages/demo/src/examples/slickgrid/example4.ts">\n      <span class="mdi mdi-link-variant"></span> code\n    </a>\n  </span>\n</h2>\n<div class="subtitle" innerhtml.bind="subTitle"></div>\n\n<br />\n<span if.bind="metrics">\n  <b>Metrics:</b> ${metrics.endTime | dateFormat: \'DD MMM, h:mm:ss a\'} | ${metrics.itemCount} of\n  ${metrics.totalItemCount}\n  items\n</span>\n\n<div class="btn-group" role="group" aria-label="...">\n  <button class="btn btn-sm btn-outline-secondary btn-icon" data-test="scroll-top-btn" click.trigger="scrollGridTop()">\n    <i class="mdi mdi-arrow-down mdi-rotate-180 icon"></i>\n  </button>\n  <button class="btn btn-sm btn-outline-secondary btn-icon" data-test="scroll-bottom-btn" click.trigger="scrollGridBottom()">\n    <i class="mdi mdi-arrow-down icon"></i>\n  </button>\n</div>\n\n<button class="btn btn-outline-secondary btn-sm btn-icon" data-test="clear-filters"\n        click.trigger="aureliaGrid.filterService.clearFilters()">\n  Clear Filters\n</button>\n<button class="btn btn-outline-secondary btn-sm btn-icon" data-test="clear-sorting"\n        click.trigger="aureliaGrid.sortService.clearSorting()">\n  Clear Sorting\n</button>\n<button class="btn btn-outline-secondary btn-sm btn-icon" data-test="set-dynamic-filter"\n        click.trigger="setFiltersDynamically()">\n  Set Filters Dynamically\n</button>\n<button class="btn btn-outline-secondary btn-sm btn-icon" data-test="set-dynamic-sorting"\n        click.trigger="setSortingDynamically()">\n  Set Sorting Dynamically\n</button>\n\n<aurelia-slickgrid grid-id="grid4"\n                    column-definitions.bind="columnDefinitions"\n                    grid-options.bind="gridOptions"\n                    dataset.bind="dataset"\n                    on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"\n                    on-grid-state-changed.trigger="gridStateChanged($event.detail)"\n                    on-row-count-changed.trigger="refreshMetrics($event.detail.eventData, $event.detail.args)">\n</aurelia-slickgrid>\n',o=a,l=[],c=[];let h;function u(e){h||(h=s.K94.define({name:n,template:a,dependencies:l,bindables:c})),e.register(h)}var d=i(6972),f=i(5522),m=i(6832),p=i(4723),g=i(9628);function b(e,t){return Math.floor(Math.random()*(t-e+1)+e)}i(3262);class y{http;title="Example 4: Client Side Sort/Filter";subTitle='\n  Sort/Filter on client side only using SlickGrid DataView (<a href="https://ghiscoding.gitbook.io/aurelia-slickgrid/column-functionalities/sorting" target="_blank">Wiki docs</a>)\n  <br/>\n  <ul class="small">\n    <li>Support multi-sort (by default), hold "Shift" key and click on the next column to sort.</li>\n    <li>All column types support the following operators: (>, >=, <, <=, <>, !=, =, ==, *)</li>\n    <ul>\n      <li>Example: >100 ... >=2001-01-01 ... >02/28/17</li>\n      <li><b>Note:</b> For filters to work properly (default is string), make sure to provide a FieldType (type is against the dataset, not the Formatter)</li>\n    </ul>\n    <li>Date Filters</li>\n    <ul>\n      <li>\n        FieldType of dateUtc/date (from dataset) can use an extra option of "filterSearchType" to let user filter more easily.\n        For example, in the "UTC Date" field below, you can type "&gt;02/28/2017", also when dealing with UTC you have to take the time difference in consideration.\n      </li>\n    </ul>\n    <li>On String filters, (*) can be used as startsWith (Hello* => matches "Hello Word") ... endsWith (*Doe => matches: "John Doe")</li>\n    <li>Custom Filter are now possible, "Description" column below, is a customized InputFilter with different placeholder. See <a href="https://ghiscoding.gitbook.io/aurelia-slickgrid/column-functionalities/filters/custom-filter" target="_blank">Wiki - Custom Filter</a></li>\n  </ul>\n';aureliaGrid;columnDefinitions=[];gridOptions;dataset=[];metrics;constructor(e=(0,f.hd)((0,f.pn)(d.xl))){this.http=e,this.defineGrid()}attached(){this.dataset=this.mockData(1500)}detaching(){this.saveCurrentGridState()}aureliaGridReady(e){this.aureliaGrid=e}defineGrid(){this.columnDefinitions=[{id:"title",name:"Title",field:"title",filterable:!0,sortable:!0,type:g.PUO.string,minWidth:45,filter:{model:g.CuW.compoundInputText}},{id:"description",name:"Description",field:"description",filterable:!0,sortable:!0,minWidth:80,type:g.PUO.string,filter:{model:p.M,enableTrimWhiteSpace:!0}},{id:"duration",name:"Duration (days)",field:"duration",sortable:!0,type:g.PUO.number,exportCsvForceToKeepAsString:!0,minWidth:55,filterable:!0,filter:{model:g.CuW.multipleSelect,collectionAsync:this.http.fetch("assets/data/collection_500_numbers.json"),collectionFilterBy:[{property:"value",operator:g.huT.notEqual,value:360},{property:"value",operator:g.huT.notEqual,value:365}],collectionSortBy:{property:"value",sortDesc:!0,fieldType:g.PUO.number},customStructure:{value:"value",label:"label",optionLabel:"value",labelSuffix:"text"},collectionOptions:{separatorBetweenTextLabels:" ",filterResultAfterEachPass:"chain"},filterOptions:{maxHeight:250,width:175,useSelectOptionLabelToHtml:!0}}},{id:"complete",name:"% Complete",field:"percentComplete",formatter:g._tQ.percentCompleteBar,minWidth:70,type:g.PUO.number,sortable:!0,filterable:!0,filter:{model:g.CuW.compoundInputNumber}},{id:"start",name:"Start",field:"start",formatter:g._tQ.dateIso,sortable:!0,minWidth:75,type:g.PUO.date,filterable:!0,filter:{model:g.CuW.compoundDate}},{id:"usDateShort",name:"US Date Short",field:"usDateShort",sortable:!0,minWidth:70,width:70,type:g.PUO.dateUsShort,filterable:!0,filter:{model:g.CuW.compoundDate}},{id:"utcDate",name:"UTC Date",field:"utcDate",formatter:g._tQ.dateTimeIsoAmPm,sortable:!0,minWidth:115,type:g.PUO.dateUtc,outputType:g.PUO.dateTimeIsoAmPm,filterable:!0,filter:{model:g.CuW.compoundDate,filterOptions:{range:{min:"today"}}}},{id:"effort-driven",name:"Effort Driven",field:"effortDriven.isEffort",minWidth:85,maxWidth:95,type:g.PUO.boolean,sortable:!0,formatter:g._tQ.multiple,params:{formatters:[g._tQ.complexObject,g._tQ.checkmarkMaterial]},filterable:!0,filter:{collection:["","True","False"],model:g.CuW.singleSelect,filterOptions:{maxHeight:250}}}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableExcelExport:!0,enableExcelCopyBuffer:!0,enableFiltering:!0,showCustomFooter:!0,presets:{filters:[{columnId:"duration",searchTerms:[10,98]},{columnId:"usDateShort",operator:"<",searchTerms:["4/20/25"]}],sorters:[{columnId:"duration",direction:"DESC"},{columnId:"complete",direction:"ASC"}]},externalResources:[new m.N]}}mockData(e,t=0){const i=[];for(let r=t;r<t+e;r++){const e=Math.round(100*Math.random()),t=b(2e3,2035),s=b(10,35),n=b(1,12),a=n<10?`0${n}`:n,o=b(10,28),l=b(0,100),c=b(10,23),h=b(10,59),u=`${b(1,9)}${b(10,99)}`,d=r%3==0;i.push({id:r,title:"Task "+r,description:r%5?"desc "+r:null,duration:e,percentComplete:l,percentCompleteNumber:l,start:r%4?null:new Date(t,n,o),usDateShort:`${n}/${o}/${s}`,utcDate:`${t}-${a}-${o}T${c}:${h}:${h}.${u}Z`,effortDriven:{isEffort:d,label:d?"Effort":"NoEffort"}})}return i}gridStateChanged(e){console.log("Client sample, Grid State changed:: ",e.change)}saveCurrentGridState(){console.log("Client sample, current Grid State:: ",this.aureliaGrid.gridStateService.getCurrentGridState())}setFiltersDynamically(){this.aureliaGrid.filterService.updateFilters([{columnId:"duration",searchTerms:[2,25,48,50]},{columnId:"complete",searchTerms:[95],operator:"<"},{columnId:"effort-driven",searchTerms:[!0]},{columnId:"start",operator:">=",searchTerms:["2001-02-28"]}])}setSortingDynamically(){this.aureliaGrid.sortService.updateSorting([{columnId:"duration",direction:"ASC"},{columnId:"start",direction:"DESC"}])}refreshMetrics(e,t){t&&t.current>=0&&setTimeout((()=>{this.metrics={startTime:new Date,endTime:new Date,itemCount:t&&t.current||0,totalItemCount:this.dataset.length||0}}))}scrollGridBottom(){this.aureliaGrid.slickGrid.navigateBottom()}scrollGridTop(){this.aureliaGrid.slickGrid.navigateTop()}}s.K94.define(r,y)},6972:(e,t,i)=>{i.d(t,{Pq:()=>s,xl:()=>d});var r=i(5522);function s(e,t){return JSON.stringify(void 0!==e?e:{},t)}class n{constructor(){this.cache=new Map,this.delete=e=>this.cache.delete(e),this.has=e=>this.cache.has(e),this.set=(e,t)=>this.cache.set(e,t),this.get=e=>this.cache.get(e),this.clear=()=>this.cache.clear()}}const a=r.DI.createInterface((e=>e.singleton(n)));class o{constructor(){this.baseUrl="",this.defaults={},this.interceptors=[],this.dispatcher=null,this.c=(0,r.hd)(r.p7)}withBaseUrl(e){return this.baseUrl=e,this}withDefaults(e){return this.defaults=e,this}withInterceptor(e){return this.interceptors.push(e),this}useStandardConfiguration(){return Object.assign(this.defaults,{credentials:"same-origin"},this.defaults),this.rejectErrorResponses()}rejectErrorResponses(){return this.withInterceptor({response:l})}withRetry(e){const t=this.c.invoke(R,[e]);return this.withInterceptor(t)}withDispatcher(e){return this.dispatcher=e,this}}function l(e){if(!e.ok)throw e;return e}const c=(e,...t)=>new Error(`AUR${String(e).padStart(4,"0")}:${t.map(String)}`),h=/^([a-z][a-z0-9+\-.]*:)?\/\//i,u=r.DI.createInterface("fetch",(e=>{if("function"!=typeof fetch)throw c(5e3);return e.instance(fetch)})),d=r.DI.createInterface("IHttpClient",(e=>e.aliasTo(f)));class f{constructor(){this.activeRequestCount=0,this.isRequesting=!1,this.isConfigured=!1,this.baseUrl="",this.defaults=null,this.t=[],this.i=null,this.h=(0,r.hd)((0,r.P9)(o)),this.u=(0,r.hd)(u)}get interceptors(){return this.t.slice(0)}configure(e){let t;if("object"==typeof e)t={defaults:e};else{if("function"!=typeof e)throw c(5002,typeof e);{t=this.h(),t.baseUrl=this.baseUrl,t.defaults={...this.defaults},t.interceptors=this.t,t.dispatcher=this.i;const i=e(t);if(null!=i){if("object"!=typeof i)throw c(5001,typeof i);t=i}}}const i=t.defaults;if(i?.headers instanceof Headers)throw c(5003);const r=t.interceptors;if(r?.length>0){if(r.filter((e=>e instanceof R)).length>1)throw c(5004);const e=r.findIndex((e=>e instanceof R));if(e>=0&&e!==r.length-1)throw c(5005)}return this.baseUrl=t.baseUrl,this.defaults=i,this.t=t.interceptors??[],this.i=t.dispatcher,this.isConfigured=!0,this}fetch(e,t){this.C();let i=this.buildRequest(e,t);return this.processRequest(i,this.t).then((e=>{let t;if(e instanceof Response)t=Promise.resolve(e);else{if(!(e instanceof Request))throw c(5006,e);i=e,t=this.u.call(void 0,i)}return this.processResponse(t,this.t,i)})).then((e=>e instanceof Request?this.fetch(e):e)).then((e=>(this.R(),e)),(e=>{throw this.R(),e}))}buildRequest(e,t){const i=this.defaults??{};let r,s,n;const a=function(e){const t={},i=e??{};for(const e of Object.keys(i))t[e]="function"==typeof i[e]?i[e]():i[e];return t}(i.headers);if(e instanceof Request)r=e,n=new Headers(r.headers).get("Content-Type");else{t||(t={}),s=t.body;const a=void 0!==s?{body:s}:null,o={...i,headers:{},...t,...a};n=new Headers(o.headers).get("Content-Type"),r=new Request(m(this.baseUrl,e),o)}return n||(new Headers(a).has("content-type")?r.headers.set("Content-Type",new Headers(a).get("content-type")):void 0!==s&&function(e){try{JSON.parse(e)}catch(e){return!1}return!0}(s)&&r.headers.set("Content-Type","application/json")),function(e,t){const i=t??{};for(const t of Object.keys(i))e.has(t)||e.set(t,i[t])}(r.headers,a),s instanceof Blob&&s.type&&r.headers.set("Content-Type",s.type),r}get(e,t){return this.fetch(e,t)}post(e,t,i){return this.I(e,t,i,"POST")}put(e,t,i){return this.I(e,t,i,"PUT")}patch(e,t,i){return this.I(e,t,i,"PATCH")}delete(e,t,i){return this.I(e,t,i,"DELETE")}dispose(){this.t.forEach((e=>e.dispose?.())),this.t.length=0,this.i=null}C(){this.isRequesting=!!++this.activeRequestCount,this.isRequesting&&null!=this.i&&b(this.i,y.started)}R(){this.isRequesting=!! --this.activeRequestCount,this.isRequesting||null==this.i||b(this.i,y.drained)}processRequest(e,t){return this.B(e,t,"request","requestError",Request,this)}processResponse(e,t,i){return this.B(e,t,"response","responseError",Response,i,this)}B(e,t,i,r,s,...n){return(t??[]).reduce(((e,t)=>{const a=t[i],o=t[r];return e.then(a?e=>e instanceof s?a.call(t,e,...n):e:p,o?e=>o.call(t,e,...n):g)}),Promise.resolve(e))}I(e,t,i,r){return i||(i={}),i.method=r,null!=t&&(i.body=t),this.fetch(e,i)}}function m(e,t){return h.test(t)?t:(e??"")+t}function p(e){return e}function g(e){throw e}function b(e,t){const i=new e.ownerDocument.defaultView.CustomEvent(t,{bubbles:!0,cancelable:!0});setTimeout((()=>{e.dispatchEvent(i)}),1)}const y=Object.freeze({started:"aurelia-fetch-client-request-started",drained:"aurelia-fetch-client-requests-drained"}),C=r.DI.createInterface((e=>e.singleton(v))),T=Object.freeze({Set:"au:fetch:cache:set",Get:"au:fetch:cache:get",Clear:"au:fetch:cache:clear",Reset:"au:fetch:cache:reset",Dispose:"au:fetch:cache:dispose",CacheHit:"au:fetch:cache:hit",CacheMiss:"au:fetch:cache:miss",CacheStale:"au:fetch:cache:stale",CacheStaleRefreshed:"au:fetch:cache:stale:refreshed",CacheExpired:"au:fetch:cache:expired",CacheBackgroundRefreshed:"au:fetch:cache:background:refreshed",CacheBackgroundRefreshing:"au:fetch:cache:background:refreshing",CacheBackgroundStopped:"au:fetch:cache:background:stopped"});class v{constructor(){this.storage=(0,r.hd)(a),this.p=(0,r.hd)(r.r_),this.ea=(0,r.hd)(r.xe),this.q=(0,r.hd)(d),this.H=[],this.O=-1,this.j=[],this.T=new Map}subscribe(e,t){const i=this.ea.subscribe(e,t);return this.H.push(i),i}subscribeOnce(e,t){const i=this.ea.subscribeOnce(e,t);return this.H.push(i),i}setStaleTimer(e,t,i){const r=this.p.setTimeout((async()=>{this.delete(e),await this.q.get(i);const t=this.getItem(e);this.ea.publish(T.CacheStaleRefreshed,{key:e,value:t}),this.N(r)}),t);this.j.push(r)}startBackgroundRefresh(e){!e||this.O>-1||(this.O=this.p.setInterval((()=>{this.ea.publish(T.CacheBackgroundRefreshing),this.T.forEach(((e,t)=>{this.delete(t),this.q.get(e).then((()=>{const e=this.getItem(t);this.ea.publish(T.CacheBackgroundRefreshed,{key:t,value:e})}))}))}),e))}stopBackgroundRefresh(){this.p.clearInterval(this.O),this.O=-1,this.ea.publish(T.CacheBackgroundStopped)}set(e,t,i,r){const s={data:t,...i};this.setItem(e,s,r)}get(e){return this.getItem(e)?.data}setItem(e,t,i){t.lastCached=Date.now(),this.storage.set(e,t),this.T.set(e,i),this.ea.publish(T.Set,{key:e,value:t})}getItem(e){if(!this.storage.has(e))return void this.ea.publish(T.CacheMiss,{key:e});const t=this.storage.get(e);if(!t?.staleTime||!t?.lastCached)return this.ea.publish(T.CacheHit,{key:e,value:t}),t;const i=Date.now();if(i>t.lastCached+(t.staleTime??0))this.ea.publish(T.CacheStale,{key:e,value:t});else{if(!(i>t.lastCached+(t.cacheTime??0)))return this.ea.publish(T.CacheHit,{key:e,value:t}),t;this.ea.publish(T.CacheExpired,{key:e,value:t})}}delete(e){this.storage.delete(e),this.ea.publish(T.Clear,{key:e})}clear(){this.storage.clear(),this.T.clear(),this.ea.publish(T.Reset),this.stopBackgroundRefresh(),this.j.forEach((e=>{this.p.clearTimeout(e)})),this.j.length=0}dispose(){this.clear(),this.H.forEach((e=>e.dispose())),this.ea.publish(T.Dispose)}N(e){this.p.clearTimeout(e);const t=this.j.indexOf(e);t>-1&&this.j.splice(t,1)}}const k={cacheTime:3e5,staleTime:0,refreshStaleImmediate:!1,refreshInterval:0};class S{constructor(e){this.P=(0,r.hd)(C),this.cf={...k,...e??{}}}request(e){if(this.P.startBackgroundRefresh(this.cf.refreshInterval),"GET"!==e.method)return e;const t=this.P.get(this.key(e));return this.mark(t)??e}response(e,t){if(!t)return e;if(e.headers.has(S.cacheHeader))return e;const i=this.key(t);return this.P.setItem(i,{data:e,...this.cf},t),this.cf?.refreshStaleImmediate&&this.cf.staleTime>0&&this.P.setStaleTimer(i,this.cf.staleTime,t),e}dispose(){this.P.stopBackgroundRefresh()}key(e){return`${S.prefix}${e.url}`}mark(e){return e?.headers.set(S.cacheHeader,"hit"),e}}S.prefix="au:interceptor:",S.cacheHeader="x-au-fetch-cache";class D{constructor(){this.cache=(0,r.hd)(r.r_).globalThis.indexedDB,this.getStore=()=>this.database.transaction(D.cacheName,"readwrite").objectStore(D.cacheName),this.delete=e=>{this.getStore().delete(e)},this.has=e=>this.getStore().count(e).result>0,this.set=(e,t)=>this.getStore().put(t,e),this.get=e=>this.getStore().get(e).result,this.clear=()=>{const e=this.getStore();e.getAllKeys().result.forEach((t=>{e.delete(t)}))},this.database=this.cache.open(D.cacheName).result}}D.cacheName="au-cache";const w=Object.freeze({fixed:0,incremental:1,exponential:2,random:3}),E={maxRetries:3,interval:1e3,strategy:w.fixed};class R{constructor(e){if(this.p=(0,r.hd)(r.r_),this.retryConfig={...E,...e??{}},this.retryConfig.strategy===w.exponential&&this.retryConfig.interval<=1e3)throw c(5007,this.retryConfig.interval)}request(e){return e.retryConfig||(e.retryConfig={...this.retryConfig},e.retryConfig.counter=0),e.retryConfig.requestClone=e.clone(),e}response(e,t){return delete t.retryConfig,e}responseError(e,t,i){const{retryConfig:r}=t,{requestClone:s}=r;return Promise.resolve().then((()=>{if(r.counter<r.maxRetries){const n=null==r.doRetry||r.doRetry(e,t);return Promise.resolve(n).then((n=>{if(n){r.counter++;const e=function(e){const{interval:t,strategy:i,minRandomInterval:r,maxRandomInterval:s,counter:n}=e;if("function"==typeof i)return e.strategy(n);switch(i){case w.fixed:return I[w.fixed](t);case w.incremental:return I[w.incremental](n,t);case w.exponential:return I[w.exponential](n,t);case w.random:return I[w.random](n,t,r,s);default:throw c(5008,i)}}(r);return new Promise((t=>this.p.setTimeout(t,isNaN(e)?0:e))).then((()=>{const e=s.clone();return"function"==typeof r.beforeRetry?r.beforeRetry(e,i):e})).then((e=>{const t={...e,retryConfig:r};return i.fetch(t)}))}throw delete t.retryConfig,e}))}throw delete t.retryConfig,e}))}}const I=[e=>e,(e,t)=>t*e,(e,t)=>1===e?t:t**e/1e3,(e,t,i=0,r=6e4)=>Math.random()*(r-i)+i]}}]);