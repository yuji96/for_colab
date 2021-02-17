let data = [
  // ["なまえ", "いろ", "れべる", "たぐ", "りんく"],
  ["松尾研GCI", "#0fbcf9", "", "wip 無料", "https://weblab.t.u-tokyo.ac.jp/gci_contents/"],
  ["松尾研DL4US", "#0fbcf9", "", "wip 無料", "https://weblab.t.u-tokyo.ac.jp/dl4us/"],
  ["PRML", "#ffd32a", "", "理論 書籍 英語版無料", "https://www.microsoft.com/en-us/research/people/cmbishop/prml-book/"],
  ["はじぱた", "#0be881", "", "理論 書籍", "https://www.morikita.co.jp/books/book/2235"],
  ["大学図書館", "", "", "理論 wip 書籍 無料(∵学費)", ""],
  ["丸善 eBook", "", "", "理論 wip 書籍 無料(∵学費)", "https://elib.maruzen.co.jp/elib/html/GuestLogin?1"],
  ["Deep Learning (MIT Press)", "", "", "理論 書籍 英語版無料", "https://www.deeplearningbook.org/"],
  ["Dash", "", "", "ライブラリ 可視化", "https://dash-gallery.plotly.host/Portal/"],
  ["AVILEN", "", "", "メディア 無料", "https://ai-trend.jp/"],
  ["データサイエンスハンドブック", "", "", "Python numpy pandas matplotlib scikit-learn 英語版無料", "https://jakevdp.github.io/PythonDataScienceHandbook/"],
  ["コーディング規約", "", "", "Python", "https://pep8-ja.readthedocs.io/ja/latest/"],
  ["AIZU", "", "", "Python 無料", "https://onlinejudge.u-aizu.ac.jp/courses/lesson/2/ITP1/1"],
  ["東大公開授業資料", "", "", "Python numpy pandas matplotlib scikit-learn 無料", "https://utokyo-ipp.github.io/index.html"],
  ["日本医療AI学会", "", "", "wip 無料", "https://japan-medical-ai.github.io/medical-ai-course-materials/index.html"],
  ["NewYork Univ. DL (日本語)", "", "", "wip 深層学習", "https://atcold.github.io/pytorch-Deep-Learning/ja/"],
  ["Stanford Univ. CNN", "", "", "理論 動画", "https://www.youtube.com/playlist?list=PL3FW7Lu3i5JvHM8ljYj-zLfQRF3EO8sYv"],
  ["3B1B NN", "", "", "理論 動画", "https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi"],
  ["3B1B 線形代数", "", "", "理論 動画", "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab"],
  ["3B1B 微積", "", "", "理論 動画", "https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr"],
  // ["", "", "", "", ""],
],
  allTags = ["理論", "書籍", "ライブラリ", "メディア", "無料", "Python", "numpy", "pandas", "matplotlib", "scikit-learn", "深層学習", "動画"],
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
  item.find("a").attr({"href": link, "target": "_blank", "rel": "noopener noreferrer"});

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
