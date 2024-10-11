document.getElementById('sendButton').addEventListener('click', async function () {
    const userInput = document.getElementById('userInput').value;
    if (userInput.trim() === "") return; // Prevent sending empty messages

    // Display user message
    displayMessage(userInput, 'user');

    // Clear input
    document.getElementById('userInput').value = '';

    // Display loading message
    const loadingMessage = "Typing...";
    displayMessage(loadingMessage, 'bot');

    try {
        // Call the API
        const response = await fetch(`https://telesevapi.vercel.app/chat-gpt?question=${encodeURIComponent(userInput)}`);

        // Check if the response is OK (status code 200)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        // Remove the loading message
        removeLoadingMessage();

        // Check if the message property exists in the response
        if (data.message) {
            displayMessage(data.message, 'bot');
        } else {
            displayMessage("Sorry, I couldn't get a response.", 'bot');
        }
    } catch (error) {
        // Handle errors
        console.error('Error:', error);
        removeLoadingMessage();
        displayMessage("An error occurred. Please try again later.", 'bot');
    }
});

// Function to display messages in the chatbox
function displayMessage(message, sender) {
    const chatbox = document.getElementById('chatbox');
    const messageDiv = document.createElement('div');
    messageDiv.className = sender;
    messageDiv.textContent = message;
    chatbox.appendChild(messageDiv);
    chatbox.scrollTop = chatbox.scrollHeight; // Scroll to the bottom
}

// Function to remove loading message
function removeLoadingMessage() {
    const chatbox = document.getElementById('chatbox');
    const loadingMessages = chatbox.querySelectorAll('.bot');
    if (loadingMessages.length > 0) {
        loadingMessages[loadingMessages.length - 1].remove(); // Remove the last bot message (loading)
    }
}
