const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Which's the encrypted message? \n", (message) => {
  const inputs = message.split("");
  let actualValue = 0;
  let answer = "";
  inputs.forEach((input) => {
    switch (input) {
      case "#":
        actualValue++;
        break;
      case "@":
        actualValue--;
        break;
      case "*":
        actualValue *= actualValue;
        break;
      case "&":
        answer += actualValue;
        break;
    }
  });
  console.log("====================================");
  console.log("Answer =>", answer);
  readline.close();
});
