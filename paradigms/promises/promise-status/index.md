---
title: The status of a promise
---

{% include menu.html %}

A promise is always in one of three states, reported by its `.status` method:

* **`Planned`** — not settled yet;
* **`Kept`** — it finished with a value;
* **`Broken`** — its work threw an exception.

These are the values of the `PromiseStatus` enumeration. Reading `.status` does not
wait — it tells you where the promise is *right now*, so you can check it before the
promise has settled and again afterwards:

```raku
my $p = start { sleep 1; 10 };

say $p.status; # Planned — read at once, while the block is still running
await $p;      # now wait for it to finish
say $p.status; # Kept
say $p.result; # 10
```

`.result` gives the kept value. Unlike `.status`, it *waits* until the promise is
settled, so on an unfinished promise it blocks exactly like `await`. And if the
promise was broken, `.result` re-throws the exception.

When you want to look at a failure without re-throwing it, use `.cause` — the
exception object of a broken promise:

```raku
my $p = start { die 'boom' };
try await $p;         # let it settle (and swallow the re-thrown error)
say $p.status;        # Broken
say $p.cause.message; # boom
```

So `.status` and `.cause` inspect a promise without disturbing it, while `await` and
`.result` collect its outcome — the value, or the error re-thrown.

{% include nav.html %}
