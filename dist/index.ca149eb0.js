function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t=globalThis,r={},n={},o=t.parcelRequire8edb;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var u=Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){n[e]=t},t.parcelRequire8edb=o);var u=o.register;u("5sKyw",function(t,r){e(t.exports,"default",()=>i);var n=o("aZg8W"),u=o("7qKRb"),a=o("2uohp"),i=function(e,t,r){if(n.default.randomUUID&&!t&&!e)return(0,n.default).randomUUID();let o=(e=e||{}).random||(e.rng||(0,u.default))();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t){r=r||0;for(let e=0;e<16;++e)t[r+e]=o[e];return t}return(0,a.unsafeStringify)(o)}}),u("aZg8W",function(t,r){e(t.exports,"default",()=>n);var n={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)}}),u("7qKRb",function(t,r){let n;e(t.exports,"default",()=>u);let o=new Uint8Array(16);function u(){if(!n&&!(n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(o)}}),u("2uohp",function(t,r){e(t.exports,"unsafeStringify",()=>a),e(t.exports,"default",()=>i);var n=o("64ZUg");let u=[];for(let e=0;e<256;++e)u.push((e+256).toString(16).slice(1));function a(e,t=0){return u[e[t+0]]+u[e[t+1]]+u[e[t+2]]+u[e[t+3]]+"-"+u[e[t+4]]+u[e[t+5]]+"-"+u[e[t+6]]+u[e[t+7]]+"-"+u[e[t+8]]+u[e[t+9]]+"-"+u[e[t+10]]+u[e[t+11]]+u[e[t+12]]+u[e[t+13]]+u[e[t+14]]+u[e[t+15]]}var i=function(e,t=0){let r=a(e,t);if(!(0,n.default)(r))throw TypeError("Stringified UUID is invalid");return r}}),u("64ZUg",function(t,r){e(t.exports,"default",()=>u);var n=o("4meF0"),u=function(e){return"string"==typeof e&&(0,n.default).test(e)}}),u("4meF0",function(t,r){e(t.exports,"default",()=>n);var n=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i}),o("7qKRb");var a=(o("2uohp"),o("2uohp")),i=o("64ZUg"),l=function(e){let t;if(!(0,i.default)(e))throw TypeError("Invalid UUID");let r=new Uint8Array(16);return r[0]=(t=parseInt(e.slice(0,8),16))>>>24,r[1]=t>>>16&255,r[2]=t>>>8&255,r[3]=255&t,r[4]=(t=parseInt(e.slice(9,13),16))>>>8,r[5]=255&t,r[6]=(t=parseInt(e.slice(14,18),16))>>>8,r[7]=255&t,r[8]=(t=parseInt(e.slice(19,23),16))>>>8,r[9]=255&t,r[10]=(t=parseInt(e.slice(24,36),16))/1099511627776&255,r[11]=t/4294967296&255,r[12]=t>>>24&255,r[13]=t>>>16&255,r[14]=t>>>8&255,r[15]=255&t,r};function f(e,t,r){function n(e,n,o,u){var i;if("string"==typeof e&&(e=function(e){e=unescape(encodeURIComponent(e));let t=[];for(let r=0;r<e.length;++r)t.push(e.charCodeAt(r));return t}(e)),"string"==typeof n&&(n=l(n)),(null===(i=n)||void 0===i?void 0:i.length)!==16)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");let f=new Uint8Array(16+e.length);if(f.set(n),f.set(e,n.length),(f=r(f))[6]=15&f[6]|t,f[8]=63&f[8]|128,o){u=u||0;for(let e=0;e<16;++e)o[u+e]=f[e];return o}return(0,a.unsafeStringify)(f)}try{n.name=e}catch(e){}return n.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",n.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",n}function c(e){return(e+64>>>9<<4)+14+1}function s(e,t){let r=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(r>>16)<<16|65535&r}function p(e,t,r,n,o,u){var a;return s((a=s(s(t,e),s(n,u)))<<o|a>>>32-o,r)}function d(e,t,r,n,o,u,a){return p(t&r|~t&n,e,t,o,u,a)}function g(e,t,r,n,o,u,a){return p(t&n|r&~n,e,t,o,u,a)}function h(e,t,r,n,o,u,a){return p(t^r^n,e,t,o,u,a)}function y(e,t,r,n,o,u,a){return p(r^(t|~n),e,t,o,u,a)}function U(e,t){return e<<t|e>>>32-t}f("v3",48,function(e){if("string"==typeof e){let t=unescape(encodeURIComponent(e));e=new Uint8Array(t.length);for(let r=0;r<t.length;++r)e[r]=t.charCodeAt(r)}return function(e){let t=[],r=32*e.length,n="0123456789abcdef";for(let o=0;o<r;o+=8){let r=e[o>>5]>>>o%32&255,u=parseInt(n.charAt(r>>>4&15)+n.charAt(15&r),16);t.push(u)}return t}(function(e,t){e[t>>5]|=128<<t%32,e[c(t)-1]=t;let r=1732584193,n=-271733879,o=-1732584194,u=271733878;for(let t=0;t<e.length;t+=16){let a=r,i=n,l=o,f=u;r=d(r,n,o,u,e[t],7,-680876936),u=d(u,r,n,o,e[t+1],12,-389564586),o=d(o,u,r,n,e[t+2],17,606105819),n=d(n,o,u,r,e[t+3],22,-1044525330),r=d(r,n,o,u,e[t+4],7,-176418897),u=d(u,r,n,o,e[t+5],12,1200080426),o=d(o,u,r,n,e[t+6],17,-1473231341),n=d(n,o,u,r,e[t+7],22,-45705983),r=d(r,n,o,u,e[t+8],7,1770035416),u=d(u,r,n,o,e[t+9],12,-1958414417),o=d(o,u,r,n,e[t+10],17,-42063),n=d(n,o,u,r,e[t+11],22,-1990404162),r=d(r,n,o,u,e[t+12],7,1804603682),u=d(u,r,n,o,e[t+13],12,-40341101),o=d(o,u,r,n,e[t+14],17,-1502002290),n=d(n,o,u,r,e[t+15],22,1236535329),r=g(r,n,o,u,e[t+1],5,-165796510),u=g(u,r,n,o,e[t+6],9,-1069501632),o=g(o,u,r,n,e[t+11],14,643717713),n=g(n,o,u,r,e[t],20,-373897302),r=g(r,n,o,u,e[t+5],5,-701558691),u=g(u,r,n,o,e[t+10],9,38016083),o=g(o,u,r,n,e[t+15],14,-660478335),n=g(n,o,u,r,e[t+4],20,-405537848),r=g(r,n,o,u,e[t+9],5,568446438),u=g(u,r,n,o,e[t+14],9,-1019803690),o=g(o,u,r,n,e[t+3],14,-187363961),n=g(n,o,u,r,e[t+8],20,1163531501),r=g(r,n,o,u,e[t+13],5,-1444681467),u=g(u,r,n,o,e[t+2],9,-51403784),o=g(o,u,r,n,e[t+7],14,1735328473),n=g(n,o,u,r,e[t+12],20,-1926607734),r=h(r,n,o,u,e[t+5],4,-378558),u=h(u,r,n,o,e[t+8],11,-2022574463),o=h(o,u,r,n,e[t+11],16,1839030562),n=h(n,o,u,r,e[t+14],23,-35309556),r=h(r,n,o,u,e[t+1],4,-1530992060),u=h(u,r,n,o,e[t+4],11,1272893353),o=h(o,u,r,n,e[t+7],16,-155497632),n=h(n,o,u,r,e[t+10],23,-1094730640),r=h(r,n,o,u,e[t+13],4,681279174),u=h(u,r,n,o,e[t],11,-358537222),o=h(o,u,r,n,e[t+3],16,-722521979),n=h(n,o,u,r,e[t+6],23,76029189),r=h(r,n,o,u,e[t+9],4,-640364487),u=h(u,r,n,o,e[t+12],11,-421815835),o=h(o,u,r,n,e[t+15],16,530742520),n=h(n,o,u,r,e[t+2],23,-995338651),r=y(r,n,o,u,e[t],6,-198630844),u=y(u,r,n,o,e[t+7],10,1126891415),o=y(o,u,r,n,e[t+14],15,-1416354905),n=y(n,o,u,r,e[t+5],21,-57434055),r=y(r,n,o,u,e[t+12],6,1700485571),u=y(u,r,n,o,e[t+3],10,-1894986606),o=y(o,u,r,n,e[t+10],15,-1051523),n=y(n,o,u,r,e[t+1],21,-2054922799),r=y(r,n,o,u,e[t+8],6,1873313359),u=y(u,r,n,o,e[t+15],10,-30611744),o=y(o,u,r,n,e[t+6],15,-1560198380),n=y(n,o,u,r,e[t+13],21,1309151649),r=y(r,n,o,u,e[t+4],6,-145523070),u=y(u,r,n,o,e[t+11],10,-1120210379),o=y(o,u,r,n,e[t+2],15,718787259),n=y(n,o,u,r,e[t+9],21,-343485551),r=s(r,a),n=s(n,i),o=s(o,l),u=s(u,f)}return[r,n,o,u]}(function(e){if(0===e.length)return[];let t=8*e.length,r=new Uint32Array(c(t));for(let n=0;n<t;n+=8)r[n>>5]|=(255&e[n/8])<<n%32;return r}(e),8*e.length))}),f("v5",80,function(e){let t=[1518500249,1859775393,2400959708,3395469782],r=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof e){let t=unescape(encodeURIComponent(e));e=[];for(let r=0;r<t.length;++r)e.push(t.charCodeAt(r))}else Array.isArray(e)||(e=Array.prototype.slice.call(e));e.push(128);let n=Math.ceil((e.length/4+2)/16),o=Array(n);for(let t=0;t<n;++t){let r=new Uint32Array(16);for(let n=0;n<16;++n)r[n]=e[64*t+4*n]<<24|e[64*t+4*n+1]<<16|e[64*t+4*n+2]<<8|e[64*t+4*n+3];o[t]=r}o[n-1][14]=(e.length-1)*8/4294967296,o[n-1][14]=Math.floor(o[n-1][14]),o[n-1][15]=(e.length-1)*8&4294967295;for(let e=0;e<n;++e){let n=new Uint32Array(80);for(let t=0;t<16;++t)n[t]=o[e][t];for(let e=16;e<80;++e)n[e]=U(n[e-3]^n[e-8]^n[e-14]^n[e-16],1);let u=r[0],a=r[1],i=r[2],l=r[3],f=r[4];for(let e=0;e<80;++e){let r=Math.floor(e/20),o=U(u,5)+function(e,t,r,n){switch(e){case 0:return t&r^~t&n;case 1:case 3:return t^r^n;case 2:return t&r^t&n^r&n}}(r,a,i,l)+f+t[r]+n[e]>>>0;f=l,l=i,i=U(a,30)>>>0,a=u,u=o}r[0]=r[0]+u>>>0,r[1]=r[1]+a>>>0,r[2]=r[2]+i>>>0,r[3]=r[3]+l>>>0,r[4]=r[4]+f>>>0}return[r[0]>>24&255,r[0]>>16&255,r[0]>>8&255,255&r[0],r[1]>>24&255,r[1]>>16&255,r[1]>>8&255,255&r[1],r[2]>>24&255,r[2]>>16&255,r[2]>>8&255,255&r[2],r[3]>>24&255,r[3]>>16&255,r[3]>>8&255,255&r[3],r[4]>>24&255,r[4]>>16&255,r[4]>>8&255,255&r[4]]});var i=o("64ZUg");
//# sourceMappingURL=index.ca149eb0.js.map
