---
title: Two timers
---

{% include menu.html %}

Every react example so far has used `Supply.from-list`, which pushes all of its values the instant it is tapped. That is why each stream printed in full before the next one started — there was no waiting involved. Real event streams are not like that: their values arrive spread out over **time**, and a `react` block interleaves them as they come.

A timer is the simplest stream that behaves this way. `Supply.interval($period)` emits an increasing counter — `0, 1, 2, …` — once every `$period` seconds. Run two of them at different rates inside one `react`, and their values weave together:

```raku
react {
    whenever Supply.interval(0.3) {
        say "tick $_";
    }
    whenever Supply.interval(0.5, 0.25) {
        say "TOCK $_";
    }
    whenever Promise.in(1.4) {
        done;
    }
}
```

A typical run prints:

```
tick 0
TOCK 0
tick 1
tick 2
TOCK 1
tick 3
tick 4
TOCK 2
```

The fast `tick` fires every `0.3` seconds; the slower `TOCK` every `0.5`, starting a quarter-second in (the second argument to `interval` is that initial delay). Neither waits for the other — the `react` block just runs whichever `whenever` body goes with the value that has arrived, so the two streams **intersect** instead of taking turns.

Because timers never finish on their own, a third `whenever` provides the exit: `Promise.in(1.4)` is kept after 1.4 seconds, and its body calls `done` to end the `react` block. Without it, the react would tick and tock forever.

The exact interleaving depends on timing, so a later run may order the lines a little differently — but that is the nature of reacting to live events: you respond to each as it happens, whenever it happens.

{% include nav.html %}
