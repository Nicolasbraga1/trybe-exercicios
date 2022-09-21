let INSS;
let IR;
const salary = 4000;
if (salary <= 1556.94) {
  INSS = salary * 0.08;
}
else if (salary > 1556.94 && salary <= 2594.92) {
  INSS = salary * 0.9;
}
else if (salary > 2594.92 && salary <=5189.82){
  INSS = salary * 0.11;
}
else {
  INSS = 570.88;
}
const newSalary = salary - INSS;
if (newSalary<=1903.98){
  IR = 0
}
else if (newSalary>1903.98 && newSalary <= 2826.65){
  IR = (newSalary*0.075) - 142.80;
}
else if (newSalary>2826.65 && newSalary <= 3751.05){
  IR = (newSalary*0.15) - 354.80;
}
else if (newSalary>3751.05 && newSalary <= 4664.68){
  IR = (newSalary*0.225) - 636.13;
}
else {
  IR = (newSalary*0.275) - 869.36
}
console.log("Seu salário é de R$" + (newSalary - IR));