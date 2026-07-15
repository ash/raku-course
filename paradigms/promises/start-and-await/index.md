---
title: start and await
---

{% include menu.html %}

The `start` keyword runs a block in the background and immediately returns a `Promise`:

```raku
my $p = start { 2 + 2 };
```

The work happens on Raku’s thread pool while your program carries on. To get the result, use `await`, which waits for the promise to finish and gives you its value:

```raku
my $p = start { 2 + 2 };
say await $p; # 4
```

`await` blocks just long enough for the promise to complete, then returns whatever the block produced — here, `4`. If the work is already done by the time you await, you get the result at once.

This pair — `start` to launch, `await` to collect — is the core of promise-based concurrency. You can launch several pieces of work, let them run at the same time, and await their results when you are ready, which is exactly what the next topic builds on.

{% include nav.html %}
