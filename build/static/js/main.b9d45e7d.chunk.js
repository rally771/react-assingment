(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(22)},17:function(e,t,a){},20:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),l=a.n(o),c=(a(17),a(1)),s=a(2),i=a(4),u=a(3),m=a(5),d=a(6),h=a.n(d),f=a(9),b=a(10),p=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this))).resetForm=function(){a.setState(a.baseState)},a.handleChange=function(e){a.setState(Object(b.a)({},e.target.name,e.target.value))},a.findingString=function(){var e=Object(f.a)(h.a.mark(function e(t){var n,r,o,l,c,s,i,u,m,d,f,b,p,g,v,x,E,w;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n=a.state.textarea,r=a.state.textbox,o=0,l=n.toLowerCase().split("\n"),c=r.toLowerCase().split(" "),console.log(c),s=Object.values(l),i=0,u=s;case 9:if(!(i<u.length)){e.next=40;break}m=u[i],o++,d=m.split(" "),console.log("keyvalue",d),f=Object.values(d),b=Object.values(c),p=0,g=f;case 17:if(!(p<g.length)){e.next=35;break}v=g[p],x=0,E=b;case 20:if(!(x<E.length)){e.next=32;break}if(w=E[x],v!==w){e.next=29;break}return e.next=25,a.setState({found:a.state.found.concat(o),stringvalue:a.state.stringvalue.concat(Object.values(l)[o-1])});case 25:console.log("sentence",Object.entries(l)[o-1]),console.log("founded at",a.state.found),e.next=29;break;case 29:x++,e.next=20;break;case 32:p++,e.next=17;break;case 35:return e.next=37,a.setState({notfound:a.state.notfound.concat("not found")});case 37:i++,e.next=9;break;case 40:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.state={textarea:"",textbox:"",found:[],notfound:"",stringvalue:[]},a.baseState=a.state={found:[],notfound:"",stringvalue:[]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.found,t=this.state.notfound,a=this.state.stringvalue;return r.a.createElement("div",{className:"form-main"},r.a.createElement("form",{onSubmit:this.findingString},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleFormControlTextarea1"},"Please Enter The Paragraph with endline "),r.a.createElement("br",null),r.a.createElement("textarea",{value:this.state.textarea,className:"form-control text-area-form",name:"textarea",onChange:this.handleChange,id:"exampleFormControlTextarea1",rows:"3",cols:"40"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"inputtext"},"Please enter words to search for"),r.a.createElement("br",null),r.a.createElement("input",{onChange:this.handleChange,value:this.state.textbox,name:"textbox",className:"form-control text-form",id:"inputtext",type:"text",placeholder:"Enter Words to Search"})),r.a.createElement("button",{type:"button",onClick:this.findingString,className:"btn btn-primary button"},"Find Text"),r.a.createElement("button",{type:"button",onClick:this.resetForm,className:"btn btn-primary button clear-button"},"Clear Search Results"),r.a.createElement("br",null),r.a.createElement("div",{className:"resume"},r.a.createElement("a",{href:"https://drive.google.com/open?id=1L49lOZZVbAFz9yJG2BaMKMmHe8gTvtM7"},"Download Resume")),r.a.createElement("br",null)),e.length>0?r.a.createElement("p",{id:"mainh1"},"The words found at line ",e.map(function(e){return e+" "})):r.a.createElement("p",{id:"mainh1"},t),e.length&&a.length>0?e.map(function(e){return r.a.createElement("p",{id:"mainh1"},"The words  found at ",e)})&&a.map(function(e){return r.a.createElement("p",{id:"mainh1"}," ",e)}):r.a.createElement("p",{id:"mainh1"},t))}}]),t}(n.Component),g=(a(20),function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"main-background"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"main-form-background"},r.a.createElement("div",{className:"Title"},r.a.createElement("p",null,"React assingment for Quasix Solutions ")),r.a.createElement(p,null)))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(21);l.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.b9d45e7d.chunk.js.map