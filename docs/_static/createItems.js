let allTags = [
    "理論",
    "書籍",
    "ライブラリ",
    "メディア",
    "無料",
    "Python",
    "numpy",
    "pandas",
    "matplotlib",
    "scikit-learn",
    "深層学習",
    "動画",
  ],
  gridElem = $(".grid"),
  filterControl = $(".filter-field");

for (let i = 0; i < data.length; i++) {
  let title = data[i][0],
    color = data[i][1],
    tags = data[i][3].split(" "),
    link = data[i][4],
    item = $(".item.template")
      .clone()
      .removeClass("template")
      .appendTo(gridElem),
    tagsElem;

  item.attr({ "data-title": title, "data-tag": tags });
  item.find(".custom-content").css("background", color);
  item.find(".item-title").text(title);
  item
    .find("a")
    .attr({ href: link, target: "_blank", rel: "noopener noreferrer" });

  tagsElem = item.find(".item-tags");
  for (let i = 0; i < tags.length; i++) {
    $("<li>", { text: tags[i] }).appendTo(tagsElem);
  }
}
$(".item.template").remove();

// allTags.sort();
// for (let i = 0; i < allTags.length; i++) {
//   $("<option>", {value: allTags[i]}).text(allTags[i]).appendTo(filterControl)
// }
