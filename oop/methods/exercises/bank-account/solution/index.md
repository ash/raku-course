---
title: The solution of ’A walking robot‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
class Robot {
    has $.position is rw = 0;

    method move($steps = 1) {
        $.position += $steps;
    }
}

my $r = Robot.new;
$r.move(5);
$r.move;
$r.move(2);

say $r.position;
```

🦋 You can find the source code in the file [bank-account.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/methods/bank-account.raku).

## Output

```
8
```

## Comments

1. The `position` attribute is `is rw` so that the method can change it, and it defaults to `0` so a fresh robot starts at the origin.

1. The `move` method gives its parameter a default value, `$steps = 1`. The bare call `$r.move` therefore advances by one step, while `$r.move(5)` and `$r.move(2)` advance by the amount given. The three calls add `5 + 1 + 2`, so the final position is `8`.

{% include nav.html %}
