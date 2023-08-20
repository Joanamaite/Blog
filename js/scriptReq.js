

fetch('https://api-rest-post-diegocandido.herokuapp.com/postagens/').then(response => response.json())
.then(result =>{

    console.log(result);
    
    document.querySelector(".date").innerHTML = result[0].postDate;
    document.querySelector(".title").innerHTML = result[0].title;
    let postagImg = `https://api-rest-post-diegocandido.herokuapp.com${result[0].thumbImage}`;
    document.querySelector(".image").src = postagImg;

    document.querySelector(".date_card1").innerHTML = result[2].postDate;
    document.querySelector(".title_card1").innerHTML = result[2].title;
    let postagImgCard2 = `https://api-rest-post-diegocandido.herokuapp.com${result[2].thumbImage}`;
    document.querySelector(".imagem_card2").src = postagImgCard2;

    document.querySelector(".date_card3").innerHTML = result[5].postDate;
    document.querySelector(".title_card3").innerHTML = result[5].title;
    let postagImgCard3 = `https://api-rest-post-diegocandido.herokuapp.com${result[5].thumbImage}`;
    document.querySelector(".imagem_card3").src = postagImgCard3;

    document.querySelector(".date_card").innerHTML = result[1].postDate;
    document.querySelector(".titlle_card").innerHTML = result[1].title;
    let postagImgCard = `https://api-rest-post-diegocandido.herokuapp.com${result[1].thumbImage}`;
    document.querySelector(".imagem_card1").src = postagImgCard;


    let postagImg1 = `https://api-rest-post-diegocandido.herokuapp.com${result[4].thumbImage}`;
    document.querySelector(".banner").style.backgroundImage =`url(${postagImg1})`;

    
    let postagImg2 = `https://api-rest-post-diegocandido.herokuapp.com${result[3].thumbImage}`;
    document.querySelector(".image1").style.backgroundImage =`url(${postagImg2})`;

    let postagImg3 = `https://api-rest-post-diegocandido.herokuapp.com${result[3].thumbImage}`;
    document.querySelector(".image2").style.backgroundImage =`url(${postagImg3})`;

    let postagImg4 = `https://api-rest-post-diegocandido.herokuapp.com${result[3].thumbImage}`;
    document.querySelector(".image3").style.backgroundImage =`url(${postagImg4})`;

    let postagImg5 = `https://api-rest-post-diegocandido.herokuapp.com${result[2].thumbImage}`;
    document.querySelector(".contact").style.backgroundImage =`url(${postagImg5})`;

     
});

