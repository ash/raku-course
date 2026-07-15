---
title: Awaiting a promise
---

{% include menu.html %}

`await` takes a promise, waits for it to complete, and returns its result:

```raku
my $p = start { 7 * 6 };
say await $p; # 42
```

The program pauses at `await` only as long as needed, then continues with the value the promise produced.

Given several promises, `await` waits for **all** of them and returns their results in the same order as the promises in the list:

```raku
my @jobs = (start { 5 }), (start { 10 }), (start { 15 });
say await @jobs;     # (5 10 15)
say [+] await @jobs; # 30
```

The jobs run concurrently, but `await @jobs` does not return until every one is done. Each result then sits at the same position as its promise in `@jobs` — no matter which job happened to finish first.

If an awaited promise was **broken** — its block threw an exception — `await` rethrows that exception at the point of the `await`. This means errors in background work surface where you wait for it, so you can handle them with the usual `try` / `CATCH` from the part on exceptions:

```raku
my $p = start { die 'no such file' };

my $result = try await $p;
say $result // "the job failed: $!";
```

This prints:

```
the job failed: no such file
```

The `die` happens on a background thread, but the exception travels with the promise and pops out at `await`. The `try` catches it there, leaving `$result` undefined and the error in `$!` — so a failure in concurrent work is handled exactly like any other exception. Awaiting is therefore not just about getting a value; it is the moment where concurrent work rejoins the main flow, results and errors alike.

{% include nav.html %}
