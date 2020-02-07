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

    Examples
    --------
    >>> pi = find_pi(Leibniz_series, n=1000, coef=4)
    >>> round(pi, 2)
    3.14
    >>> find_pi(lambda x: x, n=10, coef=1)
    55
    """
    # TODO: 関数の実装
    pass
