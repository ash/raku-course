---
title: The solution of ’Two taps‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $s = Supply.from-list(1, 2, 3);

my @doubled;
my @tripled;
$s.map(* * 2).tap(-> $v { @doubled.push($v) });
$s.map(* * 3).tap(-> $v { @tripled.push($v) });

say @doubled;
say @tripled;
```

🦋 You can find the source code in the file [two-taps.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supply-kinds/two-taps.raku).

## Output

```
[2 4 6]
[3 6 9]
```

## Comments

1. `Supply.from-list` is on-demand, so it replays its full sequence for **each** tap, independently.

1. That lets the two taps run different pipelines over the same source: one doubles, one triples. Each sees all of `1, 2, 3`, so the results are `[2 4 6]` and `[3 6 9]`.

{% include nav.html %}
