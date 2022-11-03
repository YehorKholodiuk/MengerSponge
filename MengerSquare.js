function calc_ms(n) {
    let res = 1;
    while (n > 0){
        res *= 20
        n--
    }
    return res
}
console.log(calc_ms(6))
