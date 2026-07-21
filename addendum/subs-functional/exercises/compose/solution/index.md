---
title: The solution of ’Compose two functions‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
sub compose(&f, &g) {
    return -> $x { f(g($x)) };
}

my $combined = compose(* * 2, * + 1);

say $combined(5);
```

🦋 You can find the source code in the file [compose.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/subs-functional/compose.raku).

## Output

```
12
```

## Comments

1. The `&f` and `&g` parameters accept any callables — here the Whatever functions
`* * 2` and `* + 1`.

1. `compose` returns a fresh anonymous function `-> $x { f(g($x)) }`. Calling it on
`5` runs `g` first (`5 + 1`), then `f` (`6 * 2`), giving `12`.

{% include nav.html %}
