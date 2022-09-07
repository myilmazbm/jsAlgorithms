export const userValidation = (str) => {
    if (str.length >= 4 && str.length <= 25 &&
        (/[a-zA-z]/).test(str[0]) &&
        (/^\w+$/).test(str) &&
        (/[a-zA-Z0-9]/).test(str[str.length-1])
    ) 
    {
        return true;
    }
    return false;
}