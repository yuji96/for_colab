
def Leibniz_series(n):
    """
    n項目のライプニッツ級数を求める。
    ただし、初項は0項目と数え、引数が負の場合は値を返さない。

    Parameters
    -------
    n : int
        項数。

    Returns
    -------
    float or None
        n項目のライプニッツ級数

    Examples
    --------
    >>> Leibniz_series(0)
    1.0
    >>> Leibniz_series(2)
    0.2
    >>> Leibniz_series(10)
    0.047619047619047616
    >>> Leibniz_series(-1)
    """
    # TODO: 関数の実装
    pass


def find_pi(func, n, coef):
    """
    初項からn項までの和に適切な係数をかけて円周率の近似値を求める。

    Parameters
    -------
    func : function
        n番目の級数を返す関数
    n : int
        項数
    coef : float
        係数

    Returns
    -------
    float
        円周率の近似値
    """
    # TODO: 関数の実装
    pass


if __name__ == "__main__":
    n = 1000
    print("円周率の近似値:")
    print(find_pi(Leibniz_series, n, coef=4))
