(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./node_modules/css-loader/dist/cjs.js?!./src/component/styles.css":function(module,exports,__webpack_require__){(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.i,"._1s6psVuumrmRpezKmQYsHc {\n  display: block;\n  max-width: 100%;\n  height: auto;\n  overflow: visible;\n}\n\n._1s6psVuumrmRpezKmQYsHc text {\n  fill: currentColor;\n}\n\n._1oBAVSOzCDZ2pqE8IGQavt {\n  stroke: rgba(0, 0, 0, 0.1);\n  stroke-width: 1px;\n  shape-rendering: geometricPrecision;\n}\n\n._56qQvN9ctyUxQiv6RDXY9 {\n  display: flex;\n}\n\n._1wUi_Be04GImJ64AoAHphQ {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  gap: 0.2em;\n}\n\n/*noinspection CssUnresolvedCustomProperty*/\n@keyframes _1DJJ8juCNZj1tf4neDcBjw {\n  0% {\n    fill: var(--react-activity-calendar-loading);\n  }\n  50% {\n    fill: var(--react-activity-calendar-loading-active);\n  }\n  100% {\n    fill: var(--react-activity-calendar-loading);\n  }\n}\n",""]),exports.locals={calendar:"_1s6psVuumrmRpezKmQYsHc",block:"_1oBAVSOzCDZ2pqE8IGQavt",footer:"_56qQvN9ctyUxQiv6RDXY9",legendColors:"_1wUi_Be04GImJ64AoAHphQ",loadingAnimation:"_1DJJ8juCNZj1tf4neDcBjw"},module.exports=exports},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$":function(module,exports,__webpack_require__){var map={"./component/ActivityCalendar.stories.tsx":"./src/component/ActivityCalendar.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$"},"./src/component/ActivityCalendar.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Loading",(function(){return Loading})),__webpack_require__.d(__webpack_exports__,"SpecificDateRange",(function(){return SpecificDateRange})),__webpack_require__.d(__webpack_exports__,"WithColor",(function(){return WithColor})),__webpack_require__.d(__webpack_exports__,"ExplicitTheme",(function(){return ExplicitTheme})),__webpack_require__.d(__webpack_exports__,"CustomizedLook",(function(){return CustomizedLook})),__webpack_require__.d(__webpack_exports__,"WithMondayAsWeekStart",(function(){return WithMondayAsWeekStart})),__webpack_require__.d(__webpack_exports__,"WithTooltips",(function(){return WithTooltips})),__webpack_require__.d(__webpack_exports__,"WithoutLabels",(function(){return WithoutLabels})),__webpack_require__.d(__webpack_exports__,"WithDayLabels",(function(){return WithDayLabels})),__webpack_require__.d(__webpack_exports__,"WithLocalizedLabels",(function(){return WithLocalizedLabels})),__webpack_require__.d(__webpack_exports__,"EventHandlers",(function(){return EventHandlers}));var react=__webpack_require__("./node_modules/react/index.js"),index_es=__webpack_require__("./node_modules/react-tooltip/dist/index.es.js"),eachDayOfInterval=__webpack_require__("./node_modules/date-fns/esm/eachDayOfInterval/index.js"),lastDayOfMonth=__webpack_require__("./node_modules/date-fns/esm/lastDayOfMonth/index.js"),formatISO=__webpack_require__("./node_modules/date-fns/esm/formatISO/index.js"),tinycolor=__webpack_require__("./node_modules/tinycolor2/tinycolor.js"),tinycolor_default=__webpack_require__.n(tinycolor),getYear=__webpack_require__("./node_modules/date-fns/esm/getYear/index.js"),parseISO=__webpack_require__("./node_modules/date-fns/esm/parseISO/index.js"),format=__webpack_require__("./node_modules/date-fns/esm/format/index.js"),styles=__webpack_require__("./src/component/styles.css"),styles_default=__webpack_require__.n(styles),getDay=__webpack_require__("./node_modules/date-fns/esm/getDay/index.js"),subWeeks=__webpack_require__("./node_modules/date-fns/esm/subWeeks/index.js"),nextDay=__webpack_require__("./node_modules/date-fns/esm/nextDay/index.js"),differenceInCalendarDays=__webpack_require__("./node_modules/date-fns/esm/differenceInCalendarDays/index.js"),getMonth=__webpack_require__("./node_modules/date-fns/esm/getMonth/index.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var NAMESPACE="react-activity-calendar",DEFAULT_THEME=createCalendarTheme("#042a33");function normalizeCalendarDays(days){var daysMap=days.reduce((function(map,day){return map.set(day.date,day),map}),new Map);return Object(eachDayOfInterval.a)({start:Object(parseISO.a)(days[0].date),end:Object(parseISO.a)(days[days.length-1].date)}).map((function(day){var date=Object(formatISO.a)(day,{representation:"date"});return daysMap.has(date)?daysMap.get(date):{date:date,count:0,level:0}}))}function getMonthLabels(weeks){var monthNames=arguments.length>1&&void 0!==arguments[1]?arguments[1]:DEFAULT_MONTH_LABELS;return weeks.reduce((function(labels,week,index){var firstWeekDay=week.find((function(day){return void 0!==day}));if(!firstWeekDay)throw new Error(`Unexpected error: Week is empty: [${week}]`);var month=monthNames[Object(getMonth.a)(Object(parseISO.a)(firstWeekDay.date))],prev=labels[labels.length-1];return 0===index||prev.text!==month?[].concat(_toConsumableArray(labels),[{x:index,y:0,text:month}]):labels}),[]).filter((function(label,index,labels){return 0!==index||labels[1]&&labels[1].x-label.x>2}))}function createCalendarTheme(baseColor){var emptyColor=arguments.length>1&&void 0!==arguments[1]?arguments[1]:tinycolor_default()("white").darken(8).toHslString(),base=tinycolor_default()(baseColor);return base.isValid()?{level4:base.setAlpha(.92).toHslString(),level3:base.setAlpha(.76).toHslString(),level2:base.setAlpha(.6).toHslString(),level1:base.setAlpha(.44).toHslString(),level0:emptyColor}:DEFAULT_THEME}function getClassName(name,styles){return styles?`${NAMESPACE}__${name} ${styles}`:`${NAMESPACE}__${name}`}var DEFAULT_MONTH_LABELS=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],DEFAULT_WEEKDAY_LABELS=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],DEFAULT_LABELS={months:DEFAULT_MONTH_LABELS,weekdays:DEFAULT_WEEKDAY_LABELS,totalCount:"{{count}} contributions in {{year}}",tooltip:"<strong>{{count}} contributions</strong> on {{date}}",legend:{less:"Less",more:"More"}},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ActivityCalendar=function(_ref){var _data$,data=_ref.data,_ref$blockMargin=_ref.blockMargin,blockMargin=void 0===_ref$blockMargin?4:_ref$blockMargin,_ref$blockRadius=_ref.blockRadius,blockRadius=void 0===_ref$blockRadius?2:_ref$blockRadius,_ref$blockSize=_ref.blockSize,blockSize=void 0===_ref$blockSize?12:_ref$blockSize,children=_ref.children,_ref$color=_ref.color,color=void 0===_ref$color?void 0:_ref$color,_ref$dateFormat=_ref.dateFormat,dateFormat=void 0===_ref$dateFormat?"MMM do, yyyy":_ref$dateFormat,_ref$eventHandlers=_ref.eventHandlers,eventHandlers=void 0===_ref$eventHandlers?{}:_ref$eventHandlers,_ref$fontSize=_ref.fontSize,fontSize=void 0===_ref$fontSize?14:_ref$fontSize,_ref$hideColorLegend=_ref.hideColorLegend,hideColorLegend=void 0!==_ref$hideColorLegend&&_ref$hideColorLegend,_ref$hideMonthLabels=_ref.hideMonthLabels,hideMonthLabels=void 0!==_ref$hideMonthLabels&&_ref$hideMonthLabels,_ref$hideTotalCount=_ref.hideTotalCount,hideTotalCount=void 0!==_ref$hideTotalCount&&_ref$hideTotalCount,labelsProp=_ref.labels,_ref$loading=_ref.loading,loading=void 0!==_ref$loading&&_ref$loading,_ref$showWeekdayLabel=_ref.showWeekdayLabels,showWeekdayLabels=void 0!==_ref$showWeekdayLabel&&_ref$showWeekdayLabel,_ref$style=_ref.style,style=void 0===_ref$style?{}:_ref$style,themeProp=_ref.theme,totalCountProp=_ref.totalCount,_ref$weekStart=_ref.weekStart,weekStart=void 0===_ref$weekStart?0:_ref$weekStart;if(loading&&(data=function generateEmptyData(){var year=(new Date).getFullYear();return Object(eachDayOfInterval.a)({start:new Date(year,0,1),end:new Date(year,11,31)}).map((function(date){return{date:Object(formatISO.a)(date,{representation:"date"}),count:0,level:0}}))}()),0===data.length)return null;var year=Object(getYear.a)(Object(parseISO.a)(null===(_data$=data[0])||void 0===_data$?void 0:_data$.date)),weeks=function groupByWeeks(days){var weekStart=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(0===days.length)return[];var normalizedDays=normalizeCalendarDays(days),firstDate=Object(parseISO.a)(normalizedDays[0].date),firstCalendarDate=Object(getDay.a)(firstDate)===weekStart?firstDate:Object(subWeeks.a)(Object(nextDay.a)(firstDate,weekStart),1),paddedDays=[].concat(_toConsumableArray(Array(Object(differenceInCalendarDays.a)(firstDate,firstCalendarDate)).fill(void 0)),normalizedDays);return Array(Math.ceil(paddedDays.length/7)).fill(void 0).map((function(_,calendarWeek){return paddedDays.slice(7*calendarWeek,7*calendarWeek+7)}))}(data,weekStart),totalCount="number"==typeof totalCountProp?totalCountProp:data.reduce((function(sum,day){return sum+day.count}),0),theme=function getTheme(theme,color){return theme?Object.assign({},DEFAULT_THEME,theme):color?createCalendarTheme(color):DEFAULT_THEME}(themeProp,color),labels=Object.assign({},DEFAULT_LABELS,labelsProp),textHeight=hideMonthLabels?0:fontSize+2*blockMargin;var _getDimensions=function getDimensions(){return{width:weeks.length*(blockSize+blockMargin)-blockMargin,height:textHeight+7*(blockSize+blockMargin)-blockMargin}}(),width=_getDimensions.width,height=_getDimensions.height,additionalStyles={maxWidth:width,[`--${NAMESPACE}-loading`]:theme.level0,[`--${NAMESPACE}-loading-active`]:tinycolor_default()(theme.level0).darken(8).toString()};return Object(jsx_runtime.jsxs)("article",{className:NAMESPACE,style:Object.assign({},style,additionalStyles),children:[Object(jsx_runtime.jsxs)("svg",{width:width,height:height,viewBox:`0 0 ${width} ${height}`,className:getClassName("calendar",styles_default.a.calendar),children:[!loading&&function renderLabels(){var style={fontSize:fontSize};return!showWeekdayLabels&&hideMonthLabels?null:Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[showWeekdayLabels&&Object(jsx_runtime.jsx)("g",{className:getClassName("legend-weekday"),style:style,children:weeks[0].map((function(day,index){if(index%2==0)return null;var dayIndex=(index+weekStart)%7;return Object(jsx_runtime.jsx)("text",{x:-2*blockMargin,y:textHeight+(fontSize/2+blockMargin)+(blockSize+blockMargin)*index,textAnchor:"end",children:labels.weekdays?labels.weekdays[dayIndex]:DEFAULT_WEEKDAY_LABELS[dayIndex]},index)}))}),!hideMonthLabels&&Object(jsx_runtime.jsx)("g",{className:getClassName("legend-month"),style:style,children:getMonthLabels(weeks,labels.months).map((function(_ref2,index,labels){var text=_ref2.text,x=_ref2.x;return 0===index&&labels[1]&&labels[1].x-x<=2?null:Object(jsx_runtime.jsx)("text",{x:(blockSize+blockMargin)*x,alignmentBaseline:"hanging",children:text},x)}))})]})}(),function renderBlocks(){return weeks.map((function(week,weekIndex){return week.map((function(day,dayIndex){if(!day)return null;var contribution,_labels$tooltip,date,style=loading?{animation:`${styles_default.a.loadingAnimation} 1.5s ease-in-out infinite`,animationDelay:20*weekIndex+20*dayIndex+"ms"}:void 0;return Object(react.createElement)("rect",Object.assign({},function getEventHandlers(data){return Object.keys(eventHandlers).reduce((function(handlers,key){return Object.assign({},handlers,{[key]:function(event){var _eventHandlers$key;return null===(_eventHandlers$key=eventHandlers[key])||void 0===_eventHandlers$key?void 0:_eventHandlers$key.call(eventHandlers,event)(data)}})}),{})}(day),{x:0,y:textHeight+(blockSize+blockMargin)*dayIndex,width:blockSize,height:blockSize,fill:theme[`level${day.level}`],rx:blockRadius,ry:blockRadius,className:styles_default.a.block,"data-date":day.date,"data-tip":children?(contribution=day,date=Object(format.a)(Object(parseISO.a)(contribution.date),dateFormat),(null!==(_labels$tooltip=labels.tooltip)&&void 0!==_labels$tooltip?_labels$tooltip:DEFAULT_LABELS.tooltip).replaceAll("{{count}}",String(contribution.count)).replaceAll("{{date}}",date)):void 0,key:day.date,style:style}))}))})).map((function(week,x){return Object(jsx_runtime.jsx)("g",{transform:`translate(${(blockSize+blockMargin)*x}, 0)`,children:week},x)}))}()]}),function renderFooter(){var _labels$legend$less,_labels$legend,_labels$legend$more,_labels$legend2;return hideTotalCount&&hideColorLegend?null:Object(jsx_runtime.jsxs)("footer",{className:getClassName("footer",styles_default.a.footer),style:{marginTop:2*blockMargin,fontSize:fontSize},children:[loading&&Object(jsx_runtime.jsx)("div",{children:" "}),!loading&&!hideTotalCount&&Object(jsx_runtime.jsx)("div",{className:getClassName("count"),children:labels.totalCount?labels.totalCount.replace("{{count}}",String(totalCount)).replace("{{year}}",String(year)):`${totalCount} contributions in ${year}`}),!loading&&!hideColorLegend&&Object(jsx_runtime.jsxs)("div",{className:getClassName("legend-colors",styles_default.a.legendColors),children:[Object(jsx_runtime.jsx)("span",{style:{marginRight:"0.4em"},children:null!==(_labels$legend$less=null==labels||null===(_labels$legend=labels.legend)||void 0===_labels$legend?void 0:_labels$legend.less)&&void 0!==_labels$legend$less?_labels$legend$less:"Less"}),Array(5).fill(void 0).map((function(_,index){return Object(jsx_runtime.jsx)("svg",{width:blockSize,height:blockSize,children:Object(jsx_runtime.jsx)("rect",{width:blockSize,height:blockSize,fill:theme[`level${index}`],rx:blockRadius,ry:blockRadius})},index)})),Object(jsx_runtime.jsx)("span",{style:{marginLeft:"0.4em"},children:null!==(_labels$legend$more=null==labels||null===(_labels$legend2=labels.legend)||void 0===_labels$legend2?void 0:_labels$legend2.more)&&void 0!==_labels$legend$more?_labels$legend$more:"More"})]})]})}(),children]})};ActivityCalendar.displayName="ActivityCalendar";var Skeleton=function(props){return Object(jsx_runtime.jsx)(ActivityCalendar,Object.assign({data:[]},props))};Skeleton.displayName="Skeleton",ActivityCalendar.__docgenInfo={description:"",methods:[],displayName:"ActivityCalendar",props:{blockMargin:{defaultValue:{value:"4",computed:!1},required:!1,tsType:{name:"number"},description:"Margin between blocks in pixels."},blockRadius:{defaultValue:{value:"2",computed:!1},required:!1,tsType:{name:"number"},description:"Border radius of blocks in pixels."},blockSize:{defaultValue:{value:"12",computed:!1},required:!1,tsType:{name:"number"},description:"Block size in pixels."},color:{defaultValue:{value:"undefined",computed:!0},required:!1,tsType:{name:"ColorInput"},description:"Base color to compute graph intensity hues (the darkest color). Any valid CSS color is accepted"},dateFormat:{defaultValue:{value:"'MMM do, yyyy'",computed:!1},required:!1,tsType:{name:"string"},description:"A date-fns/format compatible date string used in tooltips."},eventHandlers:{defaultValue:{value:"{}",computed:!1},required:!1,tsType:{name:"EventHandlerMap"},description:"Event handlers to register for the SVG `<rect>` elements that are used to render the calendar days. Handler signature: `event => data => void`"},fontSize:{defaultValue:{value:"14",computed:!1},required:!1,tsType:{name:"number"},description:"Font size for text in pixels."},hideColorLegend:{defaultValue:{value:"false",computed:!1},required:!1,tsType:{name:"boolean"},description:"Toggle to hide color legend below calendar."},hideMonthLabels:{defaultValue:{value:"false",computed:!1},required:!1,tsType:{name:"boolean"},description:"Toggle to hide month labels above calendar."},hideTotalCount:{defaultValue:{value:"false",computed:!1},required:!1,tsType:{name:"boolean"},description:"Toggle to hide total count below calendar."},loading:{defaultValue:{value:"false",computed:!1},required:!1,tsType:{name:"boolean"},description:"Toggle for loading state. `data` property will be ignored if set."},showWeekdayLabels:{defaultValue:{value:"false",computed:!1},required:!1,tsType:{name:"boolean"},description:"Toggle to show weekday labels left to the calendar."},style:{defaultValue:{value:"{}",computed:!1},required:!1,tsType:{name:"CSSProperties"},description:"Style object to pass to component container."},weekStart:{defaultValue:{value:"0",computed:!1},required:!1,tsType:{name:"WeekDay"},description:"Index of day to be used as start of week. 0 represents Sunday."},data:{required:!0,tsType:{name:"Array",elements:[{name:"Day"}],raw:"Array<Day>"},description:'List of calendar entries. Every `Day` object requires an ISO 8601 `date`\nproperty in the format `yyyy-MM-dd`, a `count` property with the amount\nof tracked data and finally a `level` property in the range `0 - 4` to\nspecify activity intensity.\n\nExample object:\n\n```json\n{\n  date: "2021-02-20",\n  count: 16,\n  level: 3\n}\n```'},children:{required:!1,tsType:{name:"ReactNode"},description:"Pass `<ReactTooltip html />` as child to show tooltips."},labels:{required:!1,tsType:{name:"Labels"},description:"Localization strings for all calendar labels.\n\n- `totalCount` supports the placeholders `{{count}}` and `{{year}}`.\n- `tooltip` supports the placeholders `{{count}}` and `{{date}}`."},theme:{required:!1,tsType:{name:"Theme"},description:"An object specifying all theme colors explicitly`."},totalCount:{required:!1,tsType:{name:"number"},description:"Overwrite the total activity count."}}};var component_ActivityCalendar=ActivityCalendar;Skeleton.__docgenInfo={description:"",methods:[],displayName:"Skeleton"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/component/ActivityCalendar.tsx"]={name:"Skeleton",docgenInfo:Skeleton.__docgenInfo,path:"src/component/ActivityCalendar.tsx"}),"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/component/ActivityCalendar.tsx"]={name:"ActivityCalendar",docgenInfo:ActivityCalendar.__docgenInfo,path:"src/component/ActivityCalendar.tsx"});var ActivityCalendar_stories_styles={code:{fontSize:"0.9rem"},p:{maxWidth:"68ch"}},Template=(__webpack_exports__.default={title:"Activity Calendar",component:component_ActivityCalendar,parameters:{controls:{sort:"requiredFirst"},layout:"centered"},argTypes:{data:{control:!1},blockMargin:{control:{type:"range",min:0,max:20}},blockRadius:{control:{type:"range",min:0,max:20}},blockSize:{control:{type:"range",min:4,max:100,step:2}},children:{control:!1},color:{control:"color"},fontSize:{control:{type:"range",min:6,max:32,step:2}},weekStart:{options:[0,1,2,3,4,5,6],control:{type:"select",labels:{0:"Sunday (0)",1:"Monday (1)",2:"Tuesday (2)",3:"Wednesday (3)",4:"Thursday (4)",5:"Friday (5)",6:"Saturday (6)"}}}}},function(args){return Object(jsx_runtime.jsx)(component_ActivityCalendar,Object.assign({},args))});Template.displayName="Template";var ActivityCalendar_stories_theme={level0:"#F0F0F0",level1:"#C4EDDE",level2:"#7AC7C4",level3:"#F73859",level4:"#384259"},ActivityCalendar_stories_labels={months:DEFAULT_MONTH_LABELS,weekdays:DEFAULT_WEEKDAY_LABELS,totalCount:"{{count}} contributions in {{year}}",tooltip:"<strong>{{count}} contributions</strong> on {{date}}",legend:{less:"Less",more:"More"}},Default=Template.bind({});Default.args={data:generateData(),labels:ActivityCalendar_stories_labels};var Loading=Template.bind({});Loading.args={loading:!0,data:generateData(),labels:ActivityCalendar_stories_labels};var SpecificDateRange=Template.bind({});SpecificDateRange.args={data:generateData(2,7),labels:ActivityCalendar_stories_labels};var WithColor=Template.bind({});WithColor.args={data:generateData(),color:"#0f6499",labels:ActivityCalendar_stories_labels};var ExplicitTheme=Template.bind({});ExplicitTheme.args={data:generateData(),theme:ActivityCalendar_stories_theme,labels:ActivityCalendar_stories_labels};var CustomizedLook=Template.bind({});CustomizedLook.args={data:generateData(),blockSize:14,blockRadius:7,blockMargin:5,fontSize:16,theme:ActivityCalendar_stories_theme,labels:ActivityCalendar_stories_labels};var WithMondayAsWeekStart=Template.bind({});WithMondayAsWeekStart.args={data:generateData(),weekStart:1,labels:ActivityCalendar_stories_labels};var WithTooltips=Template.bind({});WithTooltips.args={data:generateData(),children:Object(jsx_runtime.jsx)(index_es.a,{html:!0}),labels:ActivityCalendar_stories_labels};var WithoutLabels=Template.bind({});WithoutLabels.args={data:generateData(),hideMonthLabels:!0,hideColorLegend:!0,hideTotalCount:!0,labels:ActivityCalendar_stories_labels};var WithDayLabels=Template.bind({});WithDayLabels.args={data:generateData(),showWeekdayLabels:!0,labels:ActivityCalendar_stories_labels};var WithLocalizedLabels=function(args){return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)("h1",{children:"Localization"}),Object(jsx_runtime.jsx)("p",{children:"(Example in German)"}),Object(jsx_runtime.jsx)(component_ActivityCalendar,Object.assign({},args,{style:{margin:"2rem 0"}})),Object(jsx_runtime.jsx)("pre",{style:ActivityCalendar_stories_styles.code,children:"\n// Shape of `labels` property (default values).\n// All properties are optional.\n\nconst labels = {\n  months: [\n    'Jan',\n    'Feb',\n    'Mar',\n    'Apr',\n    'May',\n    'Jun',\n    'Jul',\n    'Aug',\n    'Sep',\n    'Oct',\n    'Nov',\n    'Dec',\n  ],\n  weekdays: [\n    'Sun', // Sunday first!\n    'Mon',\n    'Tue',\n    'Wed',\n    'Thu',\n    'Fri',\n    'Sat',\n  ],\n  totalCount: '{{count}} contributions in {{year}}',\n  legend: {\n    less: 'Less',\n    more: 'More',\n  },\n};\n"})]})}.bind({});WithLocalizedLabels.args={data:generateData(),showWeekdayLabels:!0,labels:{months:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],weekdays:["So","Mo","Di","Mi","Do","Fr","Sa"],totalCount:"{{count}} Beiträge in {{year}}",legend:{less:"Weniger",more:"Mehr"}}};var eventHandlerData=generateData(),EventHandlers=function(args){return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)("h1",{children:"Event Handlers"}),Object(jsx_runtime.jsxs)("p",{style:ActivityCalendar_stories_styles.p,children:["You can register event handlers for the SVG ",Object(jsx_runtime.jsx)("code",{style:ActivityCalendar_stories_styles.code,children:"<rect/>"})," ","elements that are used to render the calendar days. This way you can control the behaviour on click, hover, etc."]}),Object(jsx_runtime.jsx)("p",{style:ActivityCalendar_stories_styles.p,children:"All event listeners have the following signature, so you are able to use the shown data inside the handler:"}),Object(jsx_runtime.jsx)("p",{style:ActivityCalendar_stories_styles.p,children:Object(jsx_runtime.jsx)("code",{style:ActivityCalendar_stories_styles.code,children:"(event: React.SyntheticEvent) => (data: Day) => void"})}),Object(jsx_runtime.jsx)("p",{style:ActivityCalendar_stories_styles.p,children:"Click on any block below to see it in action:"}),Object(jsx_runtime.jsx)(component_ActivityCalendar,Object.assign({},args,{style:{margin:"2rem 0"}})),Object(jsx_runtime.jsx)("pre",{style:ActivityCalendar_stories_styles.code,children:"\n<ActivityCalendar \n  data={data}  \n  eventHandlers: {\n    onClick: event => data => {\n      console.log({ event, data });\n      alert(JSON.stringify(data, null, 4));\n    },\n    onMouseEnter: event => data => console.log('mouseEnter'),\n  }\n/>\n"})]})}.bind({});function generateData(){var monthStart=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,monthEnd=arguments.length>1&&void 0!==arguments[1]?arguments[1]:11,MAX=10,LEVELS=5,yearStart=(new Date).getFullYear(),yearEnd=monthEnd<monthStart?yearStart+1:yearStart,days=Object(eachDayOfInterval.a)({start:new Date(yearStart,monthStart,1),end:Object(lastDayOfMonth.a)(new Date(yearEnd,monthEnd,1))});return days.map((function(date){var count=Math.max(0,Math.round(Math.random()*MAX-Math.random()*(.8*MAX))),level=Math.ceil(count/(MAX/(LEVELS-1)));return{date:Object(formatISO.a)(date,{representation:"date"}),count:count,level:level}}))}EventHandlers.args={data:eventHandlerData,eventHandlers:{onClick:function(event){return function(data){console.log({event:event,data:data}),alert(JSON.stringify(data,null,4))}}}},Default.parameters=Object.assign({storySource:{source:"args => <ActivityCalendar {...args} />"}},Default.parameters),Loading.parameters=Object.assign({storySource:{source:"args => <ActivityCalendar {...args} />"}},Loading.parameters),SpecificDateRange.parameters=Object.assign({storySource:{source:"args => <ActivityCalendar {...args} />"}},SpecificDateRange.parameters),WithColor.parameters=Object.assign({storySource:{source:"args => <ActivityCalendar {...args} />"}},WithColor.parameters),ExplicitTheme.parameters=Object.assign({storySource:{source:"args => <ActivityCalendar {...args} />"}},ExplicitTheme.parameters),CustomizedLook.parameters=Object.assign({storySource:{source:"args => <ActivityCalendar {...args} />"}},CustomizedLook.parameters),WithMondayAsWeekStart.parameters=Object.assign({storySource:{source:"args => <ActivityCalendar {...args} />"}},WithMondayAsWeekStart.parameters),WithTooltips.parameters=Object.assign({storySource:{source:"args => <ActivityCalendar {...args} />"}},WithTooltips.parameters),WithoutLabels.parameters=Object.assign({storySource:{source:"args => <ActivityCalendar {...args} />"}},WithoutLabels.parameters),WithDayLabels.parameters=Object.assign({storySource:{source:"args => <ActivityCalendar {...args} />"}},WithDayLabels.parameters),WithLocalizedLabels.parameters=Object.assign({storySource:{source:"args => (\n  <>\n    <h1>Localization</h1>\n    <p>(Example in German)</p>\n    <ActivityCalendar {...args} style={{ margin: '2rem 0' }} />\n    <pre style={styles.code}>\n      {`\n// Shape of \\`labels\\` property (default values).\n// All properties are optional.\n\nconst labels = {\n  months: [\n    'Jan',\n    'Feb',\n    'Mar',\n    'Apr',\n    'May',\n    'Jun',\n    'Jul',\n    'Aug',\n    'Sep',\n    'Oct',\n    'Nov',\n    'Dec',\n  ],\n  weekdays: [\n    'Sun', // Sunday first!\n    'Mon',\n    'Tue',\n    'Wed',\n    'Thu',\n    'Fri',\n    'Sat',\n  ],\n  totalCount: '{{count}} contributions in {{year}}',\n  legend: {\n    less: 'Less',\n    more: 'More',\n  },\n};\n`}\n    </pre>\n  </>\n)"}},WithLocalizedLabels.parameters),EventHandlers.parameters=Object.assign({storySource:{source:"args => (\n  <>\n    <h1>Event Handlers</h1>\n    <p style={styles.p}>\n      You can register event handlers for the SVG <code style={styles.code}>&lt;rect/&gt;</code>{' '}\n      elements that are used to render the calendar days. This way you can control the behaviour on\n      click, hover, etc.\n    </p>\n    <p style={styles.p}>\n      All event listeners have the following signature, so you are able to use the shown data inside\n      the handler:\n    </p>\n    <p style={styles.p}>\n      <code style={styles.code}>(event: React.SyntheticEvent) =&gt; (data: Day) =&gt; void</code>\n    </p>\n    <p style={styles.p}>Click on any block below to see it in action:</p>\n    <ActivityCalendar {...args} style={{ margin: '2rem 0' }} />\n    <pre style={styles.code}>\n      {`\n<ActivityCalendar \n  data={data}  \n  eventHandlers: {\n    onClick: event => data => {\n      console.log({ event, data });\n      alert(JSON.stringify(data, null, 4));\n    },\n    onMouseEnter: event => data => console.log('mouseEnter'),\n  }\n/>\n`}\n    </pre>\n  </>\n)"}},EventHandlers.parameters)},"./src/component/styles.css":function(module,exports,__webpack_require__){var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js?!./src/component/styles.css");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,5,6]]]);