const results = document.getElementById('result');
let table = [];
function afficher(val) 
{
     table = results.textContent +=val;
}
console.log(results.textContent);
function effacer() 
{
    results.textContent = null;
}
function calcul() 
{ 
    let result = eval(results.textContent);
    results.textContent = result;
    console.log(result);
} 