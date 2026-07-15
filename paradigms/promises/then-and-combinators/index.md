---
title: Chaining and combining
---

{% include menu.html %}

Promises become even more powerful when you combine them. The most common need is to wait for **several** at once. `await` accepts a list of promises and returns their results in order:

```raku
my @jobs = (start { 1 }), (start { 2 }), (start { 3 });
say await @jobs;     # (1 2 3)
say [+] await @jobs; # 6
```

The three jobs run concurrently; `await @jobs` waits for all of them and hands back `(1, 2, 3)`. Because the results come back in the same order as the promises, you can reduce them as usual.

You can also chain work onto a promise with `.then`, which runs a follow-up block once the promise is done. Inside it, `.result` is the value of the original promise:

```raku
my $p = start { 10 };
my $q = $p.then({ .result * 2 });
say await $q; # 20
```

`$q` is a new promise that doubles the result of `$p`. Awaiting it gives `20`.

The block has no explicit parameter, so it receives the finished promise as the topic variable `$_` — which is why a bare `.result` works: it is really `$_.result`. If you would rather give that promise a name, use a pointy block:

```raku
my $q = $p.then(-> $prev { $prev.result * 2 });
```

This behaves exactly the same way; `$prev` is the original promise `$p`, and `$prev.result` is its value.

With `start`, `await`, and `.then`, you can describe whole pipelines of concurrent work: launch many tasks, combine their results, and build new tasks from old ones — all without touching a thread directly.

{% include nav.html %}
