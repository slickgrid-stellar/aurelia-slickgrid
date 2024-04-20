"use strict";(self.webpackChunkau_slickgrid_demo=self.webpackChunkau_slickgrid_demo||[]).push([[630],{49630:(t,e,i)=>{i.d(e,{P:()=>o});var r=i(26682),n=i(90451);class s{constructor(t,e){if(this.queryFnName=t,this.head=[],"string"==typeof e)this.alias=e;else if("object"==typeof e)this.filter(e);else{if(void 0===e&&2===arguments.length)throw new TypeError('You have passed undefined as Second argument to "Query"');if(void 0!==e)throw new TypeError(`Second argument to "Query" should be an alias name(String) or filter arguments(Object). What was passed is: ${e}`)}}filter(t){for(const e of Object.keys(t)){if("function"==typeof t[e])continue;const i=this.getGraphQLValue(t[e]);"{}"!==i&&this.head.push(`${e}:${i}`)}return this}find(...t){if(!t||!Array.isArray(t)||0===t.length)throw new TypeError("find value can not be >>falsy<<");const e=1===t.length&&Array.isArray(t[0])?t[0]:t;return this.body=this.parceFind(e),this}setAlias(t){this.alias=t}toString(){if(void 0===this.body)throw new ReferenceError("return properties are not defined. use the 'find' function to defined them");return`${this.alias?this.alias+":":""} ${this.queryFnName} ${this.head.length>0?"("+this.head.join(",")+")":""}  { ${this.body} }`}parceFind(t){return t.map(((e,i)=>{const r=t[i];if(r instanceof s)return r.toString();if(Array.isArray(r)||"object"!=typeof r){if("string"==typeof r)return r;throw new RangeError(`cannot handle Find value of ${r}`)}{const t=Object.keys(r);if(1!==t.length)throw new RangeError(`Alias objects should only have one value. was passed: ${JSON.stringify(r)}`);const e=t[0],i=r[e];return Array.isArray(i)?new s(e).find(i):`${e} : ${i} `}})).join(",")}getGraphQLValue(t){return"string"==typeof t?t=JSON.stringify(t):Array.isArray(t)?t=`[${t=t.map((t=>this.getGraphQLValue(t))).join()}]`:t instanceof Date?t=JSON.stringify(t):null!==t&&"object"==typeof t&&(t=this.objectToString(t)),t}objectToString(t){const e=[];for(const i of Object.keys(t))"function"!=typeof t[i]&&e.push(`${i}:${this.getGraphQLValue(t[i])}`);return`{${e.join()}}`}}class o{constructor(){this._currentFilters=[],this._currentPagination=null,this._currentSorters=[],this._datasetIdPropName="id",this.defaultPaginationOptions={first:25,offset:0}}get columnDefinitions(){return this._columnDefinitions}get _gridOptions(){return this._grid?.getOptions()??{}}init(t,e,i,r){this._grid=i,this.options=t||{datasetName:""},this.pagination=e,this._datasetIdPropName=this._gridOptions.datasetIdPropertyName||"id",i?.getColumns&&(this._columnDefinitions=r?.allColumns??i.getColumns()??[])}buildQuery(){if(!this.options||!this.options.datasetName||!Array.isArray(this._columnDefinitions))throw new Error('GraphQL Service requires the "datasetName" property to properly build the GraphQL query');let t=this._columnDefinitions||[];t=t.filter((t=>!t.excludeFromQuery));const e=new s(`query ${this.options.operationName??""}`),i=new s(this.options.datasetName),r=new s("nodes"),n=[];if(t&&Array.isArray(t))for(const e of t)e.excludeFieldFromQuery||n.push(e.field),e.fields&&n.push(...e.fields);-1===n.indexOf(this._datasetIdPropName)&&n.unshift(this._datasetIdPropName);const o=this.buildFilterQuery(n);let a=[];if(!1!==this._gridOptions.enablePagination){if(this.options.useCursor){const t=new s("edges"),e=new s("pageInfo");e.find("hasNextPage","hasPreviousPage","endCursor","startCursor"),r.find(o),t.find(["cursor"]),a=["totalCount",r,e,t]}else r.find(o),a=["totalCount",r];i.find(a)}else i.find(o);let l={};if(!1!==this._gridOptions.enablePagination)if(l={},this.options.useCursor&&this.options.paginationOptions)l={...this.options.paginationOptions};else{const t=this.options?.paginationOptions;l.first=this.options?.paginationOptions?.first??this.pagination?.pageSize??this.defaultPaginationOptions.first,l.offset=t?.hasOwnProperty("offset")?+t.offset:0}if(this.options.sortingOptions&&Array.isArray(this.options.sortingOptions)&&this.options.sortingOptions.length>0&&(l.orderBy=this.options.sortingOptions),this.options.filteringOptions&&Array.isArray(this.options.filteringOptions)&&this.options.filteringOptions.length>0&&(l.filterBy=this.options.filteringOptions),this.options.addLocaleIntoQuery&&(l.locale=this._gridOptions.translater?.getCurrentLanguage()||this._gridOptions.locale||"en"),this.options.extraQueryArguments)for(const t of this.options.extraQueryArguments)l[t.field]=t.value;return i.filter(l),e.find(i),this.trimDoubleQuotesOnEnumField(e.toString(),["direction:","field:","operator:"],this.options.keepArgumentFieldDoubleQuotes||!1)}buildFilterQuery(t){const e=(t={},i)=>{const r=i.shift();return t[r]=i.length?e(t[r]??{},i):null,t},i=t.reduce(((t,i)=>e(t,i.split("."))),{});return JSON.stringify(i).replace(/"|:|null/g,"").replace(/^\{/,"").replace(/\}$/,"")}clearFilters(){this._currentFilters=[],this.updateOptions({filteringOptions:[]})}clearSorters(){this._currentSorters=[],this.updateOptions({sortingOptions:[]})}getInitPaginationOptions(){const t=this.pagination?this.pagination.pageSize:25;return this.options?.useCursor?{first:t}:{first:t,offset:0}}getDatasetName(){return this.options?.datasetName||""}getCurrentFilters(){return this._currentFilters}getCurrentPagination(){return this._currentPagination}getCurrentSorters(){return this._currentSorters}resetPaginationOptions(){let t;this.options?.useCursor?t=this.getInitPaginationOptions():(t=this.options&&this.options.paginationOptions||this.getInitPaginationOptions(),t.offset=0),this._currentPagination={pageNumber:1,pageSize:t.first||20},!this._gridOptions||!this._gridOptions.enablePagination&&this._gridOptions.hasOwnProperty("enablePagination")||this.updateOptions({paginationOptions:t})}updateOptions(t){this.options={...this.options,...t}}processOnFilterChanged(t,e){if(void 0===this._gridOptions.backendServiceApi)throw new Error('Something went wrong in the GraphqlService, "backendServiceApi" is not initialized');if(this._currentFilters=this.castFilterToColumnFilters(e.columnFilters),!e||!e.grid)throw new Error('Something went wrong when trying create the GraphQL Backend Service, it seems that "args" is not populated correctly');return this.updateFilters(e.columnFilters,!1),this.resetPaginationOptions(),this.buildQuery()}processOnPaginationChanged(t,e){const i=+(e.pageSize||(this.pagination?this.pagination.pageSize:20));return"first"in e||"last"in e?this.updatePagination(e.newPage,i,e):this.updatePagination(e.newPage,i),this.buildQuery()}processOnSortChanged(t,e){const i=e.multiColumnSort?e.sortCols:new Array({columnId:e.sortCol?.id??"",sortCol:e.sortCol,sortAsc:e.sortAsc});return this.updateSorters(i),this.buildQuery()}updateFilters(t,e){const i=[];let s;e&&(this._currentFilters=this.castFilterToColumnFilters(t));for(const o in t)if(t.hasOwnProperty(o)){const a=t[o];let l;if(l=e&&Array.isArray(this._columnDefinitions)?this._columnDefinitions.find((t=>t.id===a.columnId)):a.columnDef,!l)throw new Error("[GraphQL Service]: Something went wrong in trying to get the column definition of the specified filter (or preset filters). Did you make a typo on the filter columnId?");let u=l.filter?.queryField||l.queryFieldFilter||l.queryField||l.field||l.name||"";u instanceof HTMLElement&&(u=(0,n.stripTags)(u.innerHTML));const h=l.type||r.PUO.string;let p=a?.searchTerms??[],c=Array.isArray(p)&&1===p.length?p[0]:"";if(void 0===c&&(c=""),!u)throw new Error('GraphQL filter could not find the field name to query the search, your column definition must include a valid "field" or "name" (optionally you can also use the "queryfield").');if(this.options?.useVerbatimSearchTerms||a.verbatimSearchTerms){i.push({field:(0,n.getHtmlStringOutput)(u),operator:a.operator,value:JSON.stringify(a.searchTerms)});continue}c=null==c?"":`${c}`;const g=!1!==(l.autoParseInputFilterOperator??this._gridOptions.autoParseInputFilterOperator)?c.match(/^([<>!=*]{0,2})(.*[^<>!=*])([*]?)$/):[c,"",c,""];let d=a.operator||g?.[1]||"";s=g?.[2]||"";const f=g?.[3]||("*z"===d?"*":"");if(u&&""===s&&0===p.length)continue;if(Array.isArray(p)&&1===p.length&&"string"==typeof p[0]&&p[0].indexOf("..")>=0&&(d!==r.huT.rangeInclusive&&d!==r.huT.rangeExclusive&&(d=this._gridOptions.defaultFilterRangeOperator??r.huT.rangeInclusive),p=p[0].split("..",2),""===p[0]?(d=d===r.huT.rangeInclusive?"<=":d===r.huT.rangeExclusive?"<":d,p=p.slice(1),s=p[0]):""===p[1]&&(d=d===r.huT.rangeInclusive?">=":d===r.huT.rangeExclusive?">":d,p=p.slice(0,1),s=p[0])),"string"==typeof s&&("*"!==d&&"a*"!==d&&"*z"!==d&&"*"!==f||(d="*"===d||"*z"===d?"EndsWith":"StartsWith")),!d&&l.filter&&l.filter.operator&&(d=l.filter.operator),!d&&Array.isArray(p)&&2===p.length&&p[0]&&p[1]&&(d=this._gridOptions.defaultFilterRangeOperator),d!==r.huT.rangeInclusive&&d!==r.huT.rangeExclusive||!Array.isArray(p)||1!==p.length||h!==r.PUO.date||(d=r.huT.equal),s=this.normalizeSearchValue(h,s),Array.isArray(p)&&p.forEach(((t,e)=>{p[e]=this.normalizeSearchValue(h,p[e])})),p&&p.length>1&&("IN"===d||"NIN"===d||"NOT_IN"===d))s=p.join(",");else if(p&&2===p.length&&(d===r.huT.rangeExclusive||d===r.huT.rangeInclusive)){i.push({field:(0,n.getHtmlStringOutput)(u),operator:d===r.huT.rangeInclusive?"GE":"GT",value:p[0]}),i.push({field:(0,n.getHtmlStringOutput)(u),operator:d===r.huT.rangeInclusive?"LE":"LT",value:p[1]});continue}d||(d=(0,r.OIR)(h)),i.push({field:(0,n.getHtmlStringOutput)(u),operator:(0,r.bBc)(d),value:s})}this.updateOptions({filteringOptions:i})}updatePagination(t,e,i){this._currentPagination={pageNumber:t,pageSize:e};let r={};if(this.options?.useCursor)if(i&&i instanceof Object){const{pageSize:t,newPage:e,...n}=i;r=n}else r={first:e};else r={first:e,offset:t>1?(t-1)*e:0};this.updateOptions({paginationOptions:r})}updateSorters(t,e){let i=[];const n=[];if(!t&&e){i=e,i.forEach((t=>t.direction=t.direction.toUpperCase()));const t=i.map((t=>{const e=this._columnDefinitions?.find((e=>e.id===t.columnId));return n.push({field:e?(e.queryFieldSorter||e.queryField||e.field)+"":t.columnId+"",direction:t.direction}),e?{columnId:t.columnId,sortAsc:t.direction.toUpperCase()===r.UEL.ASC}:null}));Array.isArray(t)&&this._grid&&this._grid.setSortColumns(t.filter((t=>t))||[])}else if(t&&!e&&Array.isArray(t)&&t.length>0)for(const e of t)if(e&&e.sortCol){i.push({columnId:e.sortCol.id+"",direction:e.sortAsc?r.UEL.ASC:r.UEL.DESC});const t=(e.sortCol.queryFieldSorter||e.sortCol.queryField||e.sortCol.field||"")+"";t&&n.push({field:t,direction:e.sortAsc?r.UEL.ASC:r.UEL.DESC})}this._currentSorters=i,this.updateOptions({sortingOptions:n})}trimDoubleQuotesOnEnumField(t,e,i){const r='s?((field:s*)?".*?")';let n=e.join(r+"|");n+=r;const s=new RegExp(n,"g");return t.replace(s,(t=>{let e=!0;return t.startsWith("field:")&&i&&(e=!1),e?t.replace(/"/g,""):t}))}castFilterToColumnFilters(t){const e="object"==typeof t?Object.keys(t).map((e=>t[e])):t;return Array.isArray(e)?e.map((t=>{const e={columnId:t.columnId||""};return t.operator&&(e.operator=t.operator),t.targetSelector&&(e.targetSelector=t.targetSelector),Array.isArray(t.searchTerms)&&(e.searchTerms=t.searchTerms),e})):[]}normalizeSearchValue(t,e){switch(t){case r.PUO.date:case r.PUO.string:case r.PUO.text:case r.PUO.readonly:"string"==typeof e&&(e=e.replace(/'/g,"''"));break;case r.PUO.integer:case r.PUO.number:case r.PUO.float:"string"==typeof e&&(""!==(e=(e=(e=(e=(e=e.replace(/\.\./g,".")).replace(/\.+$/g,"")).replace(/^\.+/g,"0.")).replace(/^-+\.+/g,"-0.")).replace(/(?!^-)[^\d.]/g,""))&&"-"!==e||(e="0"))}return e}}}}]);