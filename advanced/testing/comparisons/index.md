---
title: Comparisons and plans
---

{% include menu.html %}

Beyond `ok` and `is`, the `Test` module has comparisons for different kinds of value. The most useful are:

* `is` — compares two values for equality (as strings/numbers)
* `is-deeply` — compares two data structures for exact, type-aware equality
* `like` — checks that a string matches a regex
* `isnt` — passes when two values are **not** equal

`is-deeply` is the right choice for arrays, hashes, and nested data, because it compares structure and type precisely:

```raku
use Test;

my @reversed = (1, 2, 3).reverse;
is-deeply @reversed, [3, 2, 1], 'reversed';

done-testing;
```

This prints:

```
ok 1 - reversed
1..1
```

Where `is` would stringify and compare loosely, `is-deeply` insists the structures truly match. Note that `done-testing` puts the plan `1..1` at the end, after the check.

Instead of letting `done-testing` count the tests for you, you can state the number up front with `plan`. This guards against a test file that exits early and silently skips checks:

```raku
use Test;

plan 2;
ok True,  'first';
ok 1 < 2, 'second';
```

This time the plan comes **first**, ahead of the results:

```
1..2
ok 1 - first
ok 2 - second
```

That is the visible difference from `done-testing`: `plan` prints the count `1..2` at the top, before any checks run, whereas `done-testing` prints it at the very end. Either way, with `plan 2` the run expects exactly two tests; if fewer (or more) actually run, the suite is reported as failing. Use `plan` when the count is fixed and known, and `done-testing` when it is easier to let the framework count.

{% include nav.html %}
