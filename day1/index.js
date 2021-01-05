function addTwoDigits(n){
    return Math.floor(n/10) + n%10
}

console.log(addTwoDigits(99));

function largestNumber(n){
    let largestNumber = ''
    for(let i = 0;i<n;i++){
        largestNumber += '9'
    }
    return parseInt(largestNumber)
}

console.log(largestNumber(3));