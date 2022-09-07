export const findIntersection = (arr) => {
    let arrayfirst = arr[0].split(",").map(element => {
        return Number.parseInt(element)
    });
    let array2th = arr[1].split(",").map(element => {
        return Number.parseInt(element);
    })
    let finded = Array()
    // arrayfirst.forEach(element => {
    //     array2th.forEach(secElement => {
    //         if (element == secElement) {
    //             finded.push(element);
    //         }
    //     })
    // });
    let seconthSet = new Set(array2th)
    finded =  arrayfirst.filter( x => seconthSet.has(x));

    if (finded.length) {
        return finded;
    }
    return false;
}