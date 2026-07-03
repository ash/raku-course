---
title: The solution of ’A closure in a q string‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $x = 10;
say q:c/$x squared is {$x ** 2}/;
```

🦋 You can find the source code in the file [closure-quote.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/quoting/closure-quote.raku).

## Output

```
$x squared is 100
```

## Comments

1. The `:c` (closure) adverb switches on interpolation of embedded `{ … }` code in the otherwise-literal `q` form. Inside the braces, `$x` is real code, so `{$x ** 2}` evaluates to `100`.

1. The `$x` outside the braces is left exactly as written, because the scalar adverb `:s` is *not* enabled. This is the whole point of the per-feature adverbs: you get embedded code without also turning on `$`-interpolation.

1. Adverbs can be stacked. Add `:s` as well, and the leading `$x` is interpolated too — both features are now on at once:

```raku
my $x = 10;
say q:c:s/$x squared is {$x ** 2}/; # 10 squared is 100
```

{% include nav.html %}
