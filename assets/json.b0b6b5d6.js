var e=function(e){const n={literal:"true false null"},t=[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE],a=[e.QUOTE_STRING_MODE,e.C_NUMBER_MODE],l={end:",",endsWithParent:!0,excludeEnd:!0,contains:a,keywords:n},i={begin:/\{/,end:/\}/,contains:[{className:"attr",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE],illegal:"\\n"},e.inherit(l,{begin:/:/})].concat(t),illegal:"\\S"},c={begin:"\\[",end:"\\]",contains:[e.inherit(l)],illegal:"\\S"};return a.push(i,c),t.forEach((function(e){a.push(e)})),{name:"JSON",contains:a,keywords:n,illegal:"\\S"}},n=Object.freeze(Object.assign(Object.create(null),e,{[Symbol.toStringTag]:"Module",default:e}));export{n as j};