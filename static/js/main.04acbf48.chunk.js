(window.webpackJsonpstarwars=window.webpackJsonpstarwars||[]).push([[0],{24:function(e,n,t){e.exports=t(49)},29:function(e,n,t){},46:function(e,n,t){},49:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(19),o=t.n(c),u=(t(29),t(5)),l=t.n(u),i=(t(46),t(4)),f=t(2),s=t(3),b=t(6);function p(){var e=Object(f.a)(["\n    color: #443e3e;\n    text-shadow: 1px 1px 5px #fff;\n"]);return p=function(){return e},e}function d(){var e=Object(f.a)(["\n    color: #443e3e;\n    text-shadow: 1px 1px 5px #fff;\n"]);return d=function(){return e},e}function m(){var e=Object(f.a)(["\n    width: 300px;\n    border: 1px solid black;\n    border-radius: 10px;\n    margin: 25px 0;\n    height: 200px;\n    background-color: #5b839ebb;\n"]);return m=function(){return e},e}var x=s.a.div(m()),h=s.a.h3(d()),g=s.a.p(p());function E(e){var n=Object(a.useRef)(null);Object(a.useEffect)((function(){b.TweenMax.from(n,1,{y:1e3}).play()}),[e.character]);var t=e.character,c=Object(a.useState)(""),o=Object(i.a)(c,2),u=o[0],f=o[1];return Object(a.useEffect)((function(){""===u&&l.a.get(t.homeworld).then((function(e){f(e.data.name)})).catch((function(e){console.log(e)}))}),[u,f,t.homeworld]),r.a.createElement(x,{ref:function(e){n=e}},r.a.createElement(h,null,t.name),r.a.createElement(g,null,r.a.createElement("strong",null,"Height: "),t.height),r.a.createElement(g,null,r.a.createElement("strong",null,"Mass: "),t.mass),r.a.createElement(g,null,r.a.createElement("strong",null,"Birth year: "),t.birth_year),""!==u?r.a.createElement(g,null,r.a.createElement("strong",null,"Homeworld: "),u):r.a.createElement(r.a.Fragment,null))}function j(){var e=Object(f.a)(["\n    max-width: 900px;\n    min-height: 1350px;\n    \n    margin: 0 auto;\n    margin-bottom: 80px;\n    border: 1px solid black;\n    border-radius: 10px;\n\n    box-style: border-box;\n    padding: 50px;\n\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n\n    @media (max-width: 1040px) {\n        margin: 0 20px;\n        margin-bottom: 80px;\n      }\n\n"]);return j=function(){return e},e}function O(){var e=Object(f.a)(["\n    background-color: #af6e4b;\n    border: 1px solid black;\n    border-radius: 10px;\n    height: 2rem;\n    display: block;\n    position: absolute;\n    top: 30px;\n    left: 20px;\n    z-index: 2;\n"]);return O=function(){return e},e}function w(){var e=Object(f.a)(["\n    background-color: #af6e4b;\n    border: 1px solid black;\n    border-radius: 10px;\n    height: 2rem;\n    display: block;\n    position: absolute;\n    top: 30px;\n    right: 20px;\n    z-index: 2;\n"]);return w=function(){return e},e}var v=s.a.button(w()),k=s.a.button(O()),y=s.a.div(j());function S(){var e=Object(a.useState)("https://swapi.co/api/people/"),n=Object(i.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)([]),u=Object(i.a)(o,2),f=u[0],s=u[1],p=Object(a.useState)(""),d=Object(i.a)(p,2),m=d[0],x=d[1],h=Object(a.useState)(""),g=Object(i.a)(h,2),j=g[0],O=g[1],w=Object(a.useRef)(null),S=Object(a.useRef)(null);return Object(a.useEffect)((function(){b.TweenMax.from(w,1,{y:1e3}).play()}),[]),Object(a.useEffect)((function(){l.a.get(t).then((function(e){s(e.data.results),x(e.data.previous),O(e.data.next)})).catch((function(e){console.log(e)}))}),[t]),Object(a.useEffect)((function(){console.log(m)}),[m]),Object(a.useEffect)((function(){console.log(j)}),[j]),Object(a.useEffect)((function(){console.log(f)}),[f]),r.a.createElement(y,{ref:function(e){w=e}},m?r.a.createElement(k,{onClick:function(){c(m)}},"Previous"):r.a.createElement(r.a.Fragment,null),j?r.a.createElement(v,{onClick:function(){c(j)},ref:S},"Next"):r.a.createElement(r.a.Fragment,null),f.map((function(e,n){return r.a.createElement(E,{key:n,character:e})})))}var R=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"Header"},"React Wars"),r.a.createElement(S,null))};o.a.render(r.a.createElement(R,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.04acbf48.chunk.js.map