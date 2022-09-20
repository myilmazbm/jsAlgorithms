export const simpleSymbols = (str) => {
    if (/[^=+a-zA-z]/g.test(str)) {
        return false
    }
    while(str.search(/[a-zA-z]/g) != -1){
        let position = str.search(/[a-zA-z]/g)
        //console.log(position)
        if( !(str[position-1] == "+" && str[position+1] == "+")){
            return false
        }
        str = str.slice(position+1)
        //console.log(str);
    }
    return true 
}