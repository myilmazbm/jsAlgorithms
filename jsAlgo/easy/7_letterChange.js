export const letterChange = (str) => {
    let codes = str.split("").map(element => {
        let code = element.charCodeAt(0)
        if (code >= 122) {
            code = code - 26
        }
        code += 1
        element = String.fromCharCode(code)
        return element
    }).join("");
    codes
    return codes.replace(/a/g,"A").replace(/e/g,"E").replace(/i/g,"I").replace(/o/g,"O").replace(/u/g,"U")
    
}