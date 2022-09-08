export const arithGeo = (arr) => {
    let arithVal = arr[1] - arr[0]
    let GeoVal   = arr[1] / arr[0]
    let isArith = true
    let isGeo = true
    for (let index = 0; index < arr.length - 1; index++) {
        if( arithVal !== (arr[index+1] - arr[index]) ){
            isArith = false
        }
        if( GeoVal !== ( arr[index+1] / arr[index] )){
            isGeo = false
        }
    }
    let result = ( isArith ? "Arithmetic":"" )+(isGeo ? "Geometric":"")
    return result ? result : -1
}