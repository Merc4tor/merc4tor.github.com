(function(){"use strict";var t={9430:function(t,e,n){var a=n(9242),o=n(3396);const s={class:"container"};function r(t,e,n,a,r,i){const d=(0,o.up)("aHeader"),l=(0,o.up)("router-view"),c=(0,o.up)("aFooter");return(0,o.wg)(),(0,o.iD)("div",s,[(0,o.Wm)(d,{onToggleAddTask:i.toggleAddTask,title:"Hello World",showAddTask:r.showAddTask},null,8,["onToggleAddTask","showAddTask"]),(0,o.Wm)(l,{showAddTask:r.showAddTask},null,8,["showAddTask"]),(0,o.Wm)(c)])}var i=n(7139);function d(t,e,n,a,s,r){const d=(0,o.up)("router-link"),l=(0,o.up)("aButton");return(0,o.wg)(),(0,o.iD)("header",null,[(0,o.Wm)(d,{style:{"text-decoration":"none",color:"inherit"},to:"/"},{default:(0,o.w5)((()=>[(0,o._)("h1",null,(0,i.zw)(n.title),1)])),_:1}),(0,o.Wm)(l,{onBtnClick:e[0]||(e[0]=e=>t.$emit("toggle-add-task")),text:n.showAddTask?"Close":"addTask",color:n.showAddTask?"red":"green"},null,8,["text","color"])])}function l(t,e,n,a,s,r){return(0,o.wg)(),(0,o.iD)("button",{onClick:e[0]||(e[0]=t=>r.onClick()),style:(0,i.j5)({background:n.color}),class:"btn"},(0,i.zw)(n.text),5)}var c={name:"aButton",props:{text:String,color:String},methods:{onClick(){this.$emit("btn-click")}}},u=n(89);const k=(0,u.Z)(c,[["render",l]]);var m=k,p={name:"aHeader",props:{title:String,showAddTask:Boolean},components:{aButton:m},emits:["toggle-add-task"]};const h=(0,u.Z)(p,[["render",d],["__scopeId","data-v-d508d0dc"]]);var f=h;const g=t=>((0,o.dD)("data-v-07d5689a"),t=t(),(0,o.Cn)(),t),T=g((()=>(0,o._)("p",null,"Copyright © 2022",-1))),w=(0,o.Uk)("About");function v(t,e,n,a,s,r){const i=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("footer",null,[T,(0,o.Wm)(i,{to:"/about"},{default:(0,o.w5)((()=>[w])),_:1})])}var y={};const b=(0,u.Z)(y,[["render",v],["__scopeId","data-v-07d5689a"]]);var _=b,A={name:"App",components:{aHeader:f,aFooter:_},methods:{toggleAddTask(){this.showAddTask=!this.showAddTask}},data(){return{showAddTask:!1}}};const x=(0,u.Z)(A,[["render",r]]);var D=x,O=n(678);function j(t,e,n,a,s,r){return(0,o.wg)(),(0,o.iD)("h1",null,"About")}var C={name:"aAbout"};const S=(0,u.Z)(C,[["render",j]]);var $=S;function W(t,e,n,a,s,r){const i=(0,o.up)("addTask"),d=(0,o.up)("aTasks");return(0,o.wg)(),(0,o.iD)(o.HY,null,[n.showAddTask?((0,o.wg)(),(0,o.j4)(i,{key:0,onAddTask:r.addTask},null,8,["onAddTask"])):(0,o.kq)("",!0),(0,o.Wm)(d,{onToggleReminder:r.toggleReminder,onDeleteTask:r.deleteTask,tasks:s.tasks},null,8,["onToggleReminder","onDeleteTask","tasks"])],64)}function Z(t,e,n,a,s,r){const i=(0,o.up)("aTask");return(0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.tasks,(e=>((0,o.wg)(),(0,o.iD)("div",{key:e.id},[(0,o.Wm)(i,{onToggleReminder:n=>t.$emit("toggle-reminder",e.id),onDeleteTask:n=>t.$emit("delete-task",e.id),task:e},null,8,["onToggleReminder","onDeleteTask","task"])])))),128)}function H(t,e,n,a,s,r){return(0,o.wg)(),(0,o.iD)("div",{onDblclick:e[1]||(e[1]=e=>t.$emit("toggle-reminder",n.task.id)),class:(0,i.C_)([n.task.reminder?"reminder":"","task"])},[(0,o._)("h3",null,[(0,o.Uk)((0,i.zw)(n.task.text)+" ",1),(0,o._)("i",{onClick:e[0]||(e[0]=e=>t.$emit("delete-task",n.task.id)),class:"fas fa-times"})]),(0,o._)("p",null,(0,i.zw)(n.task.text),1),(0,o._)("p",null,(0,i.zw)(n.task.day),1)],34)}var R={name:"aTask",props:{task:Object}};const B=(0,u.Z)(R,[["render",H],["__scopeId","data-v-15face8c"]]);var P=B,U={name:"aTasks",props:{tasks:Array},components:{aTask:P},emits:["delete-task","toggle-reminder"]};const z=(0,u.Z)(U,[["render",Z]]);var E=z;const I=t=>((0,o.dD)("data-v-bdac53f4"),t=t(),(0,o.Cn)(),t),F={class:"form-control"},V=I((()=>(0,o._)("label",null,"Task",-1))),J={class:"form-control"},N=I((()=>(0,o._)("label",null,"Day & Time",-1))),Y={class:"form-control form-control-check"},q=I((()=>(0,o._)("label",null,"Set Reminder",-1))),K=I((()=>(0,o._)("input",{type:"submit",value:"Save Task",class:"btn btn-block"},null,-1)));function L(t,e,n,s,r,i){return(0,o.wg)(),(0,o.iD)("form",{onSubmit:e[3]||(e[3]=(...t)=>i.onSubmit&&i.onSubmit(...t)),class:"add-form"},[(0,o._)("div",F,[V,(0,o.wy)((0,o._)("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>r.text=t),name:"text",placeholder:"Add Task"},null,512),[[a.nr,r.text]])]),(0,o._)("div",J,[N,(0,o.wy)((0,o._)("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=t=>r.day=t),name:"day",placeholder:"Add Day & Time"},null,512),[[a.nr,r.day]])]),(0,o._)("div",Y,[q,(0,o.wy)((0,o._)("input",{type:"checkbox","onUpdate:modelValue":e[2]||(e[2]=t=>r.reminder=t),name:"reminder"},null,512),[[a.e8,r.reminder]])]),K],32)}var M={name:"addTask",data(){return{text:"",day:"",reminder:!1}},methods:{onSubmit(t){if(t.preventDefault(),!this.text)return void alert("Please add a task ");const e={text:this.text,day:this.day,reminder:this.reminder};this.$emit("add-task",e),this.text="",this.day="",this.reminder=""}}};const G=(0,u.Z)(M,[["render",L],["__scopeId","data-v-bdac53f4"]]);var Q=G,X={name:"aHome",components:{aTasks:E,addTask:Q},props:{showAddTask:Boolean},data(){return{tasks:[]}},methods:{async addTask(t){const e=await fetch("api/tasks",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)}),n=await e.json();this.tasks=[...this.tasks,n]},async deleteTask(t){const e=await fetch(`api/tasks/${t}`,{method:"DELETE"});200===e.status?this.tasks=this.tasks.filter((e=>e.id!==t)):alert("error deleting task")},async toggleReminder(t){const e=await this.fetchTask(t),n={...e,reminder:!e.reminder},a=await fetch(`api/tasks/${t}`,{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(n)}),o=await a.json();this.tasks=this.tasks.map((e=>e.id===t?{...e,reminder:o.reminder}:e))},async fetchTasks(){const t=await fetch("api/tasks"),e=await t.json();return e},async fetchTask(t){const e=await fetch(`api/tasks/${t}`),n=await e.json();return n}},async created(){this.tasks=await this.fetchTasks()}};const tt=(0,u.Z)(X,[["render",W]]);var et=tt;const nt=[{path:"/",name:"Home",component:et},{path:"/about",name:"About",component:$}],at=(0,O.p7)({history:(0,O.PO)("/"),routes:nt});var ot=at;(0,a.ri)(D).use(ot).mount("#app")}},e={};function n(a){var o=e[a];if(void 0!==o)return o.exports;var s=e[a]={exports:{}};return t[a](s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,a,o,s){if(!a){var r=1/0;for(c=0;c<t.length;c++){a=t[c][0],o=t[c][1],s=t[c][2];for(var i=!0,d=0;d<a.length;d++)(!1&s||r>=s)&&Object.keys(n.O).every((function(t){return n.O[t](a[d])}))?a.splice(d--,1):(i=!1,s<r&&(r=s));if(i){t.splice(c--,1);var l=o();void 0!==l&&(e=l)}}return e}s=s||0;for(var c=t.length;c>0&&t[c-1][2]>s;c--)t[c]=t[c-1];t[c]=[a,o,s]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,a){var o,s,r=a[0],i=a[1],d=a[2],l=0;if(r.some((function(e){return 0!==t[e]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(d)var c=d(n)}for(e&&e(a);l<r.length;l++)s=r[l],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(c)},a=self["webpackChunktask_manager"]=self["webpackChunktask_manager"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(9430)}));a=n.O(a)})();
//# sourceMappingURL=app.6e8c6193.js.map