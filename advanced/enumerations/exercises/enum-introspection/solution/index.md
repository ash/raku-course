---
title: The solution of ’Count and total‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
enum Coin (penny => 1, nickel => 5, dime => 10, quarter => 25);

say Coin.enums.elems;
say Coin.enums.values.sum;
```

🦋 You can find the source code in the file [enum-introspection.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/enumerations/enum-introspection.raku).

## Output

```
4
41
```

## Comments

1. The constants are defined as pairs, so each one gets the value we chose rather than the automatic numbering from zero.

1. `.enums` returns a map from each constant name to its value. `.elems` counts the entries — there are four coins.

1. `.values` pulls out just the numbers behind the names, and `.sum` adds them up: `1 + 5 + 10 + 25` is `41`.

{% include nav.html %}
