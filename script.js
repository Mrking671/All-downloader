document.getElementById('sendButton').addEventListener('click', async function () {
    const userInput = document.getElementById('userInput').value;
    if (userInput.trim() === "") return;

    // Display user message
    displayMessage(userInput, 'user');

    // Clear input
    document.getElementById('userInput').value = '';

    // Call the API
    const response = await fetch(`https://telesevapi.vercel.app/chat-gpt?question=${encodeURIComponent(userInput)}`);
    const data = await response.json();

    // Display bot response
    displayMessage(data.message, 'bot');
});

function displayMessage(message, sender) {
    const chatbox = document.getElementById('chatbox');
    const messageDiv = document.createElement('div');
    messageDiv.className = sender;
    messageDiv.textContent = message;
    chatbox.appendChild(messageDiv);
    chatbox.scrollTop = chatbox.scrollHeight; // Scroll to the bottom
}
