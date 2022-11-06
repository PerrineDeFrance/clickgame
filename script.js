const btnRed=document.getElementById('btn-red');

//console.log(btnRed, 'bouton rouge');
const btnBlue=document.getElementById('btn-blue');
//console.log(btnBlue);


let counter=0;
console.log(counter,'counter at the beginning');

function add(){

    counter=counter +1;
    //console.log(counter,'counter after click');
    titre.innerText=counter;

} //pourquoi le compteur ne s'affiche pas à la place du titre ?

btnRed=addEventListener('click',function()
{
    //console.log('click on red');
add()
});

btnBlue=addEventListener('click',function()
{
    //console.log('click on blue');
add()
});

let titre=Document.getElementById('titre');

setTimeout(function(){
   
    btnRed.remove(); 
    btnBlue.remove(); 
}, 10000); 
//pourquoi les cercles ne disparaissent pas après 10sec ?




