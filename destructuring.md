## Destructuring assignment
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

### Syntax
``` js
let a, b, rest;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]

({ a, b } = { a: 10, b: 20 });
console.log(a); // 10
console.log(b); // 20

// Stage 4(finished) proposal
({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}
```
#### Description
The destructuring assignment uses similar syntax, but on the left-hand side of the assignment to define what values to unpack from the sourced variable.
``` js
  const x = [1, 2, 3, 4, 5];
  const [y, z] = x;
  console.log(y); // 1
  console.log(z); // 2
```
my tried... results different from vsCode and Mozilla website  
``` js
  const obj = { a: 'foo', b: 42, c: {} };
  const { a: fo, ...rest } = obj;
  console.log(fo); // foo                               // > "foo"
  console.log(rest); // {"b": 42, "c": {}}              // > Object { b: 42, c: Object {  } }
```

### Object destructuring
Basic assignment
``` js
const user = {
    id: 42,
    is_verified: true
};

const {id, is_verified} = user;

console.log(id); // 42
console.log(is_verified); // true
```


#### Unpacking fields from objects passed as a function parameter
This unpacks the id, displayName and firstName from the user object and prints them.
``` js  
  const user = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
      firstName: 'John',
      lastName: 'Doe',
    },
  };

  function userId({ id }) {
    return id;
  }

  function whois({ displayName, fullName: { firstName: name } }) {
    return `${displayName} is ${name}`;
  }

  console.log(userId(user)); // 42
  console.log(whois(user)); // "jdoe is John"
```

####  Setting a function parameter's default value
The current design is useful if you want to be able to call the function without supplying any parameters ...
``` js
  function drawChart({ size = 'big', coords = { x: 0, y: 0 }, radius = 25 } = {}) {
    console.log(size, coords, radius); //  big {"x": 18, "y": 30} 30
    // do some chart drawing
  }

  drawChart({
    coords: { x: 18, y: 30 },
    radius: 30,
  });
```  

#### For of iteration and destructuring
``` js
const people = [
  {
    name: 'Mike Smith',
    family: {
      mother: 'Jane Smith',
      father: 'Harry Smith',
      sister: 'Samantha Smith'
    },
    age: 35
  },
  {
    name: 'Tom Jones',
    family: {
      mother: 'Norah Jones',
      father: 'Richard Jones',
      brother: 'Howard Jones'
    },
    age: 25
  }
];

for (const {name: n, family: {father: f}} of people) {
  console.log('Name: ' + n + ', Father: ' + f);
}

// "Name: Mike Smith, Father: Harry Smith"
// "Name: Tom Jones, Father: Richard Jones"

```
---
ArticleDetailScreen.js
``` js
export default function ArticleDetailScreen({ route, navigation }) {
  const { item, stored } = route.params;

  const [isSaved, setIsSaved] = useState(stored);
  const detailId = item.id;
...
              <Icon {...props} name={isSaved ? 'bookmark' : 'bookmark-outline'} fill={Color.text} />  
```        
