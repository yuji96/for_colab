let gridElem = $(".grid"),
  filterControl = $(".filter-field");

for (let i = 0; i < data.length; i++) {
  let title = data[i]["title"],
    tags = data[i]["tags"].split(" "),
    link = data[i]["link"],
    icon = data[i]["icon"],
    item = $(".item.template")
      .clone()
      .removeClass("template")
      .appendTo(gridElem),
    tagsElem;

  item.attr({ "data-title": title, "data-tag": tags });
  item.find(".custom-content");
  item.find(".item-icon").attr("src", icon);
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
