let counter =document.querySelector('.counter');
let inbtn=document.querySelector('.inbtn')
let debtn=document.querySelector('.debtn')
counter.innerHTML=0;
function inde(event){
    if(event.target.innerHTML=='increase'){
        counter.innerHTML=Number(counter.innerHTML)+1;
    }
    else{
        counter.innerHTML=Number(counter.innerHTML)-1;

    }

}
inbtn.addEventListener('click',inde)
debtn.addEventListener('click',inde)