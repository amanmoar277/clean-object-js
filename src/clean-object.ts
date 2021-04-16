type filterFunctionInput = number | string | boolean

interface ICleanObjParam {
    obj: any
    consideDeeperLevel?: boolean
}

const filterArrayElement = (ele: filterFunctionInput): boolean => {
    const ignoreValues = [0, false, ''];
    return ignoreValues.includes(ele) || !!ele
}

const cleanObj = ({obj, consideDeeperLevel = true}: ICleanObjParam): any => {
    // 0, false, ''  should not be removed
    // null, undefined  should be removed
    const ignoreValues: (number | string | boolean)[] = [0, false, ''];
    // primitive types are returned as it is
    if(typeof obj !== 'object') return obj;
    // remove unwanted elements from array
    else if(Array.isArray(obj)) return obj.filter(filterArrayElement);
    else {
        // object 
        Object.keys(obj).reduce((acc, key) => {
            // remove kay values if they doesn't consist any value
            if(!obj[key] && !ignoreValues.includes(obj[key])) delete acc[key];
            // if array then clean it up
            else if(Array.isArray(obj[key])) acc[key] = obj[key].filter(filterArrayElement);
            // if we have to consider deeper level, only then we do recursive call
            if(consideDeeperLevel) {
                // if it is nested object then call recursively
                if(typeof obj[key] === 'object') obj[key] = cleanObj({obj: obj[key]})
            }
            return acc;
        }, obj)
        return obj;
    }
}



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

const obj1 = [null, 1, '', 0, false, undefined, 'aman']

console.log(cleanObj({obj, consideDeeperLevel: false}))
console.log(cleanObj({obj}))
console.log(cleanObj({obj: obj1}))

export default {cleanObj}