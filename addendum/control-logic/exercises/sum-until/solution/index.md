---
title: The solution of ’Sum until over a hundred‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $sum = 0;
my $n   = 0;

loop {
    $n++;
    $sum += $n;
    last if $sum > 100;
}

say "reached $sum after adding 1..$n";
```

🦋 You can find the source code in the file [sum-until.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/control-logic/sum-until.raku).

## Output

```
reached 105 after adding 1..14
```

## Comments

1. A bare `loop { }` repeats forever; the `last if $sum > 100` is what ends it, as
soon as the total crosses the threshold.

1. `1 + 2 + … + 14` is `105`, the first partial sum over `100`, so the loop stops
with `$n` at `14`.

1. You can check that total with a [reduction](/advanced/metaoperators/reduction):

    ```raku
    say [+] 1..14; # 105
    ```

{% include nav.html %}
