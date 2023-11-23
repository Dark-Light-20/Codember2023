const getAnsweer = async (message) => {
  const inputs = message.split("\n");
  let wrongPasswords = [];
  inputs.forEach((input) => {
    const parts = input.split(": ");

    const keyParts = parts[0].split(" ");
    const password = parts[1];

    const range = keyParts[0].split("-");
    const passwordMinLength = parseInt(range[0]);
    const passwordMaxLength = parseInt(range[1]);
    const letter = keyParts[1];

    const letterCount = password
      .split("")
      .reduce((acc, curr) => (curr === letter ? acc + 1 : acc), 0);

    if (letterCount < passwordMinLength || letterCount > passwordMaxLength) {
      wrongPasswords.push(password);
    }
  });
  console.log("====================================");
  console.log("Wrong passwords =>", wrongPasswords);
  console.log("Answer =>", wrongPasswords[41] || "No answer found");
  console.log(
    "Secret password for sudo =>",
    wrongPasswords[12] || "No answer found"
  );
};

(async () => {
  const response = await fetch(
    "https://codember.dev/data/encryption_policies.txt"
  );
  const text = await response.text();
  getAnsweer(text);
})();
