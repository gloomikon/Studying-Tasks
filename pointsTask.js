'use strict';

const points = [];
let size = 0;
let fullLength = 0;

class Point {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}

const timer = setInterval(() => { checkLength(); }, 1000);

function checkLength() {
  createPoint(createSquare(size + 1),
    createCube(size + 1),
    createFib(size + 1)
  );
  console.log(points[size]);
  if (size > 0) {
    const currentLength = Math.sqrt(Math.pow(points[size].x - points[size - 1].x, 2) +
                                    Math.pow(points[size].y - points[size - 1].y, 2) +
                                    Math.pow(points[size].z - points[size - 1].z, 2));
    fullLength += currentLength;
    console.log(`currentLength = ${currentLength} | fullLength = ${fullLength}`);
  }
  size++;
  if (fullLength > 1000) {
    console.log(`Our fullLength is equal ${fullLength}`);
    clearInterval(timer);
  }
}

function createPoint(x, y, z) {
  const point = new Point(x, y, z);
  points.push(point);
}

function createSquare(number) {
  return Math.pow(number, 2);
}

function createCube(number) {
  return Math.pow(number, 3);
}

function createFib(number) {
  let a = 1, b = 1, c;
  if (number === 1 || number === 2) return 1;
  for (let i = 0; i < number - 2; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return c;
}
