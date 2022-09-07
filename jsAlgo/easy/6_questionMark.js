export const questionMark = (str) => {
    str = str.replace(/[^0-9?]/g,"")
    if (str.length < 5) return false;
    //let arr = str.split("")

    let lastindex=0
    while (str.indexOf("???",lastindex) != -1) {
        let indexOfQuestion = str.indexOf("???",lastindex)
        if ( (indexOfQuestion + 3) < str.length ) {
            lastindex = indexOfQuestion +3
        }
        else{
            break
        }
        if ( (indexOfQuestion - 1) > -1 && ( str[indexOfQuestion-1]*1 + str[indexOfQuestion+3]*1) == 10 ) {
            //console.log(( str[indexOfQuestion-1] + " " + str[indexOfQuestion+3]));
            return true
        }
    }

    //console.log(str);
    return false
}