---
title: The solution of ’A running accumulator‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
sub make-accumulator($start) {
    my $total = $start;
    return -> $amount { $total += $amount };
}

my $acc = make-accumulator(100);

say $acc(10);
say $acc(25);
say $acc(-5);
```

🦋 You can find the source code in the file [accumulator.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/subs-functional/accumulator.raku).

## Output

```
110
135
130
```

## Comments

1. The returned block *closes over* `$total`: that variable lives on between calls,
so each call remembers the total from the previous one.

1. `$total += $amount` both updates the running sum and returns it, which is what
each `say` prints: `110`, then `135`, then `130`.

1. An alternative keeps the total inside the block itself, in a `state` variable.
Unlike an ordinary `my`, a `state` variable is initialised only once — the first
time the block runs — and then keeps its value across later calls:

    ```raku
    sub make-accumulator($start) {
        return -> $amount { state $total = $start; $total += $amount };
    }

    my $acc = make-accumulator(100);
    say $acc(10);
    say $acc(25);
    say $acc(-5);
    ```

    Each call to `make-accumulator` produces a fresh block with its own
    `state $total`, so separate accumulators stay independent — and the closure
    over `$start` still supplies each one its own starting value.

{% include nav.html %}
