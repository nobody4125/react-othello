(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(19)},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),i=n.n(o),c=(n(16),n(17),n(8)),l=n(1),u=n(2),s=n(4),f=n(3),h=n(5),v=n(9),m=(n(18),8),d=m*m,k=1;function p(e){return m*e[0]+e[1]}function y(e){return 0<=e[0]&&e[0]<m&&0<=e[1]&&e[1]<m}function b(e,t,n){for(var a=function(e){return[Math.floor(e/m),e%m]}(t),r=Object(v.a)(a,2),o=r[0],i=r[1],c=[[o,i]],l=-1;l<=1;l++)for(var u=-1;u<=1;u++)if(0!==l||0!==u){for(var s=[o+l,i+u],f=!1,h=[];y(s)&&e[p(s)]===n^1;)h.push(s),s=[s[0]+l,s[1]+u],f=!0;f&&y(s)&&e[p(s)]===n&&(c=c.concat(h))}return c}function w(e){var t="green";return null!==e.value&&(t=e.value===k?"black":"white"),r.a.createElement("svg",{className:"square",onClick:e.onClick},r.a.createElement("circle",{fill:t,r:"10",cx:"25",cy:"25"}))}var E=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){for(var e=this,t=[],n=function(n){t.push(r.a.createElement("div",{key:n,className:"board-row"},Object(c.a)(Array(m)).map(function(t,a){return e.renderSquare(p([n,a]))})))},a=0;a<m;a++)n(a);return r.a.createElement("div",{className:"board"},t)}},{key:"renderSquare",value:function(e){var t=this;return r.a.createElement(w,{key:e,value:this.props.stones[e],onClick:function(){return t.props.onClick(e)}})}}]),t}(r.a.Component),O=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(f.a)(t).call(this,e))).state={stones:n.makeInitialStones(),turn:1},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"reset",value:function(){this.setState({stones:this.makeInitialStones(),turn:1})}},{key:"makeInitialStones",value:function(){var e=Array(d).fill(null),t=Math.floor((m-1)/2),n=t+1,a=Math.floor((m-1)/2),r=a+1;return e[p([t,r])]=e[p([n,a])]=k,e[p([t,a])]=e[p([n,r])]=0,e}},{key:"handleClickSquare",value:function(e){var t=this.state.turn%2===1?k:0;if(function(e,t,n){return console.log(b(e,t,n)),null===e[t]&&b(e,t,n).length>1}(this.state.stones,e,t)){var n=function(e,t,n){var a=e.slice(),r=!0,o=!1,i=void 0;try{for(var c,l=b(e,t,n)[Symbol.iterator]();!(r=(c=l.next()).done);r=!0)a[p(c.value)]=n}catch(u){o=!0,i=u}finally{try{r||null==l.return||l.return()}finally{if(o)throw i}}return a}(this.state.stones,e,t);this.setState({stones:n,turn:this.state.turn+1})}}},{key:"handleClick",value:function(){alert("YOU LOSE!!!! \uff08\uff8c\uff9e\uff73\uff73\uff73\uff73\uff73\uff73!!!!\uff09\n\u4ffa\u306e\u52dd\u3061\uff01\n\u4f55\u3067\u8ca0\u3051\u305f\u304b\u3001\u660e\u65e5\u307e\u3067\u8003\u3048\u3068\u3044\u3066\u304f\u3060\u3055\u3044\u3002\n\u305d\u3057\u305f\u3089\u4f55\u304b\u304c\u898b\u3048\u3066\u304f\u308b\u306f\u305a\u3067\u3059\u3002\n\u307b\u306a\u3001\u3044\u305f\u3060\u304d\u307e\u3059\u3002"),this.reset()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"game"},r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return e.handleClick()}},"Reset"),"turn: ",this.state.turn),r.a.createElement(E,{stones:this.state.stones,onClick:function(t){return e.handleClickSquare(t)}}))}}]),t}(r.a.Component);var j=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},"React Othello"),r.a.createElement(O,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.743549c9.chunk.js.map