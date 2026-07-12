---
title: The solution of ’Count the matches‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
say ('education' ~~ m:g/<[aeiou]>/).elems;
```

🦋 You can find the source code in the file [count-matches.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/adverbs/count-matches.raku).

## Output

```
5
```

## Comments

1. The character class `<[aeiou]>` matches one vowel, and the `:g` adverb returns every such match instead of just the first.

1. The result behaves like a list, so `.elems` counts the matches: the five vowels in `education` (e, u, a, i, o).

{% include nav.html %}
