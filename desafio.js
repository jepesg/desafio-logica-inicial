let nomeHeroi = "Aprendiz do Felipao"
let nivelHeroi = 8000
let elo = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante",]

console.log("bem-vindo a um novo mundo, inicie o desafio")



if (nivelHeroi < 1000) {
    console.log("O heroi de nome " + nomeHeroi + " esta no nivel de " + nivelHeroi + " e pertence ao elo: " + elo[0]);
} else if (nivelHeroi >= 1000 && nivelHeroi <= 2000) {
    console.log("O heroi de nome " + nomeHeroi + " esta no nivel de " + nivelHeroi + " e pertence ao elo: " + elo[1]);
} else if (nivelHeroi >= 2001 && nivelHeroi <= 5000) {
    console.log("O heroi de nome " + nomeHeroi + " esta no nivel de " + nivelHeroi + " e pertence ao elo: " + elo[2]);
} else if (nivelHeroi >= 5001 && nivelHeroi <= 7000) {
    console.log("O heroi de nome " + nomeHeroi + " esta no nivel de " + nivelHeroi + " e pertence ao elo: " + elo[3]);
} else if (nivelHeroi >= 7001 && nivelHeroi <= 8000) {
    console.log("O heroi de nome " + nomeHeroi + " esta no nivel de " + nivelHeroi + " e pertence ao elo: " + elo[4]);
} else if (nivelHeroi >= 8001 && nivelHeroi <= 9000) {
    console.log("O heroi de nome " + nomeHeroi + " esta no nivel de " + nivelHeroi + " e pertence ao elo: " + elo[5]);
} else if (nivelHeroi >= 9001 && nivelHeroi <= 10000) {
    console.log("O heroi de nome " + nomeHeroi + " esta no nivel de " + nivelHeroi + " e pertence ao elo: " + elo[6]);
} else {
    console.log("O heroi de nome " + nomeHeroi + " esta no nivel de " + nivelHeroi + " e pertence ao elo: " + elo[7]);
} 