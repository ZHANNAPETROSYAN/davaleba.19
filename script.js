function getDivisors(ricxvi) {
    let gamyopebi = [];

    for (let i = 1; i <= ricxvi; i++) {
        if (ricxvi % i === 0) {
            gamyopebi.push(i);
        }
    }

    return gamyopebi;
}


console.log(getDivisors(12)); // [1, 2, 3, 4, 6, 12]