"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[821],{8821:function(e,n,t){t.r(n),t.d(n,{default:function(){return C}});var r=t(9434),a=t(9798),i="ContactItem_deleteButton__AvFnv",s="ContactItem_contactItem__Z4FuP",c=t(890),l=t(7107),o=t(4507),u=t(184),m=function(e){var n=e.id,t=e.name,m=e.number,d=(0,r.I0)(),h=(0,l.Z)();return(0,u.jsxs)("li",{className:s,children:[(0,u.jsx)(o.Z,{theme:h,children:(0,u.jsxs)(c.Z,{component:"h6",variant:"h6",children:[t," : ",m]})}),(0,u.jsx)("button",{type:"button",onClick:function(){return function(e){d((0,a.GK)(e))}(n)},className:i,children:"Delete"})]})},d=t(2286),h=t(1614),x=t(4554),f=function(){var e=(0,r.v9)(d.hF),n=(0,l.Z)();return(0,u.jsx)(o.Z,{theme:n,children:(0,u.jsx)(h.Z,{component:"main",maxWidth:"xs",children:(0,u.jsx)(x.Z,{sx:{marginTop:2,display:"flex",flexDirection:"column"},children:(0,u.jsx)("ul",{children:e&&e.map((function(e){var n=e.id,t=e.name,r=e.number;return(0,u.jsx)(x.Z,{sx:{marginBottom:1},children:(0,u.jsx)(m,{name:t,number:r,id:n})},n)}))})})})})},Z=t(9439),j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,n){return e+=(n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_"}),"")},p=t(2791),v=t(7613),b=t(1138),g=t(4708),y=function(){var e=(0,p.useState)(""),n=(0,Z.Z)(e,2),t=n[0],i=n[1],s=(0,p.useState)(""),m=(0,Z.Z)(s,2),f=m[0],y=m[1],_=(0,r.v9)(d.Af),k=(0,l.Z)(),C=(0,r.I0)(),I=function(e){var n=e.target,t=n.name,r=n.value;switch(t){case"name":i(r);break;case"number":y(r);break;default:return}},A=j(),W=j();return(0,u.jsx)(o.Z,{theme:k,children:(0,u.jsxs)(h.Z,{component:"main",maxWidth:"xs",children:[(0,u.jsx)(g.ZP,{}),(0,u.jsxs)(x.Z,{sx:{marginTop:4,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,u.jsx)(c.Z,{component:"h1",variant:"h5",children:"Phonebook"}),(0,u.jsxs)(x.Z,{component:"form",onSubmit:function(e){if(e.preventDefault(),_.entities&&_.entities.find((function(e){return e.name===t})))alert("".concat(t," is already in contacts."));else{var n={createdAt:(new Date).toISOString(),name:t,number:f,id:j()};C((0,a.uK)(n)),i(""),y("")}},noValidate:!0,sx:{mt:1},children:[(0,u.jsx)(v.Z,{margin:"normal",required:!0,fullWidth:!0,label:"Name",type:"name",name:"name",value:t,id:A,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",onChange:I,variant:"outlined"}),(0,u.jsx)(v.Z,{margin:"normal",required:!0,fullWidth:!0,id:W,label:"Number",type:"tel",name:"number",value:f,pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",onChange:I,variant:"outlined"}),(0,u.jsx)(b.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Add contacts"})]})]})]})})},_=t(6895),k=function(){var e=(0,r.v9)((function(e){return e.filter.filter})),n=(0,r.I0)(),t=(0,l.Z)();return(0,u.jsx)(o.Z,{theme:t,children:(0,u.jsxs)(h.Z,{component:"main",maxWidth:"xs",children:[(0,u.jsx)(g.ZP,{}),(0,u.jsxs)(x.Z,{sx:{marginTop:4,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,u.jsx)(c.Z,{component:"h1",variant:"h5",children:"Contacts"}),(0,u.jsx)(v.Z,{margin:"normal",required:!0,fullWidth:!0,label:"Find contacts by name",type:"text",name:"filter",value:e,onChange:function(e){var t=e.target.value;n((0,_.A)(t))},variant:"outlined"})]})]})})},C=function(){var e=(0,r.I0)(),n=(0,l.Z)(),t=(0,r.v9)(d.xU),i=(0,r.v9)(d.zh);return(0,p.useEffect)((function(){e((0,a.yF)())}),[e]),(0,u.jsx)(o.Z,{theme:n,children:(0,u.jsxs)(h.Z,{component:"main",maxWidth:"xs",children:[(0,u.jsx)(g.ZP,{}),(0,u.jsx)(y,{}),(0,u.jsx)(k,{}),t&&(0,u.jsx)("b",{children:"Request in progress..."}),i&&(0,u.jsx)("p",{children:i.message}),(0,u.jsx)(f,{})]})})}}}]);
//# sourceMappingURL=821.e45a8d0a.chunk.js.map