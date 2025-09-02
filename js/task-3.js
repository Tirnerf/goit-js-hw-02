function checkForSpam(message) {
    let messageToLower = message.toLowerCase();
    return messageToLower.includes('spam') || messageToLower.includes('sale');
}

console.log(checkForSpam("JavaScript weekly newsletter"));
