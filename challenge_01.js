const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Which's the encrypted message? \n", (message) => {
  const words = message.toLowerCase().split(" ");
  const wordCounter = {};
  let decryptedMessage = "";
  words.forEach((word) => (wordCounter[word] = (wordCounter[word] || 0) + 1));
  Object.keys(wordCounter).forEach(
    (word) => (decryptedMessage += `${word}${wordCounter[word]}`)
  );
  console.log("====================================");
  console.log("Answer =>", decryptedMessage);
  readline.close();
});
