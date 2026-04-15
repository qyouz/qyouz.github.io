# 数列型 Stolz 定理

## 1. $\frac{*}{\infty}$ 型

设有两个实数列 $\{a_n\}$ 和 $\{b_n\}$，满足以下条件：

1. **分母严格单调：** $\{b_n\}$ 是严格单调递增的（即对于所有足够大的 $n$，有 $b_{n+1} > b_n$）。
2. **分母发散至无穷：** $\lim_{n \to \infty} b_n = +\infty$。

若它们的差分之比的极限存在：

$$
\lim_{n \to \infty} \frac{a_{n+1} - a_n}{b_{n+1} - b_n} = L
$$

_(其中 $L$ 可以是实数，也可以是 $+\infty$ 或 $-\infty$)_

则原数列之比的极限也存在，且与之相等：

$$
\lim_{n \to \infty} \frac{a_n}{b_n} = L
$$

## 2. $\frac{0}{0}$ 型

设有两个实数列 $\{a_n\}$ 和 $\{b_n\}$，满足以下条件：

1. **同时趋于零：** $\lim_{n \to \infty} a_n = 0$ 且 $\lim_{n \to \infty} b_n = 0$。
    
2. **分母严格单调：** $\{b_n\}$ 严格单调递减（即 $b_n > b_{n+1} > 0$）。

若它们的差分之比的极限存在：

$$
\lim_{n \to \infty} \frac{a_{n+1} - a_n}{b_{n+1} - b_n} = L
$$

则原数列之比的极限也存在，且与之相等：

$$
\lim_{n \to \infty} \frac{a_n}{b_n} = L
$$

# 连续型 ($\frac{*}{\infty}$ 型)

连续型 Stolz 定理通常也被称为**有限增量形式的洛必达法则**。它是处理 $\frac{\infty}{\infty}$ 型极限时，当标准洛必达法则因为导数极限不存在（如遭遇 $\sin x$ 等周期震荡函数）而失效时的强力替代工具。

设 $f, g$ 定义在区间 $[a, +\infty)$ 上，且满足以下三个条件：

1. $g(x+T) > g(x), \forall x > a$，其中 $T > 0$ 为常数。
2. $f, g$ 在 $[a, +\infty)$ 内闭有界（即 $\forall b > a$，在区间 $[a, b]$ 上有界）。
3. $\lim_{x \to +\infty} g(x) = +\infty$。

若存在极限：

$$
\lim_{x \to +\infty} \frac{f(x+T) - f(x)}{g(x+T) - g(x)} = A
$$

则原极限也存在，且与之相等：

$$
\lim_{x \to +\infty} \frac{f(x)}{g(x)} = A
$$
