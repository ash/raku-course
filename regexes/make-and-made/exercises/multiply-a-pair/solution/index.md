---
title: The solution of ’Multiply a pair‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
grammar Product {
    token TOP { <a> '*' <b> { make $<a>.Int * $<b>.Int } }
    token a   { \d+ }
    token b   { \d+ }
}

say Product.parse('4*5').made;
```

🦋 You can find the source code in the file [multiply-a-pair.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/make-and-made/multiply-a-pair.raku).

## Output

```
20
```

## Comments

1. The two numbers are captured as `<a>` and `<b>`, each converted with `.Int`.

1. The inline block combines the sub-matches — multiplying them — and stores the result on the match, which `made` then returns.

{% include nav.html %}
