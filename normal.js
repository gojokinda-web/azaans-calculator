
let e='',d=document.getElementById('display');
function r(){d.textContent=e||'0';}
document.querySelectorAll('.btn').forEach(b=>b.onclick=()=>press(b.dataset.value,b.dataset.action));

function press(v,a){
 if(a==='clear') e='';
 else if(a==='back') e=e.slice(0,-1);
 else if(a==='equals'){
  try{e=String(Function('return '+e)())}catch(err){e='Error'}
 } else e+=v;
 r();
}

document.addEventListener('keydown',k=>{
 const key=k.key;
 if(/[0-9.+\-*/]/.test(key)) press(key);
 else if(key==='Enter') press(null,'equals');
 else if(key==='Backspace') press(null,'back');
 else if(key==='c') press(null,'clear');
});
r();
