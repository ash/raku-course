---
title: The solution of ’An open-ended range‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
say (2, 4 ... *).head(4);
```

🦋 You can find the source code in the file [open-range.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/whatever/open-range.raku).

## Output

```
(2 4 6 8)
```

## Comments

1. The seeds `2, 4` set an arithmetic step of two, and the bare `*` as the endpoint means the sequence never ends.

1. `head(4)` pulls just the first four values, `2, 4, 6, 8`. The sequence is lazy, so the unbounded tail is never computed — the bare star here means “whatever, with no upper limit”.

{% include nav.html %}
