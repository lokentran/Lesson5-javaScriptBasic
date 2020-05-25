

function calculator1() {

    let a = Number(document.getElementById('a').value);
    let b = Number(document.getElementById('b').value);
    let operStr = a + document.getElementById('plus').innerHTML + b + " = ";
    let operResult = Number(a + b);
    document.getElementById('expression').innerHTML =  operStr ;
    document.getElementById('endResult').innerHTML =  operResult ;
    
 

}

function calculator2() {
    let a = Number(document.getElementById('a').value);
    let b = Number(document.getElementById('b').value);
    let operStr = a + document.getElementById('sub').innerHTML + b + " = ";
    let operResult = Number(a - b);
    document.getElementById('expression').innerHTML =  operStr ;
    document.getElementById('endResult').innerHTML =  operResult ;

    
}