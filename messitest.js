class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.a = 66
  }

  toString() {
    console.log( '(' + this.x + ', ' + this.y + ')'+  this.a);
  }
}

let a = new Point(1,2)
a.toString()

