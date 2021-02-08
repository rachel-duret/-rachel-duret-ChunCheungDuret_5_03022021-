// add prodacts in html

function displayTeddies( src, title, price){
    let box = document.getElementById('teddies');
    let div = document.createElement('div');
    let img = document.createElement('img');
    let h2 = document.createElement('h2')
    let p = document.createElement('p')
    let i = document.createElement('i')
    img.src = src;
    h2.innerText = title;
    p.innerText = price ;
    i.className ="fas fa-euro-sign"
    box.appendChild(div);
    div.appendChild(img);
    div.appendChild(h2);
    div.appendChild(p);
    p.appendChild(i)
    


   
    
}
displayTeddies('../images/teddy_1.jpg', 'Norbert', 29,00);
displayTeddies('../images/teddy_2.jpg', 'Arnold', 39,00);
displayTeddies('../images/teddy_3.jpg', 'Lenny and Carl', 59,00);
displayTeddies('../images/teddy_4.jpg', 'Gustav', 45,00);
displayTeddies('../images/teddy_5.jpg', 'Garfunkel', 55,00);


