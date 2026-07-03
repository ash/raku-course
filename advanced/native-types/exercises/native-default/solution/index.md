---
title: The solution of ’The native default‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my num $n;
my str $s;

say $n;
say "[$s]";
```

🦋 You can find the source code in the file [native-default.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/native-types/native-default.raku).

## Output

```
0
[]
```

## Comments

1. A native `num` cannot be undefined, so like a native `int` it starts at `0` rather than at `(Num)`.

1. A native `str` starts as the empty string, which is why the brackets come out with nothing between them. None of the native types ever hold an undefined value.

1. The type specifiers are essential here. Drop them — write `my $n; my $s;` — and the variables become ordinary containers that start out *undefined* (`Any`). Then `say $n` prints `(Any)`, and interpolating the undefined `$s` warns *“Use of uninitialized value … in string context”*. It is the native `num` and `str` types that guarantee the `0` and empty-string defaults.

{% include nav.html %}
