webpackJsonp([0],{GICK:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=n("VU/8")({name:"App"},i,!1,function(t){n("yucN")},null,null).exports,s=n("/ocq"),l=n("mvHQ"),u=n.n(l),r={config:{numPanels:6,cliConfig:{defaultCommand:"g"}},modules:[{moduleId:1,modulePos:1,config:{notes:[{title:"Hello World",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. "}]}}]},c={metadata:{LOCALSTORAGE_KEY:"nt_pconfig"},data:{config:{},modules:[]},attachConfig:function(t){this.data.config=t},attachModule:function(t){for(var e=0;e<this.modules.length;e++)if(t.moduleId===this.modules[e].moduleId)throw new Error("Duplicate module IDs, aborting");this.modules.push(t)},attachCliConfig:function(t){this.data.config.cliConfig=t},getCliConfig:function(t){return this.data.config.cliConfig},emptyManager:function(){this.config={},this.modules=[]},emptyLocalStorage:function(){localStorage.removeItem(""+this.LOCALSTORAGE_KEY)},getConfig:function(){return this.data.config},getModules:function(){return this.data.modules},getData:function(){return this.data},loadToStorage:function(){localStorage.setItem(""+this.LOCALSTORAGE_KEY,u()(this.data))},loadFromStorage:function(){return console.log("load from storage"),console.log(localStorage[""+this.LOCALSTORAGE_KEY]),localStorage[""+this.LOCALSTORAGE_KEY]?(console.log("local storage exists"),this.data=JSON.parse(localStorage.getItem(""+this.LOCALSTORAGE_KEY)),this.data):(console.log("local storage doesnt exist"),localStorage.setItem(""+this.LOCALSTORAGE_KEY,u()(r)),console.log(localStorage[""+this.LOCALSTORAGE_KEY]),this.data.config=r.config,this.data.modules=r.modules,r)}},d=new a.a,m=[{alias:"amazon",url:"https://www.amazon.com",searchPattern:"/s/?field-keywords=",space:"+"},{alias:"g",url:"https://www.google.com/",searchPattern:"search?q=",space:"+"}];function f(t,e){if(console.log(t.slice(0,7)),"http://"!==t.slice(0,7)&&"https://"!==t.slice(0,8)&&(t="https://"+t),console.log(t),/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/.test(t))return!t.includes(" ")&&(e?(window.open(t).focus(),!0):(window.location.href=t,!0))}var g={name:"CommandLine",props:{},data:function(){return{command:"",time:new Date,defaultAliases:m,customAliases:!!c.getCliConfig().aliases&&c.getCliConfig().aliases,config:c.getCliConfig()}},created:function(){this.attachToEventBus();var t=this;setInterval(function(){t.time=new Date},1e3)},computed:{computedTime:function(){return this.time.getHours()%12+":"+(2===String(this.time.getMinutes()).length?this.time.getMinutes():"0"+this.time.getMinutes())+(this.time.getMinutes()>12?"pm":"am")},computedDefaultCommand:function(){for(var t=0;t<this.defaultAliases.length;t++){var e=this.defaultAliases[t];if(e.alias===this.config.defaultCommand)return e}}},methods:{attachToEventBus:function(){d.$on("commit",function(){})},runCli:function(t){t.preventDefault();var e=this.command.split(";"),n=f(e[0],"n"===e[1]);if(console.log(n),!n)switch(e[0]){case"subpanel":d.$emit("sub_panel");break;case"addpanel":d.$emit("add_panel");break;case"save":d.$emit("commit"),c.loadToStorage(),console.log("Saved to local storage");break;case"set":switch(e[1]){case"defaultCommand":e[2]&&(this.config.defaultCommand=e[2],c.attachCliConfig(this.config),c.loadToStorage(),c.loadFromStorage(),this.command="")}break;default:var a=!1;if(e[0].includes(" "))f(""+this.computedDefaultCommand.url+this.computedDefaultCommand.searchPattern+e[0].replace(/ /g,this.computedDefaultCommand.space),"n"===e[1]);else{console.log(this);for(var i=0;i<this.defaultAliases.length;i++){var o=this.defaultAliases[i];if(o.alias===e[0]){if(e[1]){if("n"!==e[1]){a=!0,f(""+o.url+o.searchPattern+e[1].replace(/ /g,o.space),"n"===e[2]);break}a=!0,f(o.url,!0);break}a=!0,f(o.url,!1);break}}if(this.customAliases)for(var s=0;s<this.customAliases.length;s++){var l=this.customAliases[s];if(l.alias===e[0]){if(e[1]){if("n"!==e[1]){a=!0,f(""+l.url+l.searchPattern+e[1].replace(/ /g,l.space),"n"===e[2]);break}a=!0,f(l.url,!0);break}a=!0,f(l.url,!1);break}}a||f(""+this.computedDefaultCommand.url+this.computedDefaultCommand.searchPattern+e[0].replace(/ /g,this.computedDefaultCommand.space),"n"===e[1])}}}}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"cli-container"},[n("form",{on:{submit:function(e){t.runCli(e)}}},[n("span",[t._v("> ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.command,expression:"command"}],attrs:{type:"text"},domProps:{value:t.command},on:{input:function(e){e.target.composing||(t.command=e.target.value)}}})])]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.computedTime))])])},staticRenderFns:[]};var p=n("VU/8")(g,h,!1,function(t){n("qcvE")},null,null).exports,v={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"notes"}},[this._v("\n  Notes\n")])},staticRenderFns:[]};var C={1:n("VU/8")({name:"Notes",data:function(){return{notes:[{title:"What to do",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."}]}}},v,!1,function(t){n("GICK")},"data-v-6dcc7e95",null).exports,2:n("drvL").default,3:null,4:null,5:null,6:null,7:null,8:null},_={name:"Modules",props:["config"],data:function(){return{modules:[]}},methods:{generateCountArray:function(t){for(var e=[],n=0;n<t;n++)for(var a=0;a<this.modules.length;a++)this.modules[a].modulePos===n?e.push(C[this.modules[a].moduleId]):e.push(null);return e},getModule:function(t){return t||C[2]}},computed:{countArray:function(){return this.generateCountArray(this.config.numPanels)}},created:function(){this.numPanels=this.config.numPanels,this.modules=c.getModules()}},b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modules"},t._l(t.countArray,function(e,a){return n(t.getModule(e),{key:a,tag:"component",staticClass:"module-container"})}))},staticRenderFns:[]};var A={name:"main",data:function(){return{config:null}},methods:{attachToEventBus:function(){var t=this;d.$on("commit",function(){t.config&&c.attachConfig(t.config)}),d.$on("add_panel",function(){t.config&&t.config.numPanels++}),d.$on("sub_panel",function(){t.config&&t.config.numPanels>0&&t.config.numPanels--})}},components:{"command-line":p,modules:n("VU/8")(_,b,!1,function(t){n("YCyW")},"data-v-30d19bcf",null).exports},created:function(){this.config=c.loadFromStorage().config,this.attachToEventBus()}},S={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[null!=this.config?e("modules",{attrs:{config:this.config}}):this._e(),this._v(" "),e("command-line")],1)},staticRenderFns:[]};var E=n("VU/8")(A,S,!1,function(t){n("qKKk")},"data-v-164f7db4",null).exports;a.a.use(s.a);var w=new s.a({routes:[{path:"/",name:"main",component:E}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:w,components:{App:o},template:"<App/>"})},VNah:function(t,e){},YCyW:function(t,e){},drvL:function(t,e,n){"use strict";var a=n("VNah"),i=n.n(a),o=n("t67G");var s=function(t){n("sI1x")},l=n("VU/8")(i.a,o.a,!1,s,"data-v-7bb38c2e",null);e.default=l.exports},qKKk:function(t,e){},qcvE:function(t,e){},sI1x:function(t,e){},t67G:function(t,e,n){"use strict";var a={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"empty"}})},staticRenderFns:[]};e.a=a},yucN:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f307eafe3e74166d0cb0.js.map