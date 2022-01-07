/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    if (n == 1 || n == 0) return 1

    let first = 1;
    let second = 2;

    for (let i = 3; i <= n; i++) {
        let third = first + second;
        first = second;
        second = third;
    }

    return second;

};

/*

- declare a conditional base case of n = 1 or n = 0
- set variables first = 1, second = 2

*/