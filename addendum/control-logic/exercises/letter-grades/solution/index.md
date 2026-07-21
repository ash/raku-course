---
title: The solution of ’Letter grades‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
for 95, 82, 71, 58 -> $score {
    my $grade = do given $score {
        when * >= 90 { 'A' }
        when * >= 80 { 'B' }
        when * >= 70 { 'C' }
        when * >= 60 { 'D' }
        default      { 'F' }
    }

    say "$score -> $grade";
}
```

🦋 You can find the source code in the file [letter-grades.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/control-logic/letter-grades.raku).

## Output

```
95 -> A
82 -> B
71 -> C
58 -> F
```

## Comments

1. `do given` turns the whole `given`/`when` into an expression whose value is the
matching block — here a grade letter — which is stored in `$grade`.

1. Each `when * >= N` is a Whatever comparison against the topic. The first one that
succeeds wins, so the boundaries only need a lower bound each.

{% include nav.html %}
