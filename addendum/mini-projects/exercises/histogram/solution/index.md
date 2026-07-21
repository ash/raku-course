---
title: The solution of ’A text histogram‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my %sales = apples => 5, pears => 3, plums => 8;

for %sales.sort -> $pair {
    say "{$pair.key}\t{ '#' x $pair.value }";
}
```

🦋 You can find the source code in the file [histogram.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/mini-projects/histogram.raku).

## Output

```
apples	#####
pears	###
plums	########
```

## Comments

1. The string repetition operator `x` builds each bar: `'#' x 5` is `#####`. The
value simply becomes the bar length.

1. The `\t` between the label and the bar is a tab character, so the bars line up
in a column instead of starting right after each name of a different length.

{% include nav.html %}
