"use strict";
let a = 5;
let b = '23';
const c = true;
let d = b + a;
let e = ['qwe', '23'];
let e2 = ['qwe', '23', 1];
let f = 123;
function test(a) {
    return '';
}
const test2 = (a) => {
    return a * 2;
};
// e = e.map(x => x.toLocaleLowerCase())
e = e.map((x) => x.toLocaleLowerCase());
// e2 = e2.map((x: string) => x.toLocaleLowerCase())  // error
function countCoord(coord) {
}
function printIt(id) {
    if (typeof id === 'number') {
        console.log(id.toString());
    }
    else if (typeof id === 'string') {
        console.log(id.toLowerCase());
    }
}
function getSum(arr) {
    if (Array.isArray(arr)) {
    }
}
function test3(num) {
    return;
}
const x = undefined;
const y = null;
