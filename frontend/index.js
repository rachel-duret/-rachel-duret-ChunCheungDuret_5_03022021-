// add goods in html
function displayTeddies(href, src, title, price){
    let box = document.getElementById('teddies');
    let a = document.createElement('a');
    let div = document.createElement('div');
    let img = document.createElement('img');
    let h2 = document.createElement('h2')
    let p = document.createElement('p')
    let i = document.createElement('i')
    a.href = href;
    div.className = "teddy";
    img.src = src;
    h2.innerText = title;
    p.innerText = price ;
    i.className ="fas fa-euro-sign"
    box.appendChild(a);
    a.appendChild(div);
    div.appendChild(img);
    div.appendChild(h2);
    div.appendChild(p);
    p.appendChild(i)
    console.log(box)
    
    
}
displayTeddies('./produits/norbert.html', '../images/teddy_1.jpg', 'Norbert', 2900);
displayTeddies('./produits/arnold.html','../images/teddy_2.jpg', 'Arnold', 3900);
displayTeddies('./produits/lenny_and_carl.html','../images/teddy_3.jpg', 'Lenny and Carl', 5900);
displayTeddies('./produits/gustav.html','../images/teddy_4.jpg', 'Gustav', 4500);
displayTeddies('./produits/garfunkel.html','../images/teddy_5.jpg', 'Garfunkel', 5500);

//create page norbert.html





