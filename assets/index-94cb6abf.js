import{r as N}from"./index-da07a199.js";var j={exports:{}};j.exports;var P;function G(){return P||(P=1,function(w){const B=(s,e)=>(...o)=>`\x1B[${s(...o)+e}m`,h=(s,e)=>(...o)=>{const r=s(...o);return`\x1B[${38+e};5;${r}m`},y=(s,e)=>(...o)=>{const r=s(...o);return`\x1B[${38+e};2;${r[0]};${r[1]};${r[2]}m`},m=s=>s,c=(s,e,o)=>[s,e,o],g=(s,e,o)=>{Object.defineProperty(s,e,{get:()=>{const r=o();return Object.defineProperty(s,e,{value:r,enumerable:!0,configurable:!0}),r},enumerable:!0,configurable:!0})};let a;const d=(s,e,o,r)=>{a===void 0&&(a=N());const i=r?10:0,b={};for(const[C,v]of Object.entries(a)){const k=C==="ansi16"?"ansi":C;C===e?b[k]=s(o,i):typeof v=="object"&&(b[k]=s(v[e],i))}return b};function u(){const s=new Map,e={modifier:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},color:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],blackBright:[90,39],redBright:[91,39],greenBright:[92,39],yellowBright:[93,39],blueBright:[94,39],magentaBright:[95,39],cyanBright:[96,39],whiteBright:[97,39]},bgColor:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49],bgBlackBright:[100,49],bgRedBright:[101,49],bgGreenBright:[102,49],bgYellowBright:[103,49],bgBlueBright:[104,49],bgMagentaBright:[105,49],bgCyanBright:[106,49],bgWhiteBright:[107,49]}};e.color.gray=e.color.blackBright,e.bgColor.bgGray=e.bgColor.bgBlackBright,e.color.grey=e.color.blackBright,e.bgColor.bgGrey=e.bgColor.bgBlackBright;for(const[o,r]of Object.entries(e)){for(const[i,b]of Object.entries(r))e[i]={open:`\x1B[${b[0]}m`,close:`\x1B[${b[1]}m`},r[i]=e[i],s.set(b[0],b[1]);Object.defineProperty(e,o,{value:r,enumerable:!1})}return Object.defineProperty(e,"codes",{value:s,enumerable:!1}),e.color.close="\x1B[39m",e.bgColor.close="\x1B[49m",g(e.color,"ansi",()=>d(B,"ansi16",m,!1)),g(e.color,"ansi256",()=>d(h,"ansi256",m,!1)),g(e.color,"ansi16m",()=>d(y,"rgb",c,!1)),g(e.bgColor,"ansi",()=>d(B,"ansi16",m,!0)),g(e.bgColor,"ansi256",()=>d(h,"ansi256",m,!0)),g(e.bgColor,"ansi16m",()=>d(y,"rgb",c,!0)),e}Object.defineProperty(w,"exports",{enumerable:!0,get:u})}(j)),j.exports}var A,$;function M(){return $||($=1,A={stdout:!1,stderr:!1}),A}var S,I;function F(){return I||(I=1,S={stringReplaceAll:(h,y,m)=>{let c=h.indexOf(y);if(c===-1)return h;const g=y.length;let a=0,d="";do d+=h.substr(a,c-a)+y+m,a=c+g,c=h.indexOf(y,a);while(c!==-1);return d+=h.substr(a),d},stringEncaseCRLFWithFirstIndex:(h,y,m,c)=>{let g=0,a="";do{const d=h[c-1]==="\r";a+=h.substr(g,(d?c-1:c)-g)+y+(d?`\r
`:`
`)+m,g=c+1,c=h.indexOf(`
`,g)}while(c!==-1);return a+=h.substr(g),a}}),S}var x,_;function L(){if(_)return x;_=1;const w=/(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi,B=/(?:^|\.)(\w+)(?:\(([^)]*)\))?/g,h=/^(['"])((?:\\.|(?!\1)[^\\])*)\1$/,y=/\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi,m=new Map([["n",`
`],["r","\r"],["t","	"],["b","\b"],["f","\f"],["v","\v"],["0","\0"],["\\","\\"],["e","\x1B"],["a","\x07"]]);function c(u){const s=u[0]==="u",e=u[1]==="{";return s&&!e&&u.length===5||u[0]==="x"&&u.length===3?String.fromCharCode(parseInt(u.slice(1),16)):s&&e?String.fromCodePoint(parseInt(u.slice(2,-1),16)):m.get(u)||u}function g(u,s){const e=[],o=s.trim().split(/\s*,\s*/g);let r;for(const i of o){const b=Number(i);if(!Number.isNaN(b))e.push(b);else if(r=i.match(h))e.push(r[2].replace(y,(C,v,k)=>v?c(v):k));else throw new Error(`Invalid Chalk template style argument: ${i} (in style '${u}')`)}return e}function a(u){B.lastIndex=0;const s=[];let e;for(;(e=B.exec(u))!==null;){const o=e[1];if(e[2]){const r=g(o,e[2]);s.push([o].concat(r))}else s.push([o])}return s}function d(u,s){const e={};for(const r of s)for(const i of r.styles)e[i[0]]=r.inverse?null:i.slice(1);let o=u;for(const[r,i]of Object.entries(e))if(Array.isArray(i)){if(!(r in o))throw new Error(`Unknown Chalk style: ${r}`);o=i.length>0?o[r](...i):o[r]}return o}return x=(u,s)=>{const e=[],o=[];let r=[];if(s.replace(w,(i,b,C,v,k,O)=>{if(b)r.push(c(b));else if(v){const n=r.join("");r=[],o.push(e.length===0?n:d(u,e)(n)),e.push({inverse:C,styles:a(v)})}else if(k){if(e.length===0)throw new Error("Found extraneous } in Chalk template literal");o.push(d(u,e)(r.join(""))),r=[],e.pop()}else r.push(O)}),o.push(r.join("")),e.length>0){const i=`Chalk template literal is missing ${e.length} closing bracket${e.length===1?"":"s"} (\`}\`)`;throw new Error(i)}return o.join("")},x}var R,q;function U(){if(q)return R;q=1;const w=G(),{stdout:B,stderr:h}=M(),{stringReplaceAll:y,stringEncaseCRLFWithFirstIndex:m}=F(),{isArray:c}=Array,g=["ansi","ansi","ansi256","ansi16m"],a=Object.create(null),d=(n,t={})=>{if(t.level&&!(Number.isInteger(t.level)&&t.level>=0&&t.level<=3))throw new Error("The `level` option should be an integer from 0 to 3");const l=B?B.level:0;n.level=t.level===void 0?l:t.level};class u{constructor(t){return s(t)}}const s=n=>{const t={};return d(t,n),t.template=(...l)=>k(t.template,...l),Object.setPrototypeOf(t,e.prototype),Object.setPrototypeOf(t.template,t),t.template.constructor=()=>{throw new Error("`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.")},t.template.Instance=u,t.template};function e(n){return s(n)}for(const[n,t]of Object.entries(w))a[n]={get(){const l=b(this,i(t.open,t.close,this._styler),this._isEmpty);return Object.defineProperty(this,n,{value:l}),l}};a.visible={get(){const n=b(this,this._styler,!0);return Object.defineProperty(this,"visible",{value:n}),n}};const o=["rgb","hex","keyword","hsl","hsv","hwb","ansi","ansi256"];for(const n of o)a[n]={get(){const{level:t}=this;return function(...l){const f=i(w.color[g[t]][n](...l),w.color.close,this._styler);return b(this,f,this._isEmpty)}}};for(const n of o){const t="bg"+n[0].toUpperCase()+n.slice(1);a[t]={get(){const{level:l}=this;return function(...f){const p=i(w.bgColor[g[l]][n](...f),w.bgColor.close,this._styler);return b(this,p,this._isEmpty)}}}}const r=Object.defineProperties(()=>{},{...a,level:{enumerable:!0,get(){return this._generator.level},set(n){this._generator.level=n}}}),i=(n,t,l)=>{let f,p;return l===void 0?(f=n,p=t):(f=l.openAll+n,p=t+l.closeAll),{open:n,close:t,openAll:f,closeAll:p,parent:l}},b=(n,t,l)=>{const f=(...p)=>c(p[0])&&c(p[0].raw)?C(f,k(f,...p)):C(f,p.length===1?""+p[0]:p.join(" "));return Object.setPrototypeOf(f,r),f._generator=n,f._styler=t,f._isEmpty=l,f},C=(n,t)=>{if(n.level<=0||!t)return n._isEmpty?"":t;let l=n._styler;if(l===void 0)return t;const{openAll:f,closeAll:p}=l;if(t.indexOf("\x1B")!==-1)for(;l!==void 0;)t=y(t,l.close,l.open),l=l.parent;const E=t.indexOf(`
`);return E!==-1&&(t=m(t,p,f,E)),f+t+p};let v;const k=(n,...t)=>{const[l]=t;if(!c(l)||!c(l.raw))return t.join(" ");const f=t.slice(1),p=[l.raw[0]];for(let E=1;E<l.length;E++)p.push(String(f[E-1]).replace(/[{}\\]/g,"\\$&"),String(l.raw[E]));return v===void 0&&(v=L()),v(n,p.join(""))};Object.defineProperties(e.prototype,a);const O=e();return O.supportsColor=B,O.stderr=e({level:h?h.level:0}),O.stderr.supportsColor=h,R=O,R}export{U as r};
//# sourceMappingURL=index-94cb6abf.js.map
