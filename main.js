// The cockroach is one of the fastest Insects. Write a function which takes it's speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

function cockroachSpeed(kmSpeed){
    const cmSpeed = kmSpeed * 27.7778

    return Math.floor(cmSpeed)
}

console.log(cockroachSpeed(3));