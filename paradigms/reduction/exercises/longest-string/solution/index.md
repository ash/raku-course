---
title: The solution of ’The longest string‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my @animals = 'cat', 'elephant', 'dog', 'fox';

say @animals.reduce(-> $a, $b { $b.chars > $a.chars ?? $b !! $a });
```

🦋 You can find the source code in the file [longest-string.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/reduction/longest-string.raku).

## Output

```
elephant
```

## Comments

1. The block keeps the longer of its two arguments: `$a` is the longest string seen so far, `$b` is the next one, and the ternary returns whichever has more characters.

1. `reduce` carries that winner forward as `$a` on the next call, so after walking the whole list the accumulated value is the longest string of all — `elephant`.

{% include nav.html %}
