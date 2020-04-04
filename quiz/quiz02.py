import random,math,collections
A = []
C = []
for _ in range(1000):
    for _ in range(1000):
        a,b = [random.randint(0,1000) for i in range(2)]
        if math.gcd(a,b) == 1:
            A.append(1)
        elif math.gcd(a,b) != 1:
            A.append(0)
    C.append(sum(A)/1000)
    A.clear()
P = [[l,C.count(l)] for l in set(C)]
# TODO: 互いに素である確率pを求め、`6/p の平方根`を出力
for n in range(len(P)):
    P[n][1] = (P[n][1]/1000*6)**0.5
print(P)
#最後は、問題にこたえられてるか分からないけど、やってみた！
