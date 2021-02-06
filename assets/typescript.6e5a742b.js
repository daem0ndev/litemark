const e="[A-Za-z$_][0-9A-Za-z$_]*",n=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],a=["true","false","null","undefined","NaN","Infinity"],s=[].concat(["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],["arguments","this","super","console","window","document","localStorage","module","global"],["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer"],["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"]);function t(e){return i("(?=",e,")")}function i(...e){return e.map((e=>{return(n=e)?"string"==typeof n?n:n.source:null;var n})).join("")}var r=function(r){const c={$pattern:e,keyword:n.concat(["type","namespace","typedef","interface","public","private","protected","implements","declare","abstract","readonly"]).join(" "),literal:a.join(" "),built_in:s.concat(["any","void","number","boolean","string","object","never","enum"]).join(" ")},o={className:"meta",begin:"@[A-Za-z$_][0-9A-Za-z$_]*"},l=(e,n,a)=>{const s=e.contains.findIndex((e=>e.label===n));if(-1===s)throw new Error("can not find mode to replace");e.contains.splice(s,1,a)},b=function(r){const c=e,o="<>",l="</>",b={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,n)=>{const a=e[0].length+e.index,s=e.input[a];"<"!==s?">"===s&&(((e,{after:n})=>{const a="</"+e[0].slice(1);return-1!==e.input.indexOf(a,n)})(e,{after:a})||n.ignoreMatch()):n.ignoreMatch()}},d={$pattern:e,keyword:n.join(" "),literal:a.join(" "),built_in:s.join(" ")},g="\\.([0-9](_?[0-9])*)",u="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",E={className:"number",variants:[{begin:`(\\b(${u})((${g})|\\.)?|(${g}))[eE][+-]?([0-9](_?[0-9])*)\\b`},{begin:`\\b(${u})\\b((${g})\\b|\\.)?|(${g})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},m={className:"subst",begin:"\\$\\{",end:"\\}",keywords:d,contains:[]},_={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[r.BACKSLASH_ESCAPE,m],subLanguage:"xml"}},y={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[r.BACKSLASH_ESCAPE,m],subLanguage:"css"}},f={className:"string",begin:"`",end:"`",contains:[r.BACKSLASH_ESCAPE,m]},p={className:"comment",variants:[r.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+",contains:[{className:"type",begin:"\\{",end:"\\}",relevance:0},{className:"variable",begin:c+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),r.C_BLOCK_COMMENT_MODE,r.C_LINE_COMMENT_MODE]},N=[r.APOS_STRING_MODE,r.QUOTE_STRING_MODE,_,y,f,E,r.REGEXP_MODE];m.contains=N.concat({begin:/\{/,end:/\}/,keywords:d,contains:["self"].concat(N)});const A=[].concat(p,m.contains),O=A.concat([{begin:/\(/,end:/\)/,keywords:d,contains:["self"].concat(A)}]),S={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:d,contains:O};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:d,exports:{PARAMS_CONTAINS:O},illegal:/#(?![$_A-z])/,contains:[r.SHEBANG({label:"shebang",binary:"node",relevance:5}),{label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},r.APOS_STRING_MODE,r.QUOTE_STRING_MODE,_,y,f,p,E,{begin:i(/[{,\n]\s*/,t(i(/(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/,c+"\\s*:"))),relevance:0,contains:[{className:"attr",begin:c+t("\\s*:"),relevance:0}]},{begin:"("+r.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[p,r.REGEXP_MODE,{className:"function",begin:"(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+r.UNDERSCORE_IDENT_RE+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:r.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:d,contains:O}]}]},{begin:/,/,relevance:0},{className:"",begin:/\s/,end:/\s*/,skip:!0},{variants:[{begin:o,end:l},{begin:b.begin,"on:begin":b.isTrulyOpeningTag,end:b.end}],subLanguage:"xml",contains:[{begin:b.begin,end:b.end,skip:!0,contains:["self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/[{;]/,excludeEnd:!0,keywords:d,contains:["self",r.inherit(r.TITLE_MODE,{begin:c}),S],illegal:/%/},{beginKeywords:"while if switch catch for"},{className:"function",begin:r.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,contains:[S,r.inherit(r.TITLE_MODE,{begin:c})]},{variants:[{begin:"\\."+c},{begin:"\\$"+c}],relevance:0},{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"[\]]/,contains:[{beginKeywords:"extends"},r.UNDERSCORE_TITLE_MODE]},{begin:/\b(?=constructor)/,end:/[{;]/,excludeEnd:!0,contains:[r.inherit(r.TITLE_MODE,{begin:c}),"self",S]},{begin:"(get|set)\\s+(?="+c+"\\()",end:/\{/,keywords:"get set",contains:[r.inherit(r.TITLE_MODE,{begin:c}),{begin:/\(\)/},S]},{begin:/\$[(.]/}]}}(r);return Object.assign(b.keywords,c),b.exports.PARAMS_CONTAINS.push(o),b.contains=b.contains.concat([o,{beginKeywords:"namespace",end:/\{/,excludeEnd:!0},{beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:"interface extends"}]),l(b,"shebang",r.SHEBANG()),l(b,"use_strict",{className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/}),b.contains.find((e=>"function"===e.className)).relevance=0,Object.assign(b,{name:"TypeScript",aliases:["ts"]}),b},c=Object.freeze(Object.assign(Object.create(null),r,{[Symbol.toStringTag]:"Module",default:r}));export{c as t};