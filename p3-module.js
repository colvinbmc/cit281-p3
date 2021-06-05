//Returns true if function paramater is valid
function validDenomination(coin) {
    return [1, 5, 10, 25, 50, 100].indexOf(coin) !== -1;
}

//Returns value from coin obj
function valueFromCoinObject(obj) {
    const {denom = 0, count = 0} = obj;
    return denom * count;
}

//Adding all the values of an array
function valueFromArray(arr) {
    const reducer = (accumulator, currentValue) => accumulator + valueFromCoinObject(currentValue)
    return arr.reduce(reducer, 0);
}


//
function coinCount(...coinage) {
    return valueFromArray(coinage);
}
