(window["webpackJsonptic-tac-toe"]=window["webpackJsonptic-tac-toe"]||[]).push([[0],{16:function(n,t,e){n.exports=e(28)},21:function(n,t,e){},28:function(n,t,e){"use strict";e.r(t);var r=e(0),i=e.n(r),a=e(11),o=e.n(a),c=(e(21),e(1)),u=e(8),l=e(2),s=e(4),b=e.n(s),d=b()(),f=b()(),m={color1:{bright:b()({hue:d,luminosity:"bright"}),light:b()({hue:d,luminosity:"light",alpha:.5}),dark:b()({hue:d,luminosity:"light"})},color2:{bright:b()({hue:f,luminosity:"bright"}),light:b()({hue:f,luminosity:"light"}),dark:b()({hue:f,luminosity:"dark"})}};function h(){var n=Object(c.a)(["\n  font-size: 56px;\n  font-weight: 700;\n  -webkit-text-stroke: 2px black;\n"]);return h=function(){return n},n}function p(){var n=Object(c.a)(["\n  width: 80px;\n  height: 80px;\n  border: 1px solid gray;\n  background: white;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return p=function(){return n},n}var v=function(n){return i.a.createElement(g,{onClick:n.onClick},i.a.createElement(y,{style:{color:"X"===n.state?m.color1.dark:m.color2.dark}},n.state))},g=l.b.div(p()),y=l.b.span(h());function k(){var n=Object(c.a)(["\n  display: flex;\n  align-items: center;\n"]);return k=function(){return n},n}function x(){var n=Object(c.a)(["\n  border: 1px solid gray;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]);return x=function(){return n},n}var O=function(n){var t=Array.from(Array(3));return i.a.createElement(j,null,t.map((function(e,r){return i.a.createElement(w,null,t.map((function(t,e){return i.a.createElement(v,{onClick:n.disabled?void 0:function(){return n.takeCell({x:e,y:r})},state:n.state[r][e]})})))})))},j=l.b.div(x()),w=l.b.div(k()),E=e(3);function C(){var n=Object(c.a)(["\n  ","\n  background: ",";\n  color: #131313;\n  border-radius: 15px;\n  height: 60px;\n  width: 150px;\n  letter-spacing: 1px;\n  margin-top: 30px;\n\n  &:hover {\n    cursor: pointer;\n    background: ",";\n  }\n"]);return C=function(){return n},n}function X(){var n=Object(c.a)(["\n  height: 200px;\n"]);return X=function(){return n},n}function A(){var n=Object(c.a)(["\n  height: 200px\n  letter-spacing: 4px;\n  ","\n  -webkit-text-stroke: 1px black;\n"]);return A=function(){return n},n}function B(){var n=Object(c.a)(["\n  ","\n  background: ",";\n  padding: 20px;\n  border-radius: 12px;\n"]);return B=function(){return n},n}function W(){var n=Object(c.a)(["\n  ","\n  height: 100vh;\n  background: ",";\n  color: ",";\n"]);return W=function(){return n},n}function D(){var n=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]);return D=function(){return n},n}var J=[[" "," "," "],[" "," "," "],[" "," "," "]],R=function(){var n=Object(r.useState)("X"),t=Object(u.a)(n,2),e=t[0],a=t[1],o=Object(r.useState)(J),c=Object(u.a)(o,2),l=c[0],s=c[1];var b=S("X",l),d=S("O",l),f=b||d,h=Object(E.every)(Object(E.flatten)(l.map((function(n){return n.map((function(n){return" "!==n}))}))))||f;return i.a.createElement(G,null,i.a.createElement(M,{style:{visibility:h?"visible":"hidden"}},i.a.createElement("h1",{style:{marginBottom:"4px"}},"GAME OVER"),i.a.createElement("h2",{style:{marginTop:"4px",color:b?m.color1.dark:m.color2.dark}},f?"".concat(b?"X":"O"," has won the round!"):"- DRAW -")),i.a.createElement(I,null,i.a.createElement(O,{disabled:h,state:l,takeCell:function(n){return function(n,t){var r=t.x,i=t.y;if(" "===l[i][r]){var o=Object(E.cloneDeep)(l);o[i][r]=n,a("X"===e?"O":"X"),s(o)}}(e,n)}})),i.a.createElement(P,null,i.a.createElement(T,{style:{visibility:h?"visible":"hidden"},onClick:function(){return s(J)}},i.a.createElement("h3",null,"Play Again?"))))};function S(n,t){return Object(E.some)([Object(E.every)(t[0].map((function(t){return t.trim()&&t===n}))),Object(E.every)(t[1].map((function(t){return t.trim()&&t===n}))),Object(E.every)(t[2].map((function(t){return t.trim()&&t===n}))),Object(E.every)(t.map((function(t){return t[0].trim()&&t[0]===n}))),Object(E.every)(t.map((function(t){return t[1].trim()&&t[1]===n}))),Object(E.every)(t.map((function(t){return t[2].trim()&&t[2]===n}))),n===t[0][0]&&n===t[1][1]&&n===t[2][2],n===t[0][2]&&n===t[1][1]&&n===t[2][0]])}var z=Object(l.a)(D()),G=l.b.div(W(),z,m.color2.light,m.color1.dark),I=l.b.div(B(),z,m.color1.dark),M=l.b.div(A(),z),P=l.b.div(X()),T=l.b.div(C(),z,m.color1.dark,m.color1.bright);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[16,1,2]]]);
//# sourceMappingURL=main.1eedfccb.chunk.js.map