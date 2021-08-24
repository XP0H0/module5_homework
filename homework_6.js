let arr = [1, 3, 3, 5, 6, 6];
let i = 0;
while (i < arr.length - 1) {
  if (arr[i] === arr[i + 1]){
    console.log(`${i} элемент списка равен ${i + 1}`)
  }
  else console.log(`${i} элемент списка не равен ${i + 1}`);
     i++
}