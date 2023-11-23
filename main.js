function $(s) {
  return document.querySelector(s);
}

// Tweet クラスの定義
class Tweet {
  name;
  text;

  constructor(name, text) {
    this.name = name;
    this.text = text;
  }

  toHTML() {
    return `<li>${this.name} 「${this.text}」`;
  }
}

// ボタンが押された時の処理
$("#send").addEventListener("click", () => {
  const name = $("#name").value || "匿名";
  const text = $("#text").value;

  // ツイートのインスタンス化
  const tweet = new Tweet(name, text);

  // ツイートからHTMLを生成して追記
  $("#tweets").innerHTML += tweet.toHTML();

  // 後処理
  $("#text").value = "";
});
