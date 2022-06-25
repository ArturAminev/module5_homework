let myMap = new Map();

myMap.set("apple", "green");

myMap.set("strawberry", "red");

myMap.set("blueberry",  "blue");


for (let name of myMap.keys()){
  console.log(`ключ - ${name} , значение - ${myMap.get(name)}`); 

}