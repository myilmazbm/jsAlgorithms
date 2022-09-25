export const letterCapitalize = (str) => {
    let strArr = str.split(" ");
    strArr =  strArr.map(element => {
        return element[0].replace(/[a-z]/,char => char.toUpperCase()) + element.slice(1)
    });
    return strArr.join(" ");
}