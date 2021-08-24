let x = prompt ('Введите что-нибудь:')
x = +x;
let result = typeof x;
let y = 0;
  if (isNaN(x)){
    console.log('Упс, кажется, вы ошиблись')}
  else if (result == "number"){
    y = x % 2 == 0 ? console.log("Вы ввели четное число") : console.log("Вы ввели не четное число")}