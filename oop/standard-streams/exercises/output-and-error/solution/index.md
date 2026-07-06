---
title: The solution of ’Output and error‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my @data = 3, 5, 7;

my $sum = 0;
for @data -> $n {
    $sum += $n;
    $*ERR.say("running total: $sum");
}

$*OUT.say($sum);
```

🦋 You can find the source code in the file [output-and-error.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/standard-streams/output-and-error.raku).

## Output

On screen, both streams appear — the running totals, then the final result:

```
running total: 3
running total: 8
running total: 15
15
```

If standard error is discarded, only the real output remains:

```
$ raku output-and-error.raku 2>/dev/null
15
```

## Comments

1. `$*OUT` and `$*ERR` are the handles for standard output and standard error. Each has its own `say` method.

1. Each pass of the loop adds the next number and writes the running total to `$*ERR`; only the final sum goes to `$*OUT`. On the screen the progress and the result look alike, but they travel through different streams — which is why redirecting standard error away with `2>/dev/null` leaves just the final `15` behind.

{% include nav.html %}
