function makeTransaction(quantity, pricePerDroid, customerCredits) {
    let totalPrice = quantity * pricePerDroid;
    if (totalPrice <= customerCredits) {
        return (`You ordered ${quantity} droids worth ${totalPrice} credits!`)
    } else {
        return ("Insufficient funds!");
    }
}

console.log(makeTransaction(8, 2000, 10000));