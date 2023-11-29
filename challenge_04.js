const getAnsweer = async (message) => {
  const inputs = message.split("\n");
  let validFiles = [];
  inputs.forEach((input) => {
    const parts = input.split("-");

    const fileName = parts[0];
    const checksum = parts[1];

    let fileNameValidation = "";

    fileName.split("").forEach((letter) => {
      if (checksum.includes(letter)) {
        fileNameValidation += letter;
      }
    });

    if (fileNameValidation === checksum) {
      validFiles.push(fileName);
    }
  });
  console.log("====================================");
  console.log("Valid files =>", validFiles);
  console.log("Answer =>", validFiles[32] || "No answer found");
};

(async () => {
  const response = await fetch(
    "https://codember.dev/data/files_quarantine.txt"
  );
  const text = await response.text();
  getAnsweer(text);
})();
