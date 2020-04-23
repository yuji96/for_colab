import matplotlib.pyplot as plt
import matplotlib.patches as patch
import matplotlib.animation as animation
import numpy as np


def anime():
    def update(n):
        plt.cla()
        theta = np.linspace(0, 2 * np.pi, n + 1)
        plt.plot(np.sin(theta), np.cos(theta))
        ax.add_patch(circle)
        ax.axis('equal')
        ax.set(xlim=(-1, 1), ylim=(-1, 1))

    fig, ax = plt.subplots()
    circle = patch.Circle((0, 0), 1, fill=False, edgecolor="k")
    ani = animation.FuncAnimation(fig, update, [2 ** i for i in range(2, 6)], interval=500)
    # plt.show()
    ani.save("img/polygon.gif", writer="pillow")


if __name__ == '__main__':
    anime()
