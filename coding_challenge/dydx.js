'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}



// Complete the counts function below.
function counts(nums, maxes) {
    let sortedNums = nums.sort((a,b)=> a-b)

    let result = []
    maxes.forEach(num => {
        if (num > sortedNums[sortedNums.length - 1]) {
            result.push(sortedNums.length)
        } else {
            for (let i = 0; i < sortedNums.length; i++) {
                
                if (sortedNums[i] > num) {
                    result.push(i)
                    break
                }
            }


        }

        // if (num > sortedNums[sortedNums.length - 1]) {
        //     result.push(sortedNums.length)
        // } else {
           
        //     result.push(bSearch(sortedNums, num)
            



        // }

        

    })

    return result



}

// function bSearch(arr, target, left=0,right=arr.length-1) {
//     if(left === right) return left
//     let mid = Math.floor(sortedNums.length / 2)

//     if (target >= arr[mid]) {
//         bSearch(arr,target, left = mid+1, right )
//     } else {
//         bSearch(arr, target, left, right= mid-1)
//     }
// }

function main() {