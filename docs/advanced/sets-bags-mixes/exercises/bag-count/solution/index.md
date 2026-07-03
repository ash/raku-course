---
title: The solution of ’Count in a bag‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $words = bag('the cat sat on the mat'.words);

say $words<the>;
say $words.total;
```

🦋 You can find the source code in the file [bag-count.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/sets-bags-mixes/bag-count.raku).

## Output

```
2
6
```

## Comments

1. `'the cat sat on the mat'.words` produces the six words, and `bag` counts each one. Subscripting with `<the>` returns how many times `the` was seen — twice.

1. The `total` method sums all the counts, which equals the number of words put into the bag — `6`.

{% include nav.html %}
