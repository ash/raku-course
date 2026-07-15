---
title: The solution of ’A hyper map‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
say <apple banana pear cherry>.hyper.map(*.uc).grep(*.chars > 4).join(' ');
```

🦋 You can find the source code in the file [hyper-map.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/hyper-race/hyper-map.raku).

## Output

```
APPLE BANANA CHERRY
```

## Comments

1. `.hyper` runs the whole chain — the `map` that upper-cases and the `grep` that filters by length — across threads, in parallel.

1. Because `.hyper` preserves order, the surviving words stay in their original sequence, so `.join(' ')` produces `APPLE BANANA CHERRY`. `pear`, with only four letters, is dropped.

{% include nav.html %}
