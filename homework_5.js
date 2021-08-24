const arr = [5, 2, 8, 7, 10, 1]
console.log('Количество элементов в массиве равно ' + arr.length);
let result = arr.map(function(item, index, array) {
  console.log(index + ' элемент массива равен ' + item)
});