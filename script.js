function mincost(arr)
{ 
//write your code here
// return the min cost


let sortedArr = arr.sort((a, b) => a - b);

let sum = sortedArr[0] + sortedArr[1];

for (let i = 2; i < sortedArr.length; i++) {
    sum += sortedArr[i];
}

console.log(sortedArr); // [1, 2, 3, 4]
console.log(sum);       // 10
}

module.exports=mincost;
