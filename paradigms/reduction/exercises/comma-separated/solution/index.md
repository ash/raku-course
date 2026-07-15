---
title: The solution of ’Comma-separated list‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my @words = 'Raku', 'is', 'fun';

say @words.reduce(-> $a, $b { "$a, $b" });
```

🦋 You can find the source code in the file [comma-separated.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/reduction/comma-separated.raku).

## Output

```
Raku, is, fun
```

## Comments

1. Here the block **builds** a value instead of choosing one: `$a` is the string assembled so far and `$b` is the next word, and `"$a, $b"` glues them with a comma and a space.

1. The first call joins `'Raku'` and `'is'` into `Raku, is`; the second joins that with `'fun'` to give `Raku, is, fun`. This is the kind of separator-aware joining the `[~]` metaoperator cannot express on its own.

1. In real code you would reach for the built-in `join` method, which does exactly this — `say @words.join(', ');` prints the same `Raku, is, fun`. The point of the exercise is to practise expressing the same idea as a `reduce` block.

{% include nav.html %}
