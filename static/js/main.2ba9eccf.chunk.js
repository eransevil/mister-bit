(this["webpackJsonpmister-bit"]=this["webpackJsonpmister-bit"]||[]).push([[0],{39:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(33),r=n.n(c),o=(n(39),n(3)),i=n.n(o),s=n(13),l=n(9),u=n(10),h=n(12),d=n(11),m=(n(41),n(5)),p=(n(42),n(0));function j(e){var t=e.contact;return Object(p.jsx)(m.b,{to:"/contact/"+t._id,children:Object(p.jsxs)("div",{className:"contact-preview",children:[Object(p.jsx)("img",{className:"contact-pre-img",src:"https://robohash.org/".concat(t._id),alt:""}),Object(p.jsx)("span",{children:t.name})]})})}n(49);function b(e){var t=e.contacts;return Object(p.jsx)("div",{className:"contact-list",children:Object(p.jsx)("ul",{children:t.map((function(e){return Object(p.jsx)(j,{contact:e},e._id)}))})})}var f=n(17),v=n(16),O=(n(50),function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={term:""},e.handleChange=function(t){var n=t.target,a=n.name,c="number"===n.type?+n.value:n.value;e.setState(Object(v.a)({},a,c),(function(){e.props.onChangeFilter(Object(f.a)({},e.state))}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.term;return Object(p.jsx)("div",{children:Object(p.jsxs)("form",{className:"contact-filter",onSubmit:function(e){return e.preventDefault()},children:[Object(p.jsx)("label",{className:"labal",htmlFor:"name",children:"Name"}),Object(p.jsx)("input",{placeholder:"Contact Name",type:"text",id:"name",name:"term",value:e,onChange:this.handleChange}),Object(p.jsx)("label",{className:"labal",htmlFor:"phone",children:"Phone"}),Object(p.jsx)("input",{placeholder:"Contact Name",type:"text",id:"phone",name:"term",value:e,onChange:this.handleChange})]})})}}]),n}(a.Component)),x={getContacts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return new Promise((function(t,n){var a=g;e&&e.term&&(a=y(e.term)),t(C(a))}))},getContactById:function(e){return new Promise((function(t,n){var a=g.find((function(t){return t._id===e}));a?t(a):n("Contact id ".concat(e," not found!"))}))},deleteContact:function(e){return new Promise((function(t,n){var a=g.findIndex((function(t){return t._id===e}));-1!==a&&g.splice(a,1),t(g)}))},saveContact:function(e){return e._id?function(e){return new Promise((function(t,n){var a=g.findIndex((function(t){return e._id===t._id}));-1!==a&&(g[a]=e),t(e)}))}(e):function(e){return new Promise((function(t,n){e._id=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=0;a<e;a++)t+=n.charAt(Math.floor(Math.random()*n.length));return t}(),g.push(e),t(e)}))}(e)},getEmptyContact:function(){return{name:"",email:"",phone:""}}},g=[{_id:"5a56640269f443a5d64b32ca",name:"Ochoa Hyde",email:"ochoahyde@renovize.com",phone:"+1 (968) 593-3824"},{_id:"5a5664025f6ae9aa24a99fde",name:"Hallie Mclean",email:"halliemclean@renovize.com",phone:"+1 (948) 464-2888"},{_id:"5a56640252d6acddd183d319",name:"Parsons Norris",email:"parsonsnorris@renovize.com",phone:"+1 (958) 502-3495"},{_id:"5a566402ed1cf349f0b47b4d",name:"Rachel Lowe",email:"rachellowe@renovize.com",phone:"+1 (911) 475-2312"},{_id:"5a566402abce24c6bfe4699d",name:"Dominique Soto",email:"dominiquesoto@renovize.com",phone:"+1 (807) 551-3258"},{_id:"5a566402a6499c1d4da9220a",name:"Shana Pope",email:"shanapope@renovize.com",phone:"+1 (970) 527-3082"},{_id:"5a566402f90ae30e97f990db",name:"Faulkner Flores",email:"faulknerflores@renovize.com",phone:"+1 (952) 501-2678"},{_id:"5a5664027bae84ef280ffbdf",name:"Holder Bean",email:"holderbean@renovize.com",phone:"+1 (989) 503-2663"},{_id:"5a566402e3b846c5f6aec652",name:"Rosanne Shelton",email:"rosanneshelton@renovize.com",phone:"+1 (968) 454-3851"},{_id:"5a56640272c7dcdf59c3d411",name:"Pamela Nolan",email:"pamelanolan@renovize.com",phone:"+1 (986) 545-2166"},{_id:"5a5664029a8dd82a6178b15f",name:"Roy Cantu",email:"roycantu@renovize.com",phone:"+1 (929) 571-2295"},{_id:"5a5664028c096d08eeb13a8a",name:"Ollie Christian",email:"olliechristian@renovize.com",phone:"+1 (977) 419-3550"},{_id:"5a5664026c53582bb9ebe9d1",name:"Nguyen Walls",email:"nguyenwalls@renovize.com",phone:"+1 (963) 471-3181"},{_id:"5a56640298ab77236845b82b",name:"Glenna Santana",email:"glennasantana@renovize.com",phone:"+1 (860) 467-2376"},{_id:"5a56640208fba3e8ecb97305",name:"Malone Clark",email:"maloneclark@renovize.com",phone:"+1 (818) 565-2557"},{_id:"5a566402abb3146207bc4ec5",name:"Floyd Rutledge",email:"floydrutledge@renovize.com",phone:"+1 (807) 597-3629"},{_id:"5a56640298500fead8cb1ee5",name:"Grace James",email:"gracejames@renovize.com",phone:"+1 (959) 525-2529"},{_id:"5a56640243427b8f8445231e",name:"Tanner Gates",email:"tannergates@renovize.com",phone:"+1 (978) 591-2291"},{_id:"5a5664025c3abdad6f5e098c",name:"Lilly Conner",email:"lillyconner@renovize.com",phone:"+1 (842) 587-3812"}];function C(e){return e.sort((function(e,t){return e.name.toLocaleLowerCase()<t.name.toLocaleLowerCase()?-1:e.name.toLocaleLowerCase()>t.name.toLocaleLowerCase()?1:0}))}function y(e){return console.log(e),e=e.toLocaleLowerCase(),g.filter((function(t){return t.name.toLocaleLowerCase().includes(e)||t.phone.toLocaleLowerCase().includes(e)||t.email.toLocaleLowerCase().includes(e)}))}n(51);var k=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={contacts:null,filterBy:{term:null}},e.onDeleteContact=function(){var t=Object(s.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.deleteContact(n);case 2:e.loadContacts();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onChangeFilter=function(t){e.setState({filterBy:t},e.loadContacts)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.loadContacts()}},{key:"loadContacts",value:function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.getContacts(this.state.filterBy);case 2:t=e.sent,this.setState({contacts:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.contacts;return e&&Object(p.jsxs)("div",{className:"contact-container",children:[Object(p.jsx)(O,{match:this.props.match,onChangeFilter:this.onChangeFilter}),Object(p.jsx)(m.b,{to:"/contact/edit",children:"\u2795"}),Object(p.jsx)(b,{contacts:e,onDeleteContact:this.onDeleteContact})]})}}]),n}(a.Component),N=n(19),w=n(52),_={getRate:function(){return w.get("https://blockchain.info/tobtc?currency=USD&value=1").then((function(e){return e.data}))},getMarketPrice:function(){return w.get("https://api.blockchain.info/charts/market-price?timespan=4months&format=json&cors=true").then((function(e){return e.data.values}))},getConfirmedTransactions:function(){console.log("getConfirmedTransactions")}};n(71);var S=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={marketPrices:null,ConfirmedTransactions:null,months:null},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getMarketPrice(),this.getmonths()}},{key:"getMarketPrice",value:function(){var e=Object(s.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.getMarketPrice();case 2:t=e.sent,console.log(t),n=t.map((function(e){return e.y})),this.setState({marketPrices:n});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getmonths",value:function(){var e=+(new Date).getMonth();console.log(e);var t=["01/0"+(e-2),"01/0"+(e-1),"01/0"+e,"01/0"+(e+1)];this.setState({months:t})}},{key:"render",value:function(){var e=this.state,t=e.marketPrices,n=e.months;return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Market Prices"}),t&&Object(p.jsxs)(N.Sparklines,{data:t,height:30,children:[Object(p.jsx)(N.SparklinesLine,{}),Object(p.jsx)(N.SparklinesSpots,{})]}),n&&Object(p.jsx)("div",{className:"time-line",children:n.map((function(e){return Object(p.jsxs)("span",{children:[" ",e," "]},e)}))})]})}}]),n}(a.Component),L=(n(72),function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={contact:null,errMsg:""},e.handleChange=function(t){var n=t.target,a=n.name,c="number"===n.type?+n.value:n.value;e.setState((function(e){return{contact:Object(f.a)(Object(f.a)({},e.contact),{},Object(v.a)({},a,c))}}))},e.onSaveContact=function(){var t=Object(s.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),console.log(e.state.contact),t.next=4,x.saveContact(Object(f.a)({},e.state.contact));case 4:e.props.history.push("/contact");case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(s.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props.match.params.id,e.prev=1,!t){e.next=8;break}return e.next=5,x.getContactById(t);case 5:e.t0=e.sent,e.next=9;break;case 8:e.t0=x.getEmptyContact();case 9:n=e.t0,this.setState({contact:n}),e.next=16;break;case 13:e.prev=13,e.t1=e.catch(1),this.setState({errMsg:"contact Not Found"});case 16:case"end":return e.stop()}}),e,this,[[1,13]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){if(!this.state.contact)return Object(p.jsx)("div",{children:this.state.errMsg||"Loading"});var e=this.state.contact,t=e.name,n=e.email,a=e.phone,c=e._id;return Object(p.jsxs)("form",{className:"contact-edit",onSubmit:this.onSaveContact,children:[Object(p.jsxs)("div",{className:"actions",children:[Object(p.jsx)(m.b,{className:"link-btn",to:"/contact/",children:"\u23ee"}),c&&Object(p.jsx)(m.b,{className:"link-btn",to:"/contact/edit/"+c,children:"\ud83d\udcdd"})]}),c&&Object(p.jsx)("img",{className:"img-edit",src:"https://robohash.org/".concat(c),alt:""}),Object(p.jsxs)("div",{className:"input-container",children:[Object(p.jsx)("label",{htmlFor:"name",children:"Name"}),Object(p.jsx)("input",{placeholder:"Name",required:!0,type:"text",id:"name",value:t,onChange:this.handleChange,name:"name"})]}),Object(p.jsxs)("div",{className:"input-container",children:[Object(p.jsx)("label",{htmlFor:"email",children:"Email"}),Object(p.jsx)("input",{placeholder:"Email",required:!0,type:"text",id:"email",value:n,onChange:this.handleChange,name:"email"})]}),Object(p.jsxs)("div",{className:"input-container",children:[Object(p.jsx)("label",{htmlFor:"phone",children:"Phone"}),Object(p.jsx)("input",{placeholder:"Phone",required:!0,type:"text",id:"phone",value:a,onChange:this.handleChange,name:"phone"})]}),Object(p.jsxs)("div",{class:"save-edit-btn-container",children:[Object(p.jsx)("p",{children:this.state.errMsg}),Object(p.jsx)("button",{className:"save-edit-btn",children:"Save Contact"})]})]})}}]),n}(a.Component)),P={name:"Eran Sevil",coins:100,moves:[]},M={getUser:function(){return P}};var z=n(2),F=(n(73),function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={contact:null},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.loadContact()}},{key:"componentDidUpdate",value:function(e,t){e.match.params.id!==this.props.match.params.id&&this.loadContact()}},{key:"loadContact",value:function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.getContactById(this.props.match.params.id);case 2:t=e.sent,this.setState({contact:t}),console.log(this.props);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.contact;return t?Object(p.jsxs)("div",{className:"contact-details",children:[Object(p.jsxs)("div",{className:"actions",children:[Object(p.jsx)(m.b,{className:"link-btn",to:"/contact/",children:"\u23ee"}),Object(p.jsx)("button",{onClick:function(){return e.props.onDeleteContact(t._id)},children:"Delete"}),Object(p.jsx)(m.b,{className:"link-btn",to:"/contact/edit/"+t._id,children:"\ud83d\udcdd"})]}),Object(p.jsxs)("div",{className:"contact-info",children:[Object(p.jsx)("img",{className:"contact-details-img",src:"https://robohash.org/".concat(t._id),alt:""}),Object(p.jsxs)("span",{children:[" Name: ",t.name]}),Object(p.jsxs)("span",{children:[" Email: ",t.email]}),Object(p.jsxs)("span",{children:["Phone: ",t.phone]})]})]}):Object(p.jsx)("div",{children:"Loading contact....."})}}]),n}(a.Component)),D=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={user:null,bitRate:null},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getLoggedInUser(),this.getCurrBitRate()}},{key:"getLoggedInUser",value:function(){var e=M.getUser();this.setState({user:e})}},{key:"getCurrBitRate",value:function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.getRate();case 2:t=(t=+(t=1/(t=e.sent)).toFixed(0)).toLocaleString("en-IN"),console.log(t),this.setState({bitRate:t});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.user,n=e.bitRate;e.ShowChart;return Object(p.jsx)(m.a,{children:Object(p.jsxs)("div",{className:"bit-app",children:[Object(p.jsxs)("header",{className:"App-header",children:[Object(p.jsxs)("div",{className:"nav-links",children:[Object(p.jsx)(m.c,{exact:!0,to:"/chrat",activeClassName:"active-nav",children:"Chrat"}),Object(p.jsx)(m.c,{exact:!0,to:"/contact",activeClassName:"active-nav",children:"Contact"})]}),"Mister-BITCOIN",Object(p.jsxs)("span",{className:"user-info",children:[" Hello ",t&&t.name," "]}),Object(p.jsxs)("span",{className:"user-info",children:[" \ud83d\udcb0 ",t&&t.coins," "]}),Object(p.jsxs)("span",{className:"user-info",children:[" \ud83d\udcb9 BTC : ",n&&n," "]})]}),Object(p.jsxs)(z.c,{children:[Object(p.jsx)(z.a,{component:L,path:"/contact/edit/:id?"}),Object(p.jsx)(z.a,{component:S,path:"/chrat"}),Object(p.jsx)(z.a,{component:F,path:"/contact/:id"}),Object(p.jsx)(z.a,{component:k,path:"/contact"})]})]})})}}]),n}(a.Component),B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,75)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))};r.a.render(Object(p.jsx)(D,{}),document.getElementById("root")),B()}},[[74,1,2]]]);
//# sourceMappingURL=main.2ba9eccf.chunk.js.map