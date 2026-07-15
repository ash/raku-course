---
title: Waiting for completion
---

{% include menu.html %}

`await` is the explicit way to wait, but reactive code waits too — just implicitly. A `react` block does not finish until all the supplies it watches are done, which gives you the same “everything has completed” guarantee:

```raku
my @values;

react {
    whenever Supply.from-list(2, 4, 6) {
        @values.push($_);
    }
}

say [+] @values; # 12
```

The `say` runs only **after** the react block has finished, so `@values` already holds every emitted value. In effect, the `react` block awaited the stream for you.

This is a useful pattern: use a `react` block to collect everything a supply emits, and then work with the collected result on the line after, confident that the stream is complete. Whether you wait for a promise with `await` or for a stream with `react`, the principle is the same — pause until the concurrent work is done, then continue with its results.

{% include nav.html %}
