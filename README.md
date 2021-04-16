# clean-object-js

A library which </br>
--removed all key-value pairs which consist value as null or undefined, if object is passed as obj(i.e. argument)</br>
--removed all elements eluals to null or undefined, if array is provided</br>
--return the same if is of any other type</br>

PARAMS:</br>
object -> {obj, consideDeeperLevel}</br>

NOTE:</br>
--consideDeeperLevel is by default true</br>



Let's take an example:
```
const obj = {
    name: 'foo',
    surname: '',
    a: null,
    b: undefined,
    val: 0,
    val1: false,
    array: [null, 1, '', 0, false, undefined, 'aman'],
    nexted: {
        name: 'foo',
        surname: '',
        array: [null, 1, '', 0, false, undefined, 'aman'],
        a: null,
        b: undefined,
        nexted: {
            name: 'foo',
            surname: '',
            a: null,
            b: undefined,
        }
    }
}
```

#### 1. const result = cleanObj({obj, consideDeeperLevel: false})
```
{ name: 'foo',
  surname: '',
  val: 0,
  val1: false,
  array: [ 1, '', 0, false, 'aman' ],
  nexted:
   { name: 'foo',
     surname: '',
     array: [ null, 1, '', 0, false, undefined, 'aman' ],
     a: null,
     b: undefined,
     nexted: { name: 'foo', surname: '', a: null, b: undefined } 
   } 
}
```

#### 2. const result = cleanObj({obj})             
// OR         
#### const result = cleanObj({obj, consideDeeperLevel: true})
```
{ name: 'foo',
  surname: '',
  val: 0,
  val1: false,
  array: [ 1, '', 0, false, 'aman' ],
  nexted:
   { name: 'foo',
     surname: '',
     array: [ 1, '', 0, false, 'aman' ],
     nexted: { name: 'foo', surname: '' } 
   } 
}
```


For Array
```
const arr = [null, 1, '', 0, false, undefined, 'aman']

const result = cleanObj({obj: arr})
const result = cleanObj({obj: arr, consideDeeperLevel: false})

[ 1, '', 0, false, 'aman' ]

