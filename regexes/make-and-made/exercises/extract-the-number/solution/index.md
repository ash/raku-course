---
title: The solution of ’Extract the number‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
grammar Weight {
    token TOP    { <number> 'kg' { make $<number>.Int } }
    token number { \d+ }
}

say Weight.parse('5kg').made;
```

🦋 You can find the source code in the file [extract-the-number.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/make-and-made/extract-the-number.raku).

## Output

```
5
```

## Comments

1. The pattern matches the digits and the literal `kg`, but the inline block stores only `$<number>.Int` — the integer, without the unit.

1. `made` reads that value back: a real `5`, ready to compute with, rather than the text `5kg`. This is the typical job of `make` — turning a match into the clean value you actually want.

{% include nav.html %}
