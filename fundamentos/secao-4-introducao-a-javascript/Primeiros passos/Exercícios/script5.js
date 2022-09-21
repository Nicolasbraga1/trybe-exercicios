const chessPiece = "torre";
switch (chessPiece.toLowerCase()) {
  case "peão":
    console.log("Uma casa para frente");
     break;
  case "bispo":
    console.log("Em diagonal, sem limite de casas");
     break;
  case "torre":
    console.log("Na vertical e horizontal, sem limite de casas");
     break;
  case "cavalo":
    console.log("Em formato de L, tanto pra frente quanto pra trás");
     break;
  case "rainha":
    console.log("Da mesma forma que o rei, bispo e torre");
     break;
  case "rei":
    console.log("Uma casa em qualquer direção");
     break;
  default:
    console.log("Peça inválida");
     break;
}