const regexs = {
  id: /^[a-zA-Z0-9]+$/,
  username: /^[a-zA-Z0-9]+$/,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  age: /^[0-9]+$/,
  location: /^[a-zA-Z ]+$/,
};

const getAnsweer = async (message) => {
  let secretWord = "";
  const users = message.split("\n");
  const wrongUsers = [];
  users.forEach((user) => {
    const [id, username, email, age, location] = user.split(",");
    if (
      !regexs.id.test(id) ||
      !regexs.username.test(username) ||
      !regexs.email.test(email) ||
      !(age && regexs.age.test(age)) ||
      !(location && regexs.location.test(location))
    ) {
      wrongUsers.push(user);
    }
  });
  secretWord = wrongUsers
    .map((user) => {
      const [, username] = user.split(",");
      return username[0];
    })
    .join("");
  console.log("====================================");
  console.log("Wrong users =>", wrongUsers);
  console.log("Answer =>", secretWord || "No answer found");
};

(async () => {
  const response = await fetch(
    "https://codember.dev/data/database_attacked.txt"
  );
  const text = await response.text();
  getAnsweer(text);
})();
