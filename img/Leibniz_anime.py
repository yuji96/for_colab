import math
import matplotlib.pyplot as plt

n = 100
length = len(range(1, n + 1, 2)) + 1

pi = 0
tmp = []
for i, k in enumerate(range(1, n + 1, 2)):
    sign = 1 if i % 2 == 0 else -1
    pi += sign * 4 / k
    tmp.append(pi)

print(pi)
plt.scatter(range(1, length), tmp, marker=".")
plt.hlines(math.pi, 0, length, color="r")
plt.ylim(math.pi - 0.1, math.pi + 0.1)
plt.show()
