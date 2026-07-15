---
title: The solution of ’Two whenevers‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $deposits    = Supply.from-list(100, 50, 200);
my $withdrawals = Supply.from-list(30, 120);

my $balance = 0;

react {
    whenever $deposits    { $balance += $_ }
    whenever $withdrawals { $balance -= $_ }
}

say $balance;
```

🦋 You can find the source code in the file [two-whenevers.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/react-whenever/two-whenevers.raku).

## Output

```
200
```

## Comments

1. The two `whenever` blocks watch the two named supplies and react **differently**: deposits are added, withdrawals subtracted. One react block, two streams, two distinct reactions — that is the point of having a `whenever` per source.

1. The react block finishes only when both supplies are done, so the balance is final before it is printed: `100 + 50 + 200 - 30 - 120` gives `200`. Since addition and subtraction commute, the interleaving of the two streams does not affect the result.

1. Here both supplies deliver their values instantly, one stream after the other. In real life the events of a bank account arrive spread out over time — a deposit now, a withdrawal an hour later — and the two streams interlace, as in the [Two timers](/paradigms/react-whenever/two-timers) demo. The code stays exactly the same: the react block runs whichever `whenever` body matches each event as it comes in.

{% include nav.html %}
