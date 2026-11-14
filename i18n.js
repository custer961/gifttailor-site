(function(){var els=[].slice.call(document.querySelectorAll('[data-zh]')),phs=[].slice.call(document.querySelectorAll('[data-zh-ph]'));
els.forEach(function(e){e.dataset.en=e.innerHTML});phs.forEach(function(e){e.dataset.enPh=e.placeholder});
function apply(l){var z=l==='zh';els.forEach(function(e){e.innerHTML=z?e.dataset.zh:e.dataset.en});phs.forEach(function(e){e.placeholder=z?e.dataset.zhPh:e.dataset.enPh});
document.documentElement.lang=z?'zh-Hans':'en';var b=document.getElementById('lang');if(b)b.textContent=z?'EN':'中文';try{localStorage.setItem('gt_lang',l)}catch(x){}window.gtLang=l}
var q=new URLSearchParams(location.search).get('lang'),s=null;try{s=localStorage.getItem('gt_lang')}catch(x){}
apply(q==='zh'||q==='en'?q:(s==='zh'?'zh':'en'));window.tog=function(){apply(window.gtLang==='zh'?'en':'zh')}})();
