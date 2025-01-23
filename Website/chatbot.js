const socket = io();

    
    function toggleChatbox() {
      const chatContainer = document.getElementById("chat-container");
      chatContainer.style.display = (chatContainer.style.display === "none" || chatContainer.style.display === "") ? "flex" : "none";
    }

    function sendMessage() {
      const userInput = document.getElementById("user-input").value;
      if (!userInput) return;

     
      displayMessage(userInput, 'user');

      
      socket.emit("chat-message", userInput);

      
      document.getElementById("user-input").value = "";
    }

    
    function displayMessage(message, sender) {
      const messageContainer = document.createElement("div");
      messageContainer.classList.add(sender + "-message");
      messageContainer.innerHTML = `<p>${message}</p>`;
      document.getElementById("chat-box").appendChild(messageContainer);
      document.getElementById("chat-box").scrollTop = document.getElementById("chat-box").scrollHeight; // Scroll to bottom
    }

    
    socket.on("chat-message", (message) => {
      displayMessage(message, 'bot');
    });
    async function sendMessage() {
        const userInput = document.getElementById("user-input").value;
        if (!userInput) return;
      
        displayMessage(userInput, 'user');
      
        try {
          const response = await fetch('http://localhost:3000/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: userInput }),
          });
      
          const data = await response.json();
          displayMessage(data.reply, 'bot');
        } catch (error) {
          console.error('Error:', error);
          displayMessage('Error: Unable to communicate with the server.', 'bot');
        }
      
        document.getElementById("user-input").value = '';
      }
      