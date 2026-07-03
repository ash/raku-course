---
title: The solution of ’Powers of two‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
say (1, 2, 4 ... Inf).head(8);
```

🦋 You can find the source code in the file [powers-of-two.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/sequences/powers-of-two.raku).

## Output

```
(1 2 4 8 16 32 64 128)
```

## Comments

1. The three starting values `1, 2, 4` grow by multiplication, so `...` recognises a geometric sequence; with `Inf` as the endpoint it never stops on its own.

1. `head(8)` pulls only the first eight values. Because the sequence is lazy, the rest are never generated — which is the only reason an infinite sequence is safe to write.

{% include nav.html %}
