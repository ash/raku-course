---
title: The solution of ’Describe by type‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
multi describe(Int $x) { "integer $x" }
multi describe(Str $x) { "string $x" }
multi describe(@x)     { "list of {@x.elems}" }

say describe(42);
say describe('hi');
say describe([1, 2, 3]);
```

🦋 You can find the source code in the file [multi-describe.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/subs-functional/multi-describe.raku).

## Output

```
integer 42
string hi
list of 3
```

## Comments

1. Each `multi` gives one version of `describe` with a different parameter type.
Raku picks the matching candidate by the type of the argument.

1. The `@x` signature matches a list, so the array dispatches to the third
candidate, which reports its length.

{% include nav.html %}
