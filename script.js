function mincost(arr)
{
	let arr = [1, 3, 2, 4];

let sortedArr = arr.sort((a, b) => a - b);

let runningSum = sortedArr[0] + sortedArr[1]; // 3
let finalSum = runningSum; // store 3

for (let i = 2; i < sortedArr.length; i++) {
    runningSum += sortedArr[i];
    finalSum += runningSum;
}

console.log(finalSum);
}

module.exports=mincost;
