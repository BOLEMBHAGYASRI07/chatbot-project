function sendMessage() {
  let userInput = document.getElementById("userInput").value;
  if (userInput.trim() === "") return;

  let chatbox = document.getElementById("chatbox");

  // User message
  let userMessage = <p class="user-text"><span>${userInput}</span></p>;
  chatbox.innerHTML += userMessage;

  // Bot response
  setTimeout(() => {
    let botResponse = getBotResponse(userInput);
    let botMessage = <p class="bot-text"><span>${botResponse}</span></p>;
    chatbox.innerHTML += botMessage;
    chatbox.scrollTop = chatbox.scrollHeight;
  }, 600);

  document.getElementById("userInput").value = "";
}

function getBotResponse(input) {
  input = input.toLowerCase();

  if (input.includes("hi") || input.includes("hello")) {
    return "Hello! How can I help you?";
  } else if (input.includes("your name")) {
    return "I’m a simple chatbot created using HTML, CSS & JS.";
  } else if (input.includes("how are you")) {
    return "I’m doing great! Thanks for asking 😊";
  } else if (input.includes("bye")) {
    return "Goodbye! Have a wonderful day 👋";
  } else {
    return "Sorry, I didn’t understand that. Can you rephrase?";
  }
}
