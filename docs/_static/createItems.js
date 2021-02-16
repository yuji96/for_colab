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

  let titleElem = document.createElement("div");
  titleElem.appendChild(document.createTextNode(title));
  let tagsElem = document.createElement("ul");
  for (let i = 0; i < tags.length; i++) {
    let tag = document.createElement("li");
    tag.appendChild(document.createTextNode(tags[i]));
    tagsElem.appendChild(tag);
  }
  let content = document.createElement("div");
  content.className = "custom-content";
  content.style.background = color;
  content.appendChild(titleElem);
  content.appendChild(tagsElem);

  let contentWrapper = document.createElement("div");
  contentWrapper.className = "item-content";
  contentWrapper.appendChild(content);

  let item = document.createElement("div");
  item.className = "item";
  item.dataset.title = title;
  item.dataset.category = tags;
  item.appendChild(contentWrapper);
  gridElem.appendChild(item);
}
