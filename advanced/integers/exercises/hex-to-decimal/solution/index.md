---
title: The solution of ’Hex to decimal‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $n = :16<1A>;

say $n;
say $n.base(16);
```

🦋 You can find the source code in the file [hex-to-decimal.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/integers/hex-to-decimal.raku).

## Output

```
26
1A
```

## Comments

1. The radix form `:16<1A>` reads `1A` as a base-16 number, which equals `1 × 16 + 10 = 26`. The variable `$n` now holds the plain integer.

1. `$n.base(16)` converts that integer back to a base-16 string, giving `1A` again — confirming that reading a base and printing in a base are inverse operations.

{% include nav.html %}
