
let x='',s=document.getElementById('s-display');
function u(){s.textContent=x||'0';}
document.querySelectorAll('.btn').forEach(b=>b.onclick=()=>pressSci(b.dataset.value,b.dataset.action));

function pressSci(v,a){
 if(a==='clear') x='';
 else if(a==='back') x=x.slice(0,-1);
 else if(a==='equals'){
  try{x=String(Function('return '+x.replace(/\^/g,'**'))())}catch(err){x='Error'}
 } else x+=v;
 u();
}

document.addEventListener('keydown',k=>{
 const key=k.key;
 if(/[0-9.+\-*/]/.test(key)) pressSci(key);
 else if(key==='Enter') pressSci(null,'equals');
 else if(key==='Backspace') pressSci(null,'back');
 else if(key==='c') pressSci(null,'clear');
});
u();
