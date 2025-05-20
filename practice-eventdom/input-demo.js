function greeting(){
    console.log('こんにちは');
i=document.querySelector('input[name="shimei"]');
let shimei=i.value;
aisatu='こんにちは'+shimei+'さん';
p=document.querySelector('p#message');
p.textContent=aisatu;
}
  
  
let b=document.querySelector('button#print');
b.addEventListener('click',greeting);
