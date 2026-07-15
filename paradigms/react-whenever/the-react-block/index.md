---
title: The react block
---

{% include menu.html %}

A `react` block is a place where reactions live. Inside it, a `whenever` says “whenever this supply emits a value, run this body”. The `react` block then waits until every supply it watches is finished:

```raku
my $sum = 0;

react {
    whenever Supply.from-list(1, 2, 3) {
        $sum += $_;
    }
}

say $sum; # 6
```

The `whenever` body runs once for each value — `1`, `2`, `3` — adding it to `$sum`. The topic value is available as `$_` (you can also name it with `-> $v`).

The key behaviour is that `react` **blocks** until its supplies are done. Only after the `Supply.from-list` has emitted all its values does the `react` block finish and the program move on to the `say`. That is why `$sum` is already `6` by the time it is printed: the react block waited for the whole stream.

This makes `react` a natural place to gather results from a stream: set up the reactions, let it run to completion, and use what you collected afterwards.

{% include nav.html %}
