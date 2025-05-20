
function greeting(){
    let x=document.querySelector('input[name="rigth"]');
    x=right.value;
    let r=document.querySelector('input[name="left"]');
    let y=left.value; 
    a=document.querySelector('span');
    let m=Number(x)+Number(y);
    let h=document.querySelector('span');
    h.textContent=m;
}
b=document.querySelector('button');
b.addEventListener('click',greeting);