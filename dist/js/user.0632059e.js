(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["user"],{"1dde":function(e,t,r){var a=r("d039"),n=r("b622"),l=r("2d00"),o=n("species");e.exports=function(e){return l>=51||!a((function(){var t=[],r=t.constructor={};return r[o]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},4970:function(e,t,r){"use strict";r.d(t,"f",(function(){return n})),r.d(t,"c",(function(){return l})),r.d(t,"b",(function(){return o})),r.d(t,"e",(function(){return s})),r.d(t,"d",(function(){return i})),r.d(t,"a",(function(){return c})),r.d(t,"g",(function(){return u}));var a=r("b32d"),n=function(e){return Object(a["a"])({method:"POST",url:"/boss/role/getRolePages",data:e})},l=function(e){return Object(a["a"])({method:"DELETE",url:"/boss/role/".concat(e)})},o=function(e){return Object(a["a"])({method:"POST",url:"/boss/role/saveOrUpdate",data:e})},s=function(e){return Object(a["a"])({method:"GET",url:"/boss/role/".concat(e)})},i=function(){return Object(a["a"])({method:"GET",url:"/boss/role/all"})},c=function(e){return Object(a["a"])({method:"POST",url:"/boss/role/allocateUserRoles",data:e})},u=function(e){return Object(a["a"])({method:"GET",url:"/boss/role/user/".concat(e)})}},d81d:function(e,t,r){"use strict";var a=r("23e7"),n=r("b727").map,l=r("1dde"),o=r("ae40"),s=l("map"),i=o("map");a({target:"Array",proto:!0,forced:!s||!i},{map:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},e382:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"user"},[r("user-list")],1)},n=[],l=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-card",[r("div",{attrs:{slot:"header"},slot:"header"},[r("el-form",{ref:"filter-form",attrs:{model:e.filterParams}},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:10}},[r("el-form-item",{attrs:{label:"手机号",prop:"phone","label-width":"100px"}},[r("el-input",{model:{value:e.filterParams.phone,callback:function(t){e.$set(e.filterParams,"phone",t)},expression:"filterParams.phone"}})],1)],1),r("el-col",{attrs:{span:10}},[r("el-form-item",{attrs:{label:"注册时间",prop:"rangeDate","label-width":"100px"}},[r("el-date-picker",{attrs:{type:"datetimerange","range-separator":"至","start-placeholder":"开始时间","end-placeholder":"结束时间","value-format":"yyyy-MM-dd"},model:{value:e.filterParams.rangeDate,callback:function(t){e.$set(e.filterParams,"rangeDate",t)},expression:"filterParams.rangeDate"}})],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{"label-width":"100px"}},[r("el-button",{attrs:{disabled:e.loading},on:{click:e.handleReset}},[e._v("重置")]),r("el-button",{attrs:{type:"primary",disabled:e.loading},on:{click:e.handleQuery}},[e._v("查询")])],1)],1)],1)],1)],1),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.users}},[r("el-table-column",{attrs:{prop:"id",label:"用户ID"}}),r("el-table-column",{attrs:{prop:"name",label:"头像",width:"80"},scopedSlots:e._u([{key:"default",fn:function(e){return[r("img",{attrs:{width:"30px",src:e.row.portrait||"https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"}})]}}])}),r("el-table-column",{attrs:{prop:"name",label:"用户名"}}),r("el-table-column",{attrs:{prop:"phone",label:"手机号"}}),r("el-table-column",{attrs:{prop:"createTime",label:"注册时间"}}),r("el-table-column",{attrs:{prop:"address",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text"},on:{click:function(r){return e.handleSelectRole(t.row)}}},[e._v("分配角色")])]}}])})],1),r("el-dialog",{attrs:{title:"分配角色",visible:e.dialogVisible,width:"50%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("el-select",{attrs:{multiple:"",placeholder:"请选择"},model:{value:e.roleIdList,callback:function(t){e.roleIdList=t},expression:"roleIdList"}},e._l(e.roles,(function(e){return r("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.handleAllocRole}},[e._v("确 定")])],1)],1)],1)},s=[],i=(r("d81d"),r("96cf"),r("1da1")),c=r("06a0"),u=r("4970"),d=l["default"].extend({name:"UserList",data:function(){return{users:[],filterParams:{currentPage:1,pageSize:100,phone:"",startCreateTime:"",endCreateTime:"",rangeDate:[]},loading:!0,dialogVisible:!1,roles:[],roleIdList:[],currentUser:null}},created:function(){this.loadUsers()},methods:{loadUsers:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,r=e.filterParams.rangeDate,r&&r.length?(e.filterParams.startCreateTime=r[0],e.filterParams.endCreateTime=r[1]):(e.filterParams.startCreateTime="",e.filterParams.endCreateTime=""),t.next=5,Object(c["c"])(e.filterParams);case 5:a=t.sent,n=a.data,e.users=n.data.records,e.loading=!1;case 9:case"end":return t.stop()}}),t)})))()},handleForbidUser:function(e){return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(c["a"])(e.id);case 2:r=t.sent,a=r.data,console.log(a);case 5:case"end":return t.stop()}}),t)})))()},handleQuery:function(){this.filterParams.currentPage=1,this.loadUsers()},handleReset:function(){this.$refs["filter-form"].resetFields(),this.loadUsers()},handleSelectRole:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n,l,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.currentUser=e,r.next=3,Object(u["d"])();case 3:return a=r.sent,n=a.data,t.roles=n.data,r.next=8,Object(u["g"])(t.currentUser.id);case 8:l=r.sent,o=l.data.data,t.roleIdList=o.map((function(e){return e.id})),t.dialogVisible=!0;case 12:case"end":return r.stop()}}),r)})))()},handleAllocRole:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(u["a"])({userId:e.currentUser.id,roleIdList:e.roleIdList});case 2:r=t.sent,r.data,e.$message.success("操作成功"),e.dialogVisible=!1;case 6:case"end":return t.stop()}}),t)})))()}}}),f=d,m=r("2877"),p=Object(m["a"])(f,o,s,!1,null,"92bb65ce",null),b=p.exports,h=l["default"].extend({name:"UserIndex",components:{UserList:b}}),g=h,v=Object(m["a"])(g,a,n,!1,null,"094de37a",null);t["default"]=v.exports}}]);
//# sourceMappingURL=user.0632059e.js.map