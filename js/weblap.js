function nagyobb(){
    document.getElementById('tartalom').style.fontSize = '200%';
    document.getElementById("kisebb").style.display="inline";
    document.getElementById("nagyobb").style.display="none";
    
}

function kisebb(){
    document.getElementById('tartalom').style.fontSize = '125%';
    document.getElementById("kisebb").style.display="none";
    document.getElementById("nagyobb").style.display="inline";
}