const cost = 8;
const salesPrice = 15;
if (cost > 0 || salesPrice > 0){
  const totalCost = cost*1.2;
  const profit = (salesPrice - totalCost) *1000;
  console.log(profit);
} else {
  console.log("Erro, números inválidos (não pode ser menor ou igual a zero)");
}