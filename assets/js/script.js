const elementclone = document.querySelector('#box');
const elementparent = document.getElementById('cours');

for(var i=0;i<4;i++){
    const clone = elementclone.cloneNode(true);
    elementparent.appendChild(clone);
    console.log(clone.id=`box${i}`);
}

 console.log(document.getElementById('box0').getElementsByTagName('img'));

var isBasketOpen = false ;  //Affichage du panier

document.getElementById('button_basket').addEventListener('mouseover', openBasket);

function openBasket(){
    if(isBasketOpen == false){
        isBasketOpen = true ;
        document.getElementById('basket').style.display = block ;
    }
    else if(isBasketOpen == true){
        isBasketOpen = false ;
        document.getElementById('basket').style.display = none ;
    }
}

document.getElementById('basket').addEventListener('mouseleave', function(){
    setInterval(openBasket, 2000);
});

/* 
document.getElementById("ajout").addEventListener('click', function () {
    clone = document.getElementById("box").cloneNode(true);
    document.getElementById("cours").appendChild(clone);
}); */