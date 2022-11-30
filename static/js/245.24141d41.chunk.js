"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[245],{245:function(n,e,t){t.r(e),t.d(e,{default:function(){return $}});var a,r,i,o,s,c,d,l,p,u,x,h=t(885),m=t(791),f=t(168),g=t(444),b=g.ZP.form(a||(a=(0,f.Z)(["\ndisplay: flex;\nflex-direction: column;\ngap: 20px;\n\n"]))),Z=g.ZP.label(r||(r=(0,f.Z)(["\nfont-size: 24px;\nfont-weight: 500;\n"]))),v=g.ZP.input(i||(i=(0,f.Z)(["\nmax-width: 360px;\n\n"]))),w=g.ZP.button(o||(o=(0,f.Z)(["\n\nwidth: 200px;\nheight: 30px;\nfont-size: 18px;\nbackground-image: linear-gradient(to right, #314755 0%, #26a0da  51%, #314755  100%);\nmargin: auto;\n\n:hover {\n  color: #fff;\n  border: 1px solid burlywood;\n}     \n"]))),j=t(434),y=function(n){return n.contacts.contacts},P=function(n){return n.contacts.isLoading},k=function(n){return n.contacts.error},C=function(n){return n.filter.filter},z=t(719),_=t(184),A=function(){var n=(0,m.useState)(""),e=(0,h.Z)(n,2),t=e[0],a=e[1],r=(0,m.useState)(""),i=(0,h.Z)(r,2),o=i[0],s=i[1],c=(0,j.v9)(y),d=(0,j.I0)(),l=function(n){switch(n.currentTarget.name){case"name":a(n.currentTarget.value);break;case"phone":s(n.currentTarget.value);break;default:return}};return(0,_.jsxs)(b,{onSubmit:function(n){n.preventDefault(),c.some((function(n){return n.name===t}))?alert("".concat(t," is already in contacts")):d((0,z.uK)({name:t,phone:o})),a(""),s("")},children:[(0,_.jsx)(Z,{children:"Name"}),(0,_.jsx)(v,{type:"text",value:t,onChange:l,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,_.jsx)(Z,{children:"Number"}),(0,_.jsx)(v,{type:"tel",value:o,onChange:l,name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,_.jsx)(w,{type:"submit",children:"Add contact"})]})},F=g.ZP.ol(s||(s=(0,f.Z)(["\npadding: 10px;\n"]))),I=g.ZP.li(c||(c=(0,f.Z)(["\nmargin-bottom: 10px;\nheight: max-content;\ndisplay: flex;\nalign-items: center;\njustify-content: space-between;\nborder-bottom: 1px solid grey;\n\n"]))),L=g.ZP.button(d||(d=(0,f.Z)(["\n\nmargin-left: 20px;\n"]))),N=function(){var n=(0,j.v9)(y),e=(0,j.v9)(C),t=(0,j.I0)(),a=n.filter((function(n){return n.name.toLowerCase().includes(null===e||void 0===e?void 0:e.toLowerCase())}));return(0,_.jsx)(F,{children:a.map((function(n){return(0,_.jsxs)(I,{children:[n.name,": ",n.phone,(0,_.jsx)(L,{type:"button",onClick:function(){return t((0,z.GK)(n.id))},children:"Delete"})]},n.id)}))})},S=g.ZP.section(l||(l=(0,f.Z)(["\nmax-width: 1200px;\ncolor: black;\nfont-size: 20px;\npadding: 20px;\nborder: 1px solid black;\nbox-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;\n:not(:last-child){\n  margin-top: 20px;\n}\n"]))),T=g.ZP.h2(p||(p=(0,f.Z)(["\nmargin-top: 0;\n"])));function D(n){var e=n.title,t=n.children;return(0,_.jsxs)(S,{children:[(0,_.jsx)(T,{children:e}),t]})}var q,K=g.ZP.h3(u||(u=(0,f.Z)(["\nfont-size: 24px;\nfont-weight: 500;\nmargin-bottom: 10px;\n"]))),M=g.ZP.input(x||(x=(0,f.Z)(["\nwidth: 260px;\nmargin: auto;\n"]))),B=t(429),E=function(){var n=(0,j.v9)(C),e=(0,j.I0)();return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(K,{children:"Find contacts by name"}),(0,_.jsx)(M,{type:"search",name:"filter",value:n,onChange:function(n){n.preventDefault(),e((0,B.M)(n.currentTarget.value))}})]})},G=t(243),J=g.ZP.div(q||(q=(0,f.Z)(["\n  margin: auto;\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,\n    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;\n    \n  width: 300px;\n  @media (min-width: 480px) {\n    width: 420px;\n  }\n  @media (min-width: 768px) {\n    width: 700px;\n  }\n"]))),$=function(){var n=(0,j.I0)(),e=(0,j.v9)(P),t=(0,j.v9)(k);return(0,m.useEffect)((function(){n((0,z.yF)())}),[n]),(0,_.jsxs)(J,{children:[(0,_.jsx)(D,{title:"Phonebook",children:(0,_.jsx)(A,{})}),(0,_.jsxs)(D,{title:"Contacts",children:[e&&!t?(0,_.jsx)(G.g4,{height:"80",width:"80",radius:"9",color:"#33415c",ariaLabel:"three-dots-loading",wrapperClassName:"",visible:e,wrapperStyle:{display:"inline"}}):(0,_.jsx)(E,{}),(0,_.jsx)(N,{})]})]})}}}]);
//# sourceMappingURL=245.24141d41.chunk.js.map