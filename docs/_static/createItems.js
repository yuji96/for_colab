let data = [
  ["松尾研GCI", "#0fbcf9", "中級", "実装 notebook 講座 無料", ""],
  ["松尾研DL", "#0fbcf9", "上級", "", ""],
  ["PRML", "#ffd32a", "上級", "理論 書籍 有名 無料 英語", ""],
  ["はじぱた", "#0be881", "中級", "", ""],
  ["大学図書館", "", "", "", ""],
  ["marzen ebooks", "", "", "理論 実装 書籍 無料", ""],
];

gridElem = document.querySelector(".grid");

for (let i = 0; i < data.length; i++) {
  let title = data[i][0];
  let color = data[i][1];
  let tags = data[i][3].split(" ");

  let tagsElem = $("<ul>");
  for (let i = 0; i < tags.length; i++) {
    $("<li>", { text: tags[i] }).appendTo(tagsElem);
  }

  $("<div>", { class: "item" })
    .attr({ "data-title": title, "data-category": tags })
    .appendTo(gridElem)
    .append(
      $("<div>", { class: "item-content" }).append(
        $("<div>", { class: "custom-content" })
          .css("background", color)
          .append($("<div>", { text: title }), tagsElem)
      )
    );
}
