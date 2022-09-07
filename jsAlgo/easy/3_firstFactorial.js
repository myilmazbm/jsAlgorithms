export const firstFactorial = (num) => {
    //if (num === 1) return 1 
    //return num * firstFactorial(num-1)
    let total = 1
    for (let index = 1; index <= num; index++) {
        total = total * index
    }
    return total
}