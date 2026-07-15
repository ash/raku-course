---
title: The solution of ’Power‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
sub power($base, $exp) {
    $exp == 0 ?? 1 !! $base * power($base, $exp - 1);
}

say power(2, 10);
```

🦋 You can find the source code in the file [power.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/recursion/power.raku).

## Output

```
1024
```

## Comments

1. The base case returns `1` when the exponent reaches `0`, since any base to the power zero is one.

1. The recursive step multiplies `$base` by `power($base, $exp - 1)`, peeling off one factor each time. So `power(2, 10)` multiplies ten `2`s together, giving `1024`.

{% include nav.html %}
