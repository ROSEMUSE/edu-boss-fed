(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["course-section"],{"1dde":function(e,t,n){var o=n("d039"),r=n("b622"),s=n("2d00"),a=r("species");e.exports=function(e){return s>=51||!o((function(){var t=[],n=t.constructor={};return n[a]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"3a4c":function(e,t,n){},"3ca3":function(e,t,n){"use strict";var o=n("6547").charAt,r=n("69f3"),s=n("7dd0"),a="String Iterator",i=r.set,c=r.getterFor(a);s(String,"String",(function(e){i(this,{type:a,string:String(e),index:0})}),(function(){var e,t=c(this),n=t.string,r=t.index;return r>=n.length?{value:void 0,done:!0}:(e=o(n,r),t.index+=e.length,{value:e,done:!1})}))},4614:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"course-section"},[n("el-card",[n("div",{staticClass:"card-header",attrs:{slot:"header"},slot:"header"},[e._v(" "+e._s(e.course.courseName)+" "),n("el-button",{attrs:{type:"primary"},on:{click:e.handleShowAddSection}},[e._v("添加阶段")])],1),n("el-tree",{directives:[{name:"loading",rawName:"v-loading",value:e.isLoading,expression:"isLoading"}],attrs:{data:e.sections,props:e.defaultProps,draggable:"","allow-drop":e.handleAllowDrop},on:{"node-drop":e.handleSort},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.node,r=t.data;return n("div",{staticClass:"inner"},[n("span",[e._v(e._s(o.label))]),r.sectionName?n("span",{staticClass:"actions"},[n("el-button",{on:{click:function(t){return t.stopPropagation(),e.handleEditSectionShow(r)}}},[e._v("编辑")]),n("el-button",{attrs:{type:"primary"},on:{click:function(t){return t.stopPropagation(),e.handleShowAddLesson(r)}}},[e._v("添加课时")]),n("el-select",{staticClass:"select-status",attrs:{placeholder:"请选择"},on:{change:function(t){return e.handleSectionStatusChange(r)}},model:{value:r.status,callback:function(t){e.$set(r,"status",t)},expression:"data.status"}},[n("el-option",{attrs:{label:"已隐藏",value:0}}),n("el-option",{attrs:{label:"待更新",value:1}}),n("el-option",{attrs:{label:"已更新",value:2}})],1)],1):n("span",{staticClass:"actions"},[n("el-button",{on:{click:function(t){return e.handleShowEditLesson(r,o.parent.data)}}},[e._v("编辑")]),n("el-button",{attrs:{type:"success"},on:{click:function(t){return e.$router.push({name:"course-section",query:{courseId:e.courseInfo.courseId,courseName:e.course.courseName,sectionName:o.parent.sectionName,theme:r.theme,lessonId:o.parent.id}})}}},[e._v("上传视频")]),n("el-select",{staticClass:"select-status",attrs:{placeholder:"请选择"},on:{change:function(t){return e.handleLessonStatusChange(r)}},model:{value:r.status,callback:function(t){e.$set(r,"status",t)},expression:"data.status"}},[n("el-option",{attrs:{label:"已隐藏",value:0}}),n("el-option",{attrs:{label:"待更新",value:1}}),n("el-option",{attrs:{label:"已更新",value:2}})],1)],1)])}}])})],1),n("el-dialog",{attrs:{title:"添加课程阶段",visible:e.isAddSectionShow},on:{"update:visible":function(t){e.isAddSectionShow=t}}},[n("el-form",{ref:"section-form",attrs:{model:e.section,"label-width":"70px"}},[n("el-form-item",{attrs:{label:"课程名称"}},[n("el-input",{attrs:{value:e.course.courseName,autocomplete:"off",disabled:""}})],1),n("el-form-item",{attrs:{label:"章节名称",prop:"sectionName"}},[n("el-input",{attrs:{autocomplete:"off"},model:{value:e.section.sectionName,callback:function(t){e.$set(e.section,"sectionName",t)},expression:"section.sectionName"}})],1),n("el-form-item",{attrs:{label:"章节描述",prop:"description"}},[n("el-input",{attrs:{type:"textarea",autocomplete:"off"},model:{value:e.section.description,callback:function(t){e.$set(e.section,"description",t)},expression:"section.description"}})],1),n("el-form-item",{attrs:{label:"章节排序",prop:"orderNum"}},[n("el-input-number",{model:{value:e.section.orderNum,callback:function(t){e.$set(e.section,"orderNum",t)},expression:"section.orderNum"}})],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.isAddSectionShow=!1}}},[e._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:e.handleAddSection}},[e._v("确 定")])],1)],1),n("el-dialog",{attrs:{title:"添加课时",visible:e.isAddLessonShow},on:{"update:visible":function(t){e.isAddLessonShow=t}}},[n("el-form",{ref:"lesson-form",attrs:{model:e.lesson,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"课程名称"}},[n("el-input",{attrs:{value:e.course.courseName,autocomplete:"off",disabled:""}})],1),n("el-form-item",{attrs:{label:"章节名称",prop:"sectionName"}},[n("el-input",{attrs:{value:e.lesson.sectionName,disabled:"",autocomplete:"off"}})],1),n("el-form-item",{attrs:{label:"课时名称",prop:"sectionName"}},[n("el-input",{attrs:{autocomplete:"off"},model:{value:e.lesson.theme,callback:function(t){e.$set(e.lesson,"theme",t)},expression:"lesson.theme"}})],1),n("el-form-item",{attrs:{label:"时长",prop:"description"}},[n("el-input",{attrs:{type:"number",autocomplete:"off"},model:{value:e.lesson.duration,callback:function(t){e.$set(e.lesson,"duration",e._n(t))},expression:"lesson.duration"}},[n("template",{slot:"append"},[e._v("分钟")])],2)],1),n("el-form-item",{attrs:{label:"是否开放试听",prop:"description"}},[n("el-switch",{model:{value:e.lesson.isFree,callback:function(t){e.$set(e.lesson,"isFree",t)},expression:"lesson.isFree"}})],1),n("el-form-item",{attrs:{label:"课时排序",prop:"description"}},[n("el-input-number",{model:{value:e.lesson.orderNum,callback:function(t){e.$set(e.lesson,"orderNum",t)},expression:"lesson.orderNum"}})],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.isAddLessonShow=!1}}},[e._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:e.handleAddLesson}},[e._v("确 定")])],1)],1)],1)},r=[],s=(n("d81d"),n("a9e3"),n("d3b7"),n("3ca3"),n("ddb0"),n("96cf"),n("1da1")),a=n("2b0e"),i=n("b32d"),c=function(e){return Object(i["a"])({method:"GET",url:"/boss/course/section/getSectionAndLesson",params:{courseId:e}})},u=function(e){return Object(i["a"])({method:"POST",url:"/boss/course/section/saveOrUpdateSection",data:e})},l=function(e){return Object(i["a"])({method:"GET",url:"/boss/course/section/getBySectionId",params:{sectionId:e}})},d=n("6fd8"),f=function(e){return Object(i["a"])({method:"POST",url:"/boss/course/lesson/saveOrUpdate",data:e})},p=a["default"].extend({name:"CourseSection",props:{courseId:{type:[String,Number],required:!0}},data:function(){var e={children:"lessonDTOS",label:function(e){return e.sectionName||e.theme}},t={courseId:this.courseId,sectionName:"",description:"",orderNum:0,status:0},n={courseId:this.courseId,sectionId:void 0,sectionName:"",theme:"",duration:0,isFree:!1,orderNum:0,status:0};return{course:{},sections:[],defaultProps:e,isAddSectionShow:!1,section:t,isAddLessonShow:!1,lesson:n,isLoading:!1}},created:function(){this.loadSections(),this.loadCourse()},methods:{loadCourse:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(d["b"])(e.courseId);case 2:n=t.sent,o=n.data,e.course=o.data;case 5:case"end":return t.stop()}}),t)})))()},loadSections:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c(e.courseId);case 2:n=t.sent,o=n.data,e.sections=o.data;case 5:case"end":return t.stop()}}),t)})))()},handleShowAddSection:function(){this.section={courseId:this.courseId,sectionName:"",description:"",orderNum:0,status:0},this.isAddSectionShow=!0},handleAddSection:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u(e.section);case 2:n=t.sent,n.data,e.loadSections(),e.isAddSectionShow=!1,e.$refs["section-form"].resetFields(),e.$message.success("操作成功");case 8:case"end":return t.stop()}}),t)})))()},handleEditSectionShow:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var o,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,l(e.id);case 2:o=n.sent,r=o.data,t.section=r.data,t.isAddSectionShow=!0;case 6:case"end":return n.stop()}}),n)})))()},handleSectionStatusChange:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,u(e);case 2:t.$message.success("操作成功");case 3:case"end":return n.stop()}}),n)})))()},handleLessonStatusChange:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,f(e);case 2:t.$message.success("操作成功");case 3:case"end":return n.stop()}}),n)})))()},handleShowAddLesson:function(e){console.log(e),this.lesson={sectionName:e.sectionName,sectionId:e.id,courseId:this.courseId,theme:"",duration:0,isFree:!1,orderNum:0,status:0},this.isAddLessonShow=!0},handleAddLesson:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,f(e.lesson);case 2:e.$message.success("操作成功"),e.loadSections(),e.isAddLessonShow=!1;case 5:case"end":return t.stop()}}),t)})))()},handleShowEditLesson:function(e,t){this.lesson=e,this.lesson.sectionName=t.sectionName,this.isAddLessonShow=!0},handleAllowDrop:function(e,t,n){return e.data.sectionId===t.data.sectionId&&"inner"!==n},handleSort:function(e,t,n,o){var r=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r.isLoading=!0,n.prev=1,n.next=4,Promise.all(t.parent.childNodes.map((function(t,n){return e.data.lessonDTOS?u({id:t.data.id,orderNum:n+1}):f({id:t.data.id,orderNum:n+1})})));case 4:r.$message.success("排序成功"),n.next=11;break;case 7:n.prev=7,n.t0=n["catch"](1),console.log(n.t0),r.$message.error("排序失败");case 11:r.isLoading=!1;case 12:case"end":return n.stop()}}),n,null,[[1,7]])})))()}}}),m=p,h=(n("634b"),n("2877")),b=Object(h["a"])(m,o,r,!1,null,"a04781de",null);t["default"]=b.exports},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var o=n("1d80"),r=n("5899"),s="["+r+"]",a=RegExp("^"+s+s+"*"),i=RegExp(s+s+"*$"),c=function(e){return function(t){var n=String(o(t));return 1&e&&(n=n.replace(a,"")),2&e&&(n=n.replace(i,"")),n}};e.exports={start:c(1),end:c(2),trim:c(3)}},"634b":function(e,t,n){"use strict";n("3a4c")},6547:function(e,t,n){var o=n("a691"),r=n("1d80"),s=function(e){return function(t,n){var s,a,i=String(r(t)),c=o(n),u=i.length;return c<0||c>=u?e?"":void 0:(s=i.charCodeAt(c),s<55296||s>56319||c+1===u||(a=i.charCodeAt(c+1))<56320||a>57343?e?i.charAt(c):s:e?i.slice(c,c+2):a-56320+(s-55296<<10)+65536)}};e.exports={codeAt:s(!1),charAt:s(!0)}},"6fd8":function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return s})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return i})),n.d(t,"b",(function(){return c}));var o=n("b32d"),r=function(e){return Object(o["a"])({method:"POST",url:"/boss/course/getQueryCourses",data:e})},s=function(e){return Object(o["a"])({method:"GET",url:"/boss/course/changeState",params:e})},a=function(e){return Object(o["a"])({method:"POST",url:"/boss/course/saveOrUpdateCourse",data:e})},i=function(e,t){return Object(o["a"])({method:"POST",url:"/boss/course/upload",data:e,onUploadProgress:t})},c=function(e){return Object(o["a"])({method:"GET",url:"/boss/course/getCourseById",params:{courseId:e}})}},7156:function(e,t,n){var o=n("861d"),r=n("d2bb");e.exports=function(e,t,n){var s,a;return r&&"function"==typeof(s=t.constructor)&&s!==n&&o(a=s.prototype)&&a!==n.prototype&&r(e,a),e}},a9e3:function(e,t,n){"use strict";var o=n("83ab"),r=n("da84"),s=n("94ca"),a=n("6eeb"),i=n("5135"),c=n("c6b6"),u=n("7156"),l=n("c04e"),d=n("d039"),f=n("7c73"),p=n("241c").f,m=n("06cf").f,h=n("9bf2").f,b=n("58a8").trim,v="Number",g=r[v],S=g.prototype,w=c(f(S))==v,N=function(e){var t,n,o,r,s,a,i,c,u=l(e,!1);if("string"==typeof u&&u.length>2)if(u=b(u),t=u.charCodeAt(0),43===t||45===t){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===t){switch(u.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+u}for(s=u.slice(2),a=s.length,i=0;i<a;i++)if(c=s.charCodeAt(i),c<48||c>r)return NaN;return parseInt(s,o)}return+u};if(s(v,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var I,x=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof x&&(w?d((function(){S.valueOf.call(n)})):c(n)!=v)?u(new g(N(t)),n,x):N(t)},A=o?p(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),k=0;A.length>k;k++)i(g,I=A[k])&&!i(x,I)&&h(x,I,m(g,I));x.prototype=S,S.constructor=x,a(r,v,x)}},d81d:function(e,t,n){"use strict";var o=n("23e7"),r=n("b727").map,s=n("1dde"),a=n("ae40"),i=s("map"),c=a("map");o({target:"Array",proto:!0,forced:!i||!c},{map:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},ddb0:function(e,t,n){var o=n("da84"),r=n("fdbc"),s=n("e260"),a=n("9112"),i=n("b622"),c=i("iterator"),u=i("toStringTag"),l=s.values;for(var d in r){var f=o[d],p=f&&f.prototype;if(p){if(p[c]!==l)try{a(p,c,l)}catch(h){p[c]=l}if(p[u]||a(p,u,d),r[d])for(var m in s)if(p[m]!==s[m])try{a(p,m,s[m])}catch(h){p[m]=s[m]}}}}}]);
//# sourceMappingURL=course-section.a29e8508.js.map