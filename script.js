const userInputElement = document.getElementById('user-message');
const sendButton = document.getElementById('send-button');
const chatHistoryElement = document.getElementById('chat-history');

sendButton.addEventListener('click', async () => {
  const userInput = userInputElement.value.trim();
  if (userInput) {
    const response = await fetch(`https://telesevapi.vercel.app/chat-gpt?question=${userInput}`);
    const data = await response.json();
    const messageElement = document.createElement('p');
    messageElement.classList.add('chat-message', 'ai');
    messageElement.textContent = data.message;
    chatHistoryElement.appendChild(messageElement);
    userInputElement.value = ''; // Clear input field
    scrollToBottom();
  }
});

function scrollToBottom() {
  chatHistoryElement.scrollTop = chatHistoryElement.scrollHeight;
}
