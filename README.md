# Find π
Python チュートリアル


## ライプニッツ級数(Leibniz formula)

![数式][1]  

### TODO
ライプニッツ級数を用いて円周率の近似値を求めよ。

### Comment
項数を大量に増やしてもコンピュータに計算させれば一瞬でできるってことがプログラミングの利点。  
`+`と`-`が交互になるのを人によってどう実装するか気になる。

`関連: 算術演算子, for文, if文, 関数の実装`


## 答えをカンニング

### TODO
Pythonの標準モジュールが持っている円周率の近似値を出力する。

### Comment
Pythonの基本文法だけでアプリ作成やデータ分析とかをするのは正直hentai行為。
用意されている便利なモジュールはどんどん使うことができる力も重要。
モジュールはネットからインストールして使うこともできる。

`関連: モジュール`


## 語呂合わせ

![Circle Digits][3]

それぞれの英単語のアルファベットの数を数えて並べると円周率になる。
> 例）  
> 英文　: May I have a large container of coffee  
> 円周率: 3.1415926

### TODO
[`quiz/circle_digits.txt`][5]を読み込んで語呂合わせの文字列を取得し、
この文字列を用いて円周率を402桁まで求めよ。  
以下、入力方法と出力方法の規則。
- ピリオド`.`は無視する。
- ピリオド以外の記号`:,—!="()`が独立して存在している位置は`0`とする。
    - つまり、`" 3 "`は記号が独立しているから`111`だが、`"3"`は記号が文字と隣接しているので`1`。
- `float`型は402桁も扱えないので、数字を`str`型として出力する。

### Comment
ユーザーは開発者の想定通りに入力してくれない。例えば電話番号だと人によって`0120-aaa-aaa`や`0120(aaa)aaa`だったりする。
これはwebアプリの入力フォームだけの問題ではなく、どの分野のエンジニアも対応できるようになる必要がある。
ちなみに[正規表現][4]を使うとトリッキーな文字列操作ができたりする。

`関連: ファイル読み込み, 文字列操作`



[1]:https://wikimedia.org/api/rest_v1/media/math/render/svg/b7cd66a2cfdbb199966e2b3c13ca7e0f5f87a67d
[2]:https://github.com/shinonome-inc/python-basic/blob/master/img/Leibniz.png
[3]:http://www.cs.columbia.edu/~evs/marvin/pipoem402.gif
[4]:https://www.megasoft.co.jp/mifes/seiki/index_r1.html
[5]:https://github.com/shinonome-inc/python-basic/blob/master/quiz/circle_digits.txt
