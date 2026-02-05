const { greet, countCharacters } = require("../src/index");

describe("greet", () => {
  test("名前を渡すと挨拶を返す", () => {
    expect(greet("Alice")).toBe("Hello, Alice!");
  });

  test("空文字の場合デフォルトの挨拶を返す", () => {
    expect(greet("")).toBe("Hello, World!");
  });

  test("undefinedの場合デフォルトの挨拶を返す", () => {
    expect(greet()).toBe("Hello, World!");
  });

  test("空白のみの場合デフォルトの挨拶を返す", () => {
    expect(greet("   ")).toBe("Hello, World!");
  });
});

describe("countCharacters", () => {
  test("文字数を正しくカウントする", () => {
    expect(countCharacters("hello")).toBe(5);
  });

  test("日本語の文字数をカウントする", () => {
    expect(countCharacters("こんにちは")).toBe(5);
  });

  test("空文字の場合0を返す", () => {
    expect(countCharacters("")).toBe(0);
  });

  test("undefinedの場合0を返す", () => {
    expect(countCharacters()).toBe(0);
  });
});
