---
title: The solution of ’The first multiples of seven‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
say (1..*).map(* * 7).head(5);
```

🦋 You can find the source code in the file [first-multiples-of-seven.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/lazy/first-multiples-of-seven.raku).

## Output

```
(7 14 21 28 35)
```

## Comments

1. `1..*` is an infinite range; `.map(* * 7)` multiplies each element by seven lazily.

1. `.head(5)` pulls only the first five, so the infinite source is never fully computed.

{% include nav.html %}
