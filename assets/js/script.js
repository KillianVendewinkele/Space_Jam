const elementclone = document.querySelector('#box');
const elementparent = document.getElementById('cours');

for (var i = 0; i < 4; i++) {
    const clone = elementclone.cloneNode(true);
    elementparent.appendChild(clone);
    console.log(clone.id = `box${i}`);
    console.log( child = document.getElementById(`box${i}`).children);
    if (i == 0) {
        child[0].src = 'assets/img/php.png';
        child[1].innerText="PHP 8";
    }
    else if(i ==1){
        child[0].src = 'assets/img/react.png';
        child[1].innerText="React JS";
    }
    else if(i ==2){
        child[0].src = 'assets/img/Node.png';
        child[1].innerText="Node JS";
    }
    else{
        child[0].src = 'assets/img/mysql.png';
        child[1].innerText="My SQL";
    }
}



var isBasketOpen = false;  //Affichage du panier

    document.getElementById('button_basket').addEventListener('mouseover', openBasket);
    document.getElementById('button_basket').addEventListener('mouseleave', closeBasket);

    function openBasket() {
        if (isBasketOpen == false) {
            isBasketOpen = true;
            document.getElementById('basket').style.display = 'block';
        }
    };  

    function closeBasket(){
        if (isBasketOpen == true) {
            isBasketOpen = false;
            document.getElementById('basket').style.display = 'none';
        }
    };
   
    document.getElementById('basket').addEventListener('mouseover', function () {
        document.getElementById('basket').style.display = 'block' ;
    });
    document.getElementById('basket').addEventListener('mouseleave', function () {
        document.getElementById('basket').style.display = 'none' ;
    });

/*
document.getElementById("ajout").addEventListener('click', function () {
    clone = document.getElementById("box").cloneNode(true);
    document.getElementById("cours").appendChild(clone);
}); p*/