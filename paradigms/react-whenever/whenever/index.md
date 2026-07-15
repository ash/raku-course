---
title: whenever
---

{% include menu.html %}

A single `react` block can hold **several** `whenever` blocks, each watching a different supply. The block reacts to whichever supply emits next, running the matching body:

```raku
my $sum = 0;

react {
    whenever Supply.from-list(1, 2, 3) {
        $sum += $_;
    }
    whenever Supply.from-list(10, 20) {
        $sum += $_;
    }
}

say $sum; # 36
```

Both supplies are watched at once. Their values — `1, 2, 3` and `10, 20` — all flow into `$sum`, which ends at `36`. The `react` block finishes only when **both** supplies are done.

Each `whenever` reacts independently, so this is how you combine streams: one `whenever` per source, all inside the same `react`. A real program might watch a network connection in one `whenever` and a timer in another, responding to each as its events arrive.

Within a `whenever` body you have the emitted value (as `$_` or a named parameter) and can do anything with it — update state, emit to another supply, or even close the react block early with `done`.

{% include nav.html %}
