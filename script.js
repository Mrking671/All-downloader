// Selecting the necessary elements
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Event listener for the send button
sendBtn.addEventListener('click', () => {
    const message = userInput.value.trim();
    if (message) {
        appendMessage('user', message);
        getAIResponse(message);
        userInput.value = ''; // Clear input
    }
});

// Append message to chat box
function appendMessage(sender, text) {
    const messageElem = document.createElement('div');
    messageElem.classList.add('message', sender);
    
    const bubbleElem = document.createElement('div');
    bubbleElem.classList.add('bubble', sender);
    bubbleElem.textContent = text;

    messageElem.appendChild(bubbleElem);
    chatBox.appendChild(messageElem);

    // Scroll to the bottom of the chat box
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Function to get AI response from the API
async function getAIResponse(userMessage) {
    try {
        const response = await fetch(`https://chatgpt.ashlynn.workers.dev/?question=${encodeURIComponent(userMessage)}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Server responded with status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);  // Log the full response for debugging
        
        if (data.status && data.code === 200) {
            appendMessage('ai', data.gpt);
        } else {
            appendMessage('ai', 'Error: Invalid response from the AI.');
        }
    } catch (error) {
        appendMessage('ai', `Error: ${error.message}`);
        console.error('Fetch error:', error);  // Log the error for debugging
    }
}

// Allow pressing "Enter" to send a message
userInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        sendBtn.click();
    }
});
