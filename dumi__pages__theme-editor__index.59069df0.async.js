"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[4646],{657977:function(te,m,t){t.r(m);var P=t(627424),i=t.n(P),o=t(667294),Z=t(410905),x=t(605042),A=t(704650),a=t(513669),I=t(877719),L=t(302559),e=t(370917);function ne(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}var j=o.lazy(function(){return Promise.all([t.e(3459),t.e(2494)]).then(t.bind(t,192494))});function U(f){return Object.prototype.toString.call(f)==="[object Object]"}var B={cn:{title:"\u4E3B\u9898\u7F16\u8F91\u5668",save:"\u4FDD\u5B58",edit:"\u7F16\u8F91",export:"\u5BFC\u51FA",editModelTitle:"\u7F16\u8F91\u4E3B\u9898\u914D\u7F6E",editJsonContentTypeError:"\u4E3B\u9898 JSON \u683C\u5F0F\u9519\u8BEF",editSuccessfully:"\u7F16\u8F91\u6210\u529F",saveSuccessfully:"\u4FDD\u5B58\u6210\u529F",initialEditor:"\u6B63\u5728\u521D\u59CB\u5316\u7F16\u8F91\u5668..."},en:{title:"Theme Editor",save:"Save",edit:"Edit",export:"Export",editModelTitle:"edit Theme Config",editJsonContentTypeError:"The theme of the JSON format is incorrect",editSuccessfully:"Edited successfully",saveSuccessfully:"Saved successfully",initialEditor:"Initializing Editor..."}},b={name:"zbl8st",styles:"display:flex;height:56px;align-items:center;padding:0 24px;justify-content:space-between;border-bottom:1px solid #F0F0F0"},N=function(){return{header:b}},v="ant-design-v5-theme-editor-theme",J=function(){var K=a.message.useMessage(),_=i()(K,2),g=_[0],W=_[1],k=(0,L.Z)(B),C=i()(k,2),n=C[0],F=C[1],$=o.useState({}),y=i()($,2),u=y[0],h=y[1],z=(0,o.useState)(!1),p=i()(z,2),E=p[0],S=p[1],H=(0,o.useState)(!0),T=i()(H,2),G=T[0],O=T[1],V=(0,o.useState)({text:"{}",json:void 0}),M=i()(V,2),r=M[0],D=M[1];(0,o.useLayoutEffect)(function(){var s=localStorage.getItem(v);s&&h(function(){return JSON.parse(s)})},[]),(0,o.useEffect)(function(){E!==!0&&D({json:u,text:void 0})},[u,E]);var Y=N(),Q=function(){localStorage.setItem(v,JSON.stringify(u)),g.success(n.saveSuccessfully)},X=function(){S(!0)},R=(0,o.useCallback)(function(){S(!1)},[r]),w=function(l,d,c){D(l),Array.isArray(c.contentErrors.validationErrors)&&c.contentErrors.validationErrors.length===0?O(!0):O(!1)},q=(0,o.useCallback)(function(){if(!G){a.message.error(n.editJsonContentTypeError);return}var s=r.text?JSON.parse(r.text):r.json;if(!U(s)){a.message.error(n.editJsonContentTypeError);return}h(s),R(),g.success(n.editSuccessfully)},[r]),ee=function(){var l=new File([JSON.stringify(u,null,2)],"Ant Design Theme.json",{type:"text/json; charset=utf-8;"}),d=document.createElement("a"),c=URL.createObjectURL(l);d.href=c,d.download=l.name,document.body.appendChild(d),d.click(),document.body.removeChild(d),URL.revokeObjectURL(c)};return(0,e.tZ)("div",null,(0,e.tZ)(I.ql,null,(0,e.tZ)("title",null,"".concat(n.title," - Ant Design")),(0,e.tZ)("meta",{property:"og:title",content:"".concat(n.title," - Ant Design")})),W,(0,e.tZ)(a.ConfigProvider,{theme:{inherit:!1}},(0,e.tZ)("div",{css:Y.header},(0,e.tZ)(a.Typography.Title,{level:5,style:{margin:0}},n.title),(0,e.tZ)("div",null,(0,e.tZ)(a.Modal,{open:E,title:n.editModelTitle,width:600,okText:n.save,onOk:q,onCancel:R},(0,e.tZ)(o.Suspense,{fallback:(0,e.tZ)("div",{style:{textAlign:"center",width:"100%",padding:"24px 0"}},(0,e.tZ)(a.Spin,{tip:n.initialEditor}))},(0,e.tZ)(j,{content:r,onChange:w,mainMenuBar:!1}))),(0,e.tZ)(a.Button,{onClick:ee,style:{marginRight:8}},n.export),(0,e.tZ)(a.Button,{onClick:X,style:{marginRight:8}},n.edit),(0,e.tZ)(a.Button,{type:"primary",onClick:Q},n.save))),(0,e.tZ)(Z.Z,{theme:{name:"Custom Theme",key:"test",config:u},style:{height:"calc(100vh - 64px - 56px)"},onThemeChange:function(l){h(l.config)},locale:F==="cn"?x.Z:A.Z})))};m.default=J}}]);