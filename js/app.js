const messagesDiv = document.getElementById('messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const interestInput = document.getElementById('interest-input');
const findMatchButton = document.getElementById('find-match-button');

let isChatting = false;

startButton.addEventListener('click', () => {
    isChatting = true;
    appendSystemMessage('Chat started!');
});

stopButton.addEventListener('click', () => {
    isChatting = false;
    appendSystemMessage('Chat stopped!');
});

sendButton.addEventListener('click', () => {
    if (isChatting) {
        const message = messageInput.value.trim();
        if (message !== '') {
            appendUserMessage(message);
            // You can add logic here to send the message to the other user
            // For simulation purposes, we'll also append a response
            setTimeout(() => {
                appendStrangerMessage('Received: ' + message);
            }, 1000);

            // Clear the input field
            messageInput.value = '';
        }
    } else {
        appendSystemMessage('Start the chat first!');
    }
});

findMatchButton.addEventListener('click', () => {
    const userInterest = interestInput.value.trim();
    if (userInterest !== '') {
        appendSystemMessage('Finding match based on interest: ' + userInterest);
        // You can add logic here to find a match based on interest
        // For simulation purposes, let's assume a match is found
        setTimeout(() => {
            appendSystemMessage('Match found! You are now chatting with a stranger.');
        }, 2000);
    } else {
        appendSystemMessage('Enter your interest first!');
    }
});

function appendUserMessage(message) {
    appendMessage('You: ' + message);
}

function appendStrangerMessage(message) {
    appendMessage('Stranger: ' + message);
}

function appendSystemMessage(message) {
    appendMessage('System: ' + message);
}

function appendMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messagesDiv.appendChild(messageElement);
}
