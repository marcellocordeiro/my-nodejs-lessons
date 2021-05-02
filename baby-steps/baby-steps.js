"use strict";

let result = 0
let numberArray = process.argv.slice(2)

numberArray.forEach(element => {
    result += Number(element)
})

console.log(result)
