# clean-object-js

A library which </br>
--removes all key-value pairs which consist value as null or undefined, if object is passed as obj(i.e. argument)</br>
--removes all elements equals to null or undefined, if array is provided to it</br>
--return the same if is of any other type</br>

PARAMS:</br>
object -> {obj, consideDeeperLevel, discardFalsyValues}</br>

NOTE:</br>
--consideDeeperLevel is by default true</br>
--discardFalsyValues is by default false</br>
--these values will not be removed [0, false, ''] if we don't pass discardFalsyValues != true




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
const result = cleanObj({obj, consideDeeperLevel: false, discardFalsyValues: true})
```
{ 
    name: 'foo',
    array: [ 1, 'aman' ],
    nexted: { 
        name: 'foo',
        surname: '',
        array: [ 1, '', 0, false, 'aman' ],
        nexted: { name: 'foo', surname: '' } 
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
const result = cleanObj({obj, consideDeeperLevel: true, discardFalsyValues: true})
```
{ 
    name: 'foo',
    array: [ 1, 'aman' ],
    nexted: { 
        name: 'foo', 
        array: [ 1, 'aman' ], 
        nexted: { name: 'foo' } 
    } 
}
```


For Array
```
const arr = [null, 1, '', 0, false, undefined, 'aman']

const result1 = cleanObj({obj: arr})
const result2 = cleanObj({obj: arr, consideDeeperLevel: false})

[ 1, '', 0, false, 'aman' ]


const result3 = cleanObj({obj: obj1, discardFalsyValues: true})
[ 1, 'aman' ]


