import{j as a}from"./index-Z587fgxQ.js";function f({className:r,children:n,...o}){return a.jsx("button",{className:r,...o,children:n})}function i(r){var n,o,t="";if(typeof r=="string"||typeof r=="number")t+=r;else if(typeof r=="object")if(Array.isArray(r)){var s=r.length;for(n=0;n<s;n++)r[n]&&(o=i(r[n]))&&(t&&(t+=" "),t+=o)}else for(o in r)r[o]&&(t&&(t+=" "),t+=o);return t}function u(){for(var r,n,o=0,t="",s=arguments.length;o<s;o++)(r=arguments[o])&&(n=i(r))&&(t&&(t+=" "),t+=n);return t}const c=({className:r,children:n})=>a.jsx("div",{className:u("container",r),children:n});export{f as B,c as C};