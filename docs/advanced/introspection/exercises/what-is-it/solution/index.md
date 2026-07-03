---
title: The solution of ’What is it‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $a = 42;
my $b = 'x';

say $a.WHAT === Int;
say $b.WHAT === Int;
```

🦋 You can find the source code in the file [what-is-it.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/introspection/what-is-it.raku).

## Output

```
True
False
```

## Comments

1. `$a.WHAT` is not the string `Int` but the actual `Int` type object, so `=== Int` compares it against the type itself and returns `True`.

1. `$b` holds a string, so its `WHAT` is `Str`; comparing that with `Int` gives `False`. This is what makes `WHAT` useful in conditions, not just in printouts.

{% include nav.html %}
