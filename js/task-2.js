function formatMessage(message, maxLength) {
    let messageLength = message.length;
    if (messageLength <= maxLength) {
        return message;
    } else {
        let shortMessage = message.slice(0, maxLength) + '...';
        return shortMessage;
    }
}
console.log(formatMessage("Vestibulum facilisis purus nec", 30));