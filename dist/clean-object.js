"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const filterArrayElement = (ele) => {
    const ignoreValues = [0, false, ''];
    return ignoreValues.includes(ele) || !!ele;
};
const cleanObj = ({ obj, consideDeeperLevel = true }) => {
    // 0, false, ''  should not be removed
    // null, undefined  should be removed
    const ignoreValues = [0, false, ''];
    // primitive types are returned as it is
    if (typeof obj !== 'object')
        return obj;
    // remove unwanted elements from array
    else if (Array.isArray(obj))
        return obj.filter(filterArrayElement);
    else {
        // object 
        Object.keys(obj).reduce((acc, key) => {
            // remove kay values if they doesn't consist any value
            if (!obj[key] && !ignoreValues.includes(obj[key]))
                delete acc[key];
            // if array then clean it up
            else if (Array.isArray(obj[key]))
                acc[key] = obj[key].filter(filterArrayElement);
            // if we have to consider deeper level, only then we do recursive call
            if (consideDeeperLevel) {
                // if it is nested object then call recursively
                if (typeof obj[key] === 'object')
                    obj[key] = cleanObj({ obj: obj[key] });
            }
            return acc;
        }, obj);
        return obj;
    }
};
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
};
const obj1 = [null, 1, '', 0, false, undefined, 'aman'];
console.log(cleanObj({ obj, consideDeeperLevel: false }));
console.log(cleanObj({ obj }));
console.log(cleanObj({ obj: obj1 }));
exports.default = { cleanObj };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xlYW4tb2JqZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NsZWFuLW9iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQU9BLE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxHQUF3QixFQUFXLEVBQUU7SUFDN0QsTUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLE9BQU8sWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFBO0FBQzlDLENBQUMsQ0FBQTtBQUVELE1BQU0sUUFBUSxHQUFHLENBQUMsRUFBQyxHQUFHLEVBQUUsa0JBQWtCLEdBQUcsSUFBSSxFQUFpQixFQUFPLEVBQUU7SUFDdkUsc0NBQXNDO0lBQ3RDLHFDQUFxQztJQUNyQyxNQUFNLFlBQVksR0FBa0MsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ25FLHdDQUF3QztJQUN4QyxJQUFHLE9BQU8sR0FBRyxLQUFLLFFBQVE7UUFBRSxPQUFPLEdBQUcsQ0FBQztJQUN2QyxzQ0FBc0M7U0FDakMsSUFBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUFFLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1NBQzdEO1FBQ0QsVUFBVTtRQUNWLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQ2pDLHNEQUFzRDtZQUN0RCxJQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQUUsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbEUsNEJBQTRCO2lCQUN2QixJQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDaEYsc0VBQXNFO1lBQ3RFLElBQUcsa0JBQWtCLEVBQUU7Z0JBQ25CLCtDQUErQztnQkFDL0MsSUFBRyxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxRQUFRO29CQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsRUFBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsQ0FBQTthQUN4RTtZQUNELE9BQU8sR0FBRyxDQUFDO1FBQ2YsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQ1AsT0FBTyxHQUFHLENBQUM7S0FDZDtBQUNMLENBQUMsQ0FBQTtBQUlELE1BQU0sR0FBRyxHQUFHO0lBQ1IsSUFBSSxFQUFFLEtBQUs7SUFDWCxPQUFPLEVBQUUsRUFBRTtJQUNYLENBQUMsRUFBRSxJQUFJO0lBQ1AsQ0FBQyxFQUFFLFNBQVM7SUFDWixHQUFHLEVBQUUsQ0FBQztJQUNOLElBQUksRUFBRSxLQUFLO0lBQ1gsS0FBSyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDO0lBQ2pELE1BQU0sRUFBRTtRQUNKLElBQUksRUFBRSxLQUFLO1FBQ1gsT0FBTyxFQUFFLEVBQUU7UUFDWCxLQUFLLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUM7UUFDakQsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsU0FBUztRQUNaLE1BQU0sRUFBRTtZQUNKLElBQUksRUFBRSxLQUFLO1lBQ1gsT0FBTyxFQUFFLEVBQUU7WUFDWCxDQUFDLEVBQUUsSUFBSTtZQUNQLENBQUMsRUFBRSxTQUFTO1NBQ2Y7S0FDSjtDQUNKLENBQUE7QUFFRCxNQUFNLElBQUksR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFBO0FBRXZELE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUMsR0FBRyxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBQyxDQUFDLENBQUMsQ0FBQTtBQUN2RCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsQ0FBQTtBQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUE7QUFFbEMsa0JBQWUsRUFBQyxRQUFRLEVBQUMsQ0FBQSJ9