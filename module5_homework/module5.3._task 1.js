
let number = +prompt("Введите значение");
if (typeof(number) === "number" && !isNaN(number)){
   if (number % 2 === 0){
      console.log( `Число ${number} чётное`);
   }else if (number % 3 === 0){
      console.log(`Число ${number} не чётное`);
   }
}else{
     console.log("Упс вы ошиблись");
}