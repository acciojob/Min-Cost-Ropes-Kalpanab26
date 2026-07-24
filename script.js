function mincost(arr) {
    let cost = 0;

    while (arr.length > 1) {
        arr.sort((a, b) => a - b);

        let first = arr.shift();
        let second = arr.shift();

        let sum = first + second;

        cost += sum;

        arr.push(sum);
    }

    return cost;
}

console.log(mincost([4, 3, 2, 6])); // 29
console.log(mincost([1, 2, 3, 4, 5])); // 33