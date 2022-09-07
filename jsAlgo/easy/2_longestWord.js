export const longestWord = (sen) => {
    sen = sen.replace(/[^a-zA-Z ]/g,"")
    let strArray = sen.split(" ");
    let longestInt = Number.MIN_SAFE_INTEGER
    let longestStr = ""

    strArray.forEach(element => {
        if(element.length > longestInt){
            longestInt = element.length
            longestStr = element
        }
    });

    return longestStr
} 