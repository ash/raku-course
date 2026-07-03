---
title: The solution of ’Sum with the `&` sigil‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my &add = -> $a, $b {
    $a + $b;
};

say add(2, 3);
```

🦋 You can find the source code in the file [sum-with-sigil.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/anonymous-subroutines/sum-with-sigil.raku).

## Output

```
5
```

## Comments

1. The pointy block lists two parameters, `-> $a, $b`, so the anonymous subroutine takes two arguments.

1. Because the variable is declared with the `&` sigil, it can be called as `add(2, 3)` exactly like a named subroutine — no sigil at the call site — giving `5`.

{% include nav.html %}
