---
title: The solution of ’A Boolean check‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my @empty;
say ?@empty;
```

🦋 You can find the source code in the file [boolean-check.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/contexts/boolean-check.raku).

## Output

```
False
```

## Comments

1. The `?` prefix forces Boolean context.

1. An empty array is false, which is exactly what `if @array` relies on.

{% include nav.html %}
