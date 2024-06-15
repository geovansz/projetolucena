let ul = document.querySelector('nav .ul');

function openmenu(){
    ul.classList.add('open');
}
function closemenu(){
    ul.classList.remove('open');
}

function leiamais(){
    var pontos=document.getElementById("pontos");
    var maisTexto=document.getElementById("mais");
    var btnLeiaMais=document.getElementById("btnLeiaMais");

    if(pontos.style.display === "none"){
    pontos.style.display="inline";
    maisTexto.style.display="none";
    btnLeiaMais.innerHTML="Leia Mais";
    }else{
     pontos.style.display="none";
     maisTexto.style.display="inline";
     btnLeiaMais.innerHTML="Leia Menos";
    }
}

function leiamais2(){
    var pontos=document.getElementById("pontos2");
    var maisTexto=document.getElementById("mais2");
    var btnLeiaMais=document.getElementById("btnLeiaMais2");

    if(pontos.style.display === "none"){
    pontos.style.display="inline";
    maisTexto.style.display="none";
    btnLeiaMais.innerHTML="Leia Mais";
    }else{
     pontos.style.display="none";
     maisTexto.style.display="inline";
     btnLeiaMais.innerHTML="Leia Menos";
    }
}