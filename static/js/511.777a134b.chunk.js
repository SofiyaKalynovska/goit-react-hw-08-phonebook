"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[511],{3309:function(e,n,t){t.d(n,{l:function(){return i}});var r,a=t(168),i=t(6088).Z.form(r||(r=(0,a.Z)(["\nwidth: 90%;\ndisplay: flex;\nflex-direction: column;\ngap: 20px;\nfont-size: 26px;\n\n"])))},7511:function(e,n,t){t.r(n),t.d(n,{default:function(){return D}});var r=t(885),a=t(2791),i=t(3309),o=t(9434),l=t(6351),s=t(208),c=t(6015),d=t(4565),u=t(7041),x=t(7205),p=t(2096),h=t(184),f=function(){var e=(0,a.useState)(""),n=(0,r.Z)(e,2),t=n[0],f=n[1],b=(0,a.useState)(""),m=(0,r.Z)(b,2),v=m[0],g=m[1],Z=(0,o.v9)(l.Af),j=(0,o.I0)(),y=function(e){switch(e.currentTarget.name){case"name":f(e.currentTarget.value);break;case"number":g(e.currentTarget.value);break;default:return}};return(0,h.jsx)(c.Z,{sx:{backgroundColor:"#e8ebff",marginTop:"30px",padding:2,display:"flex",flexDirection:"column",alignItems:"center"},children:(0,h.jsxs)(i.l,{onSubmit:function(e){e.preventDefault(),Z.some((function(e){return e.name===t}))?alert("".concat(t," is already in contacts")):j((0,s.uK)({name:t,number:v})),f(""),g("")},children:[(0,h.jsx)(d.Z,{variant:"body",component:"label",color:"#1976d2",children:"Name"}),(0,h.jsx)(u.Z,{label:"Provide name",variant:"outlined",type:"text",value:t,onChange:y,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,inputProps:{style:{fontSize:26}}}),(0,h.jsx)(d.Z,{variant:"body",component:"label",color:"#1976d2",children:"Number"}),(0,h.jsx)(u.Z,{label:"Provide number",variant:"outlined",type:"tel",value:v,onChange:y,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,inputProps:{style:{fontSize:26}}}),(0,h.jsx)(x.Z,{variant:"contained",startIcon:(0,h.jsx)(p.Z,{}),color:"info",type:"submit",sx:{m:"auto",fontSize:20},children:"Add contact"})]})})},b=t(4942),m=t(5629),v=t(2087),g=t(9520),Z=t(1048),j=t(4939),y=function(){var e=(0,o.v9)(l.Af),n=(0,o.v9)(l.AD),t=(0,o.I0)(),r=e.filter((function(e){return e.name.toLowerCase().includes(null===n||void 0===n?void 0:n.toLowerCase())}));return(0,h.jsx)(m.Z,{sx:(0,b.Z)({},"& :hover",{fontWeight:"bold"}),children:r.map((function(e){return(0,h.jsxs)(v.ZP,{dense:!0,sx:{boxShadow:3},children:[(0,h.jsx)(g.Z,{children:(0,h.jsx)(j.Z,{sx:{inlineSize:35}})}),(0,h.jsxs)(Z.Z,{sx:{fontSize:26},disableTypography:!0,children:[e.name,": ",e.number]}),(0,h.jsx)(x.Z,{color:"error",variant:"contained",size:"small",type:"button",onClick:function(){return t((0,s.GK)(e.id))},children:"Delete"})]},e.id)}))})},C=t(803);function w(e){var n=e.title,t=e.children;return(0,h.jsx)(C.Z,{sx:{mt:3},children:(0,h.jsxs)(c.Z,{sx:{backgroundColor:"#e8ebff",boxShadow:" rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;",padding:2},children:[(0,h.jsx)(d.Z,{variant:"h4",component:"h2",children:n}),t]})})}var z,S=t(1429),k=function(){var e=(0,o.v9)(l.AD),n=(0,o.I0)();return(0,h.jsx)(c.Z,{sx:{backgroundColor:"#e8ebff",margin:"20px",display:"flex",flexDirection:"column",alignItems:"center"},children:(0,h.jsxs)(i.l,{children:[(0,h.jsx)(d.Z,{variant:"body",component:"label",color:"#1976d2",children:"Find contacts by name"}),(0,h.jsx)(u.Z,{fullWidth:"true",label:"Start typing...",variant:"outlined",type:"search",fontSize:"40",name:"filter",value:e,onChange:function(e){e.preventDefault(),n((0,S.M)(e.currentTarget.value))},inputProps:{style:{fontSize:20}}})]})})},A=t(1523),P=t(168),_=(0,t(6088).Z)(C.Z)(z||(z=(0,P.Z)(["\n  padding: 20px;\n  margin: auto;\n"]))),D=function(){var e=(0,o.I0)(),n=(0,o.v9)(l.xU),t=(0,o.v9)(l.zh);return(0,a.useEffect)((function(){e((0,s.yF)())}),[e]),(0,h.jsxs)(_,{children:[(0,h.jsx)(w,{title:"Phonebook",children:(0,h.jsx)(f,{})}),(0,h.jsxs)(w,{title:"Contacts",children:[n&&!t?(0,h.jsx)(A.g4,{height:"80",width:"80",radius:"9",color:"#33415c",ariaLabel:"three-dots-loading",wrapperClassName:"",visible:n,wrapperStyle:{display:"inline"}}):(0,h.jsx)(k,{}),(0,h.jsx)(y,{})]})]})}}}]);
//# sourceMappingURL=511.777a134b.chunk.js.map