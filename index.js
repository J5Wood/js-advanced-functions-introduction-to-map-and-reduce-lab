function mapToNegativize(arr) {
    let negativeArray = [];
    for ( let i = 0; i < arr.length; i++) {
        negativeArray.push(arr[i] * -1);
    }
    return negativeArray;
}

function mapToNoChange(arr) {
    let newArray = [];
    return newArray.concat(arr);
}

function mapToDouble(arr) {
    let doubleArray = [];
    for ( let i = 0; i < arr.length; i++) {
        doubleArray.push(arr[i] * 2);
    }
    return doubleArray;
}

function mapToSquare(arr) {
    let squareArray = [];
    for (let i = 0; i < arr.length; i++) {
        squareArray.push(arr[i] ** 2);
    }
    return squareArray;
}


function reduceToTotal(arr, initialValue = 0) {
    let reducedValue = initialValue;
    for ( let i = 0; i < arr.length; i++ ) {
        reducedValue += arr[i];
    }
    return reducedValue;
}

function reduceToAllTrue(arr) {
    let truthCheck = true;
    for ( let i = 0; i < arr.length; i++ ) {
        if (arr[i] === false) {
            truthCheck = false;
        }
    }
    return truthCheck;
}

function reduceToAnyTrue(arr) {
    let truthCheck = false;
    for ( let i = 0; i < arr.length; i++) {
        if (!!arr[i]) {
            truthCheck = true;
        }
    }
    return truthCheck;
}
