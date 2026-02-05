function greet(name) {
  if (!name || name.trim() === "") {
    return "Hello, World!";
  }
  return `Hello, ${name}!`;
}

function countCharacters(text) {
  if (!text) return 0;
  return text.length;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { greet, countCharacters };
}
