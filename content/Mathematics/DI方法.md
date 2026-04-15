关联 [3.分部积分法](积分方法.md#3.分部积分法)

# DI 方法（Tabular Integration，表格积分法）

是分部积分法（Integration by Parts）的一种高效可视化变形。它将复杂的符号变换和嵌套积分过程简化为一张表格，极大降低了计算 $\int u \mathrm{d}v$ 类积分时的出错率。

# 适用场景

最适合处理多项式 $P(x)$ 乘以易积分函数  $f(x)$ 的形式：

- 多项式 × 三角函数  $\int x^{n}\sin(ax)\mathrm{d}x$ 
- 多项式 × 指数函数  $\int x^{n}e^{ax}\mathrm{d}x$
- 循环积分型（需特殊处理） $\int e^{ax}\sin(bx) \thinspace \mathrm{d}x$

# DI 表格结构

| **符号 (Sign)**                   | **微分 (D - Derivative)**          | **积分 (I - Integral)** |
| ------------------------------- | -------------------------------- | --------------------- |
| 从 **$+$** 开始，正负交替               | 选择求导后能**最终变 0** 的项 (通常是  $x^n$ ) | 选择**容易连续积分**的项        |
| $+ \rightarrow - \rightarrow +$ | 逐行向下求导                           | 逐行向下积分                |

## 对角线相乘（结果项）

将 **第 n 行的 D 项** 与 **第 n+1 行的 I 项** 沿对角线相乘，并应用该行起始的符号。这些项直接构成原函数的代数和。

## 最后一行水平相乘（剩余积分项）

表格中最后一行的三项水平相乘，其结果代表一个**待处理的积分项**：

$$
\int (Sign)(D)(I) \thinspace \mathrm{d}x
$$

- **当 D 列变为 0 时**：水平乘积为 0，积分停止，得到最终结果。
- **当 D/I 列出现循环时**：水平相乘可以构成一个包含原积分的方程，从而解出积分值。

以 $\int x\sin x \thinspace \mathrm{d}x$ 为例：

| **符号 (Sign)** | **微分 (D)** | **积分 (I)** |
| ------------- | ---------- | ---------- |
| $+$           | $x$        | $\sin x$   |
| $-$           | $1$        | $-\cos x$  |
| $+$           | $0$        | $-\sin x$  |

结果是：

$$
\int x\sin x \thinspace \mathrm{d}x = x(-\cos x)+(-1)(-\sin x) +C=-x\cos x+\sin x
$$

以 $\int x \ln x \thinspace \mathrm{d}x$ 为例：

| **符号 (Sign)** | **微分 (D)**    | **积分 (I)**        |
| ------------- | ------------- | ----------------- |
| $+$           | $\ln x$       | $x$               |
| $-$           | $\frac{1}{x}$ | $\frac{x^{2}}{2}$ |

结果是：

$$
\int x\ln x \thinspace \mathrm{d}x =\frac{x^{2}}{x} \ln x  - \int \frac{1}{x} \frac{x^{2}}{2} \thinspace \mathrm{d}x
$$

以 $\int e^{x}\cos x \thinspace \mathrm{d}x$ 为例：

| **符号 (Sign)** | **微分 (D)** | **积分 (I)** |
| ------------- | ---------- | ---------- |
| $+$           | $e^{x}$    | $\cos x$   |
| $-$           | $e^{x}$    | $\sin x$   |
| $+$           | $e^{x}$    | $-\cos x$  |

结果是：

$$
\begin{align}
\int e^{x}\cos x \thinspace \mathrm{d}x &=e^{x}\sin x +e^{x}\cos x - \int e^{x}\cos x \thinspace \mathrm{d}x  \\
\int e^{x}\cos x \thinspace \mathrm{d}x &=\frac{e^{x}\sin x +e^{x}\cos x}{2}
\end{align}
$$
