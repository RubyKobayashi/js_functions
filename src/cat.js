// constructor functions for Cat objects
function Cat(name, breed, age) {
  this.name = name;
  this.breed = breed;
  this.age = age;

};

Cat.prototype.waveTail = function(){
  return this.name + ' is waving tail';
};

var bobby = new Cat("Bobby", "Persian", 5)





console.log(bobby.name);
console.log(bobby.breed);
console.log(bobby.age);



console.log(bobby.waveTail());
