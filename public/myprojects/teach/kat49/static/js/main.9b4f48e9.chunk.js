(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(t,e,n){t.exports=n(22)},20:function(t,e,n){},21:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),i=n(5),l=n.n(i),r=(n(20),n(6)),o=n(7),u=n(10),s=n(8),d=n(11),m=(n(21),function(t){return c.a.createElement("button",{onClick:t.click},t.active?"stop":"start")}),v=function(t){function e(){var t,n;Object(r.a)(this,e);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(n=Object(u.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(c)))).state={time:0,active:!1},n.handleClick=function(){n.state.active?clearInterval(n.idInterval):n.idInterval=setInterval(function(){return n.addSecond()},1e3),n.setState({active:!n.state.active})},n}return Object(d.a)(e,t),Object(o.a)(e,[{key:"addSecond",value:function(){this.setState({time:this.state.time+1})}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,this.state.time),c.a.createElement(m,{click:this.handleClick,active:this.state.active}))}}]),e}(a.Component),f=n(9),h=n(1);l.a.render(c.a.createElement(f.a,null,c.a.createElement(h.c,null,c.a.createElement(h.a,null)),c.a.createElement(v,null)),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.9b4f48e9.chunk.js.map