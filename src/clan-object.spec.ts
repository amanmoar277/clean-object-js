import {expect, assert} from 'chai'
import cleanObj from './clean-object'

// https://www.chaijs.com/api/bdd/#method_own

const dummpObject1 = () => ({
    name: 'foo',
    surname: '',
    a: null,
    b: undefined,
    val: 0,
    val1: false,
    array: [null, 1, '', 0, false, undefined, 'aman'],
    nested: {
        name: 'foo',
        surname: '',
        array: [null, 1, '', 0, false, undefined, 'aman'],
        a: null,
        b: undefined,
        nested: {
            name: 'foo',
            surname: '',
            a: null,
            b: undefined,
        }
    }
})

const dummpObject2 = () => ([null, 1, '', 0, false, undefined, 'aman'])

describe('Clean Object upto first level only', () => {
    it('Should clean key-value pairs which are null or undefined', () => {
        const obj1 = dummpObject1();
        const result = cleanObj.cleanObj({obj: obj1, consideDeeperLevel: false});


        // https://www.chaijs.com/api/bdd/#method_own
        expect(result).to.not.have.own.property('a')
        expect(result).to.not.have.any.keys('a', 'b')
        expect(result.array).to.be.an('array').to.not.have.members([null, undefined])


        // this can be used in the case of, if we want to add some changes and they throw error
        // function cleanFails1() {
        //     !!result.a
        // }
        // function cleanFails2() {
        //     result.array = [null, 1, '', 0, false, undefined, 'aman']
        // }
        // function deepCleanFails1() {
        //     !!resultAfterDeepClean.nested.a
        // }
        // function deepCleanFails2() {
        //     resultAfterDeepClean.nested.array = [null, 1, '', 0, false, undefined, 'aman']
        // }
        // expect(updateFail1).to.throw(TypeError)     
    })
})


describe('Clean Object deeply', () => {
    it('Should clean key-value pairs which are null or undefined', () => {
        const obj1 = dummpObject1();
        const resultAfterDeepClean = cleanObj.cleanObj({obj: obj1});


        expect(resultAfterDeepClean.nested).to.not.have.own.property('a');
        expect(resultAfterDeepClean.nested).to.not.have.any.keys('a', 'b')
        expect(resultAfterDeepClean.nested.array).to.be.an('array').to.not.have.members([null, undefined])
  
    })
})

describe('Should Clean Array', () => {
    it('Should clean value which are null or undefined', () => {
        const obj = dummpObject2();
        const resultArray = cleanObj.cleanObj({obj});

        expect(resultArray).to.be.an('array').to.not.have.members([null, undefined])
    })
})