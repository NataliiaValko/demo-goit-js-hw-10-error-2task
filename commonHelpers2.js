import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as n}from"./assets/vendor-77e16229.js";const l=(t,o)=>{n.show({title:t,timeout:5e3,position:"center",message:o,color:t=="Fulfilled"?"green":"red"})},m=document.querySelector(".form"),a=t=>{t.preventDefault();const o=t.target.querySelectorAll('input[name="state"]');let i;o.forEach(e=>{e.checked&&(i=e.value)});const s=parseInt(t.target.elements.delay.value);new Promise((e,r)=>{setTimeout(()=>{i==="fulfilled"?e(`✅ Fulfilled promise in ${s}ms`):r(`❌ Rejected promise in ${s}ms`)},s)}).then(e=>{l("Fulfilled",e)}).catch(e=>{l("Rejected",e)})};m.addEventListener("submit",a);
//# sourceMappingURL=commonHelpers2.js.map
