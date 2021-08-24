let myMap = new Map;
myMap.set("яблоко", "зеленое");
myMap.set("вишня", "красная");
myMap.set("дыня", "желтая");
myMap.set("апельсин", "оранжевый");
for (let fruits of myMap.keys()){
  console.log("Ключ - " + fruits + ", значение - " + myMap.get(fruits))
}