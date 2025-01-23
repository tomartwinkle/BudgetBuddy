// Open chat window when chat button is clicked
document.getElementById('chatButton').addEventListener('click', function() {
    const chatWindow = document.getElementById('chatWindow');
    // Toggle visibility
    if (chatWindow.style.display === 'none' || chatWindow.style.display === '') {
        chatWindow.style.display = 'flex';
    } else {
        chatWindow.style.display = 'none';
    }
});

document.getElementById('whatIfForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const userId = document.getElementById('user_id').value;
    const question = document.getElementById('question').value;

    // Display user message in the chat box
    appendMessage('user', question);

    fetch('http://localhost:5000/api/what_if', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_id: userId,
            question: question
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);  // Log response
        if (data.response) {
            appendMessage('ai', data.response);  // Display AI response
        } else {
            appendMessage('ai', 'No response from backend.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        appendMessage('ai', 'An error occurred. Please try again.');
    });
});

// Function to append messages to the chat window
function appendMessage(sender, message) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add(sender === 'user' ? 'user-message' : 'ai-message');
    messageDiv.textContent = message;
    
    const chatBox = document.getElementById('chat-box');
    chatBox.appendChild(messageDiv);
    
    // Scroll chat to the bottom
    chatBox.scrollTop = chatBox.scrollHeight;
}
