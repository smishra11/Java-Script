//Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.
//  Volume of a cylinder : V = πr2h
//  where r is the radius and h is the height of the cylinder.

class Cylinder {
  constructor(cylHeight, cylDiameter) {
    this.cylHeight = cylHeight;
    this.cylDiameter = cylDiameter;
  }
}

Cylinder.prototype.Volume = function () {
  var radius = this.cylDiameter / 2;
  return this.cylHeight * Math.PI * radius * radius;
};

var cyl = new Cylinder(7, 4);
console.log("volume =", cyl.Volume());
