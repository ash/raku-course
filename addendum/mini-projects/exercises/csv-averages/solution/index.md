---
title: The solution of ’Scores from CSV lines‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my @lines = 'Anna,90', 'Bob,72', 'Cara,84';
my %score;

for @lines -> $line {
    my ($name, $mark) = $line.split(',');
    %score{$name} = $mark.Int;
}

my $average = ([+] %score.values) / %score.elems;
say "average: $average";

say "above average:";
for %score.sort -> $pair {
    say "  {$pair.key}" if $pair.value > $average;
}
```

🦋 You can find the source code in the file [csv-averages.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/mini-projects/csv-averages.raku).

## Output

```
average: 82
above average:
  Anna
  Cara
```

## Comments

1. Splitting each line on the comma and assigning to `($name, $mark)` unpacks the
two fields at once; `.Int` turns the score text into a number.

1. The average is the sum of the values over their count; anyone whose score beats
it is listed. Here the average works out to a whole `82`.

1. That final loop can be written as a pipeline. `sort` orders the pairs, `grep`
keeps the ones above the average, and `map` reduces each surviving pair to its
name — so the loop body carries no logic, only the printing:

    ```raku
    say "  $_" for %score.sort.grep(*.value > $average).map(*.key);
    ```

    Reading left to right, this says exactly what it does: sort, keep the ones
above average, take their names. Each stage is a small, self-contained step, and
`*.value` / `*.key` are [Whatever stars](/advanced/whatever) that build a
one-argument block on the fly.

{% include nav.html %}
