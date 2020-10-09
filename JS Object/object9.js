//Write a JavaScript program to calculate the area and perimeter of a circle
//Note: Create two methods to calculate the area and perimeter. The radius of the circle will be supplied by the user

function Circle(radius) {
  this.radius = radius;
  this.area = function () {
    return Math.PI * this.radius * this.radius;
  };
  this.perimeter = function () {
    return 2 * Math.PI * this.radius;
  };
}

let c = new Circle(3);
console.log('Area = ' + c.area().toFixed(2));
console.log('Perimater = ' + c.perimeter().toFixed(2));
