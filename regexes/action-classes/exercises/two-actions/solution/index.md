---
title: The solution of ’One grammar, two actions‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
grammar Pair {
    token TOP { <a> ',' <b> }
    token a   { \d+ }
    token b   { \d+ }
}

class Sum  { method TOP($/) { make $<a>.Int + $<b>.Int } }
class Diff { method TOP($/) { make $<a>.Int - $<b>.Int } }

say Pair.parse('10,20', actions => Sum.new).made;
say Pair.parse('10,20', actions => Diff.new).made;
```

🦋 You can find the source code in the file [two-actions.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/action-classes/two-actions.raku).

## Output

```
30
-10
```

## Comments

1. The grammar only describes the shape `number,number`; it knows nothing about what to compute.

1. The two action classes attach different meanings to the same parse — one sums the numbers, the other subtracts them. Passing a different `actions` object to `.parse` is all it takes to get a different result, without changing the grammar at all.

{% include nav.html %}
