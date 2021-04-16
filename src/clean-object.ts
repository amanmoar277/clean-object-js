type filterFunctionInput = number | string | boolean

interface ICleanObjParam {
    obj: any
    consideDeeperLevel?: boolean
    discardFalsyValues?: boolean
}

const filterArrayElement = (ele: filterFunctionInput, discardFalsyValues): boolean => {
    const ignoreValues = discardFalsyValues ? [] : [0, false, ''];
    return ignoreValues.includes(ele) || !!ele
}

const cleanObj = ({obj, consideDeeperLevel = true, discardFalsyValues = false}: ICleanObjParam): any => {
    // 0, false, ''  should not be removed
    // null, undefined  should be removed
    const ignoreValues: (number | string | boolean)[] = discardFalsyValues ? [] : [0, false, ''];
    // primitive types are returned as it is
    if(typeof obj !== 'object') return obj;
    // remove unwanted elements from array
    else if(Array.isArray(obj)) 
        return obj.filter(ele => filterArrayElement(ele, discardFalsyValues));
    else {
        // object 
        Object.keys(obj).reduce((acc, key) => {
            // remove kay values if they doesn't consist any value
            if(!obj[key] && !ignoreValues.includes(obj[key])) 
                delete acc[key];
            // if array then clean it up
            else if(Array.isArray(obj[key])) 
                acc[key] = obj[key].filter(ele => filterArrayElement(ele, discardFalsyValues));
            // if we have to consider deeper level, only then we do recursive call
            if(consideDeeperLevel) {
                // if it is nested object then call recursively
                if(typeof obj[key] === 'object') 
                    obj[key] = cleanObj({obj: obj[key], discardFalsyValues})
            }
            return acc;
        }, obj)
        return obj;
    }
}


export default {cleanObj}