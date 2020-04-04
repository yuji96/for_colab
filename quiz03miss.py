def problem(k):
    import sympy 
    n = sympy.symbols('n')
    pi = sympy.summation(4*(-1)**(n-1)/(2*n-1),(n,1,k))
    return float(pi)
