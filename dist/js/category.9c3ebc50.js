(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["category"],{8453:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"resource"},[r("category-list")],1)},o=[],a=r("2b0e"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"resource-list"},[r("el-card",{staticClass:"box-card"},[r("el-button",{on:{click:e.handleAdd}},[e._v("添加")]),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.isLoading,expression:"isLoading"}],staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{data:e.resourceCategories}},[r("el-table-column",{attrs:{type:"index",label:"编号",width:"100"}}),r("el-table-column",{attrs:{prop:"name",label:"名称",width:"180"}}),r("el-table-column",{attrs:{prop:"createdTime",label:"创建时间"}}),r("el-table-column",{attrs:{prop:"sort",label:"排序"}}),r("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{size:"mini"},on:{click:function(r){return e.handleEdit(t.row)}}},[e._v("编辑")]),r("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(r){return e.handleDelete(t.row)}}},[e._v("删除")])]}}])})],1)],1),r("el-dialog",{attrs:{title:e.isEdit?"添加分类":"修改分类",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[r("el-form",{attrs:{model:e.form}},[r("el-form-item",{attrs:{label:"名称","label-width":"80px"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),r("el-form-item",{attrs:{label:"排序","label-width":"80px"}},[r("el-input",{attrs:{type:"number",autocomplete:"off"},model:{value:e.form.sort,callback:function(t){e.$set(e.form,"sort",t)},expression:"form.sort"}})],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("确 定")])],1)],1)],1)},s=[],c=(r("b0c0"),r("96cf"),r("1da1")),l=r("9d1c"),u=a["default"].extend({name:"ResourceList",data:function(){return{resourceCategories:[],isLoading:!0,dialogFormVisible:!1,isEdit:!1,form:{name:"",sort:""}}},created:function(){this.loadResourceCategories()},methods:{loadResourceCategories:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(l["b"])();case 2:r=t.sent,n=r.data,e.resourceCategories=n.data,e.isLoading=!1;case 6:case"end":return t.stop()}}),t)})))()},handleAdd:function(){this.isEdit=!0,this.dialogFormVisible=!0},handleEdit:function(e){this.form=Object.assign({},e),this.isEdit=!1,this.dialogFormVisible=!0},handleDelete:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$confirm("确认删除分类：".concat(e.name,"？"),"删除提示");case 2:return r.next=4,Object(l["a"])(e.id);case 4:t.$message.success("删除成功"),t.loadResourceCategories();case 6:case"end":return r.stop()}}),r)})))()},onSubmit:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(l["c"])(e.form);case 2:e.$message.success("操作成功"),e.dialogFormVisible=!1,e.loadResourceCategories();case 5:case"end":return t.stop()}}),t)})))()}}}),d=u,m=r("2877"),f=Object(m["a"])(d,i,s,!1,null,"3391e7eb",null),b=f.exports,g=a["default"].extend({name:"Category",components:{CategoryList:b}}),p=g,h=Object(m["a"])(p,n,o,!1,null,"3f901038",null);t["default"]=h.exports},"9d1c":function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return a})),r.d(t,"a",(function(){return i}));var n=r("b32d"),o=function(){return Object(n["a"])({method:"GET",url:"/boss/resource/category/getAll"})},a=function(e){return Object(n["a"])({method:"POST",url:"/boss/resource/category/saveOrderUpdate",data:e})},i=function(e){return Object(n["a"])({method:"DELETE",url:"/boss/resource/category/".concat(e)})}},b0c0:function(e,t,r){var n=r("83ab"),o=r("9bf2").f,a=Function.prototype,i=a.toString,s=/^\s*function ([^ (]*)/,c="name";n&&!(c in a)&&o(a,c,{configurable:!0,get:function(){try{return i.call(this).match(s)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=category.9c3ebc50.js.map