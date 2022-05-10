### Data


``` js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
const people = [
  {
    name: 'Mike Smith',
    family: {
      mother: 'Jane Smith',
      father: 'Harry Smith',
      sister: 'Samantha Smith',
    },
    age: 35,
  },
  {
    name: 'Tom Jones',
    family: {
      mother: 'Norah Jones',
      father: 'Richard Jones',
      brother: 'Howard Jones',
    },
    age: 25,
  },
];
*/

/**
 for (const { Title: t, Description: d } of ArticleData) {
  console.log('Title: ' + t + ', Description: ' + d);
}
```

Object initializer
===
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer

this url linked to new Object(), Object.create(), Object, Primitive, JSON, Date, JSON.parse(),
Property accessors, SyntaxError, Functions, getter, setter, Method definitions, Spread syntax (...), Object.assign()
``` js
const object1 = { a: 'foo', b: 42, c: {} };

console.log(object1.a);
// expected output: "foo"

const a = 'foo';
const b = 42;
const c = {};
const object2 = { a: a, b: b, c: c };

console.log(object2.b);
// expected output: 42

const object3 = { a, b, c };

console.log(object3.a);
// expected output: "foo"
```
