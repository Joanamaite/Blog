
let postagem =  document.querySelector(".postagem");

document.querySelector(".saiba-mais1").addEventListener("click", () => {
    document.querySelector(".postagem").style.display = "none";
    document.querySelector(".postUnico").style.display = "flex";

    fetch('https://api-rest-post-diegocandido.herokuapp.com/postagens/')
        .then(response => response.json())
        .then(result => {
            document.querySelector(".textUnico").innerHTML = "Na última semana, o Google apresentou uma nova versão para desktop do seu serviço de notícias. Após um redesign profundo, o Google Notícias promete informar mais sobre os temas que os usuários acompanham, com mais profundidade e facilidade de acesso – seja lendo no smartphone ou, agora, no computador.";
            document.querySelector(".date_unico").innerHTML = "1/03/2022";
            document.querySelector(".titleUnico").innerHTML = "Google Notícias completa 20 anos com redesign e fundo de apoio ao jornalismo independente";
            document.querySelector(".imageUnico").src = "./images/Post1.jpg";

        })
        .catch(error => {
            console.error("Erro ao carregar os dados:", error);
        });

});

document.querySelector(".saiba-mais2").addEventListener("click", () => {
    document.querySelector(".postagem").style.display = "none";
    document.querySelector(".postUnico").style.display = "flex";

    fetch('https://api-rest-post-diegocandido.herokuapp.com/postagens/')
        .then(response => response.json())
        .then(result => {
            document.querySelector(".textUnico").innerHTML = "17 minutos para esgotar e apenas 2 minutos e 53 segundos para vender a primeira unidade. Estes são os números (incríveis) das vendas das 50 unidades especiais e ultra limitadas do My Ami Buggy, da Citroen.";
            document.querySelector(".date_unico").innerHTML = "1/03/2022";
            document.querySelector(".titleUnico").innerHTML = "Citroen Ami Buggy: O carro mais simpático que você já viu até hoje";
            document.querySelector(".imageUnico").src = "./images/post-3.jpg";

        })
        .catch(error => {
            console.error("Erro ao carregar os dados:", error);
        });

});

document.querySelector(".saiba-mais3").addEventListener("click", () => {
    document.querySelector(".postagem").style.display = "none";
    document.querySelector(".postUnico").style.display = "flex";

    fetch('https://api-rest-post-diegocandido.herokuapp.com/postagens/')
        .then(response => response.json())
        .then(result => {
            document.querySelector(".textUnico").innerHTML = "Durante a WWDC deste ano, a Apple anunciou diversas novidades em seus sistemas e produtos, incluindo um Macbook Air redesenhado e com a segunda geração de chips da empresa, o M2.";
            document.querySelector(".date_unico").innerHTML = "1/03/2022";
            document.querySelector(".titleUnico").innerHTML = "Vendas do Macbook Pro com chip M2 começam nesta sexta-feira (24)";
            document.querySelector(".imageUnico").src = "./images/post-2.jpg";

        })
        .catch(error => {
            console.error("Erro ao carregar os dados:", error);
        });

});

document.querySelector(".saiba-mais4").addEventListener("click", () => {
    document.querySelector(".postagem").style.display = "none";
    document.querySelector(".postUnico").style.display = "flex";

    fetch('https://api-rest-post-diegocandido.herokuapp.com/postagens/')
        .then(response => response.json())
        .then(result => {
            document.querySelector(".textUnico").innerHTML = "A ideia de criar mundos inteiramente fictícios e com possibilidades infinitas sempre encantou o ser humano. Seja nas antigas tradições orais, na literatura, nas telas do cinema ou nos jogos, mais recentemente, o desejo pela materialização daquilo que somente a criatividade e a mente podem elaborar move montanhas, além de muito dinheiro.";
            document.querySelector(".date_unico").innerHTML = "1/03/2022";
            document.querySelector(".titleUnico").innerHTML = "Como o metaverso e a web3 revolucionarão a vida e os negócios?";
            document.querySelector(".imageUnico").src = "./images/post-6.jpg";

        })
        .catch(error => {
            console.error("Erro ao carregar os dados:", error);
        });

});

document.querySelector(".voltar").addEventListener("click", () => {
    document.querySelector(".postUnico").style.display = "none";
    document.querySelector(".postagem").style.display = "block";


});

