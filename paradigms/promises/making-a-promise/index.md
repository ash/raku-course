---
title: Making your own promise
---

{% include menu.html %}

Every promise so far came from `start`. But you can also create one directly with
`Promise.new` — a promise that has not finished yet — and settle it yourself when
the result (or the news) is ready. `.keep` fulfils it with a value:

```raku
my $p = Promise.new;   # a fresh, unsettled promise

$p.keep(42);           # fulfil it with a value
say await $p;          # 42
```

`.break` is the failure case. Awaiting a broken promise re-throws the error, just
as it does for a `start` block that [died](/paradigms/await/awaiting-promises) — and
if nothing catches it, that exception stops the program:

```raku
my $p = Promise.new;
$p.break('disk full');

say await $p;             # dies here with 'disk full'
say 'never reached';      # this line does not run
```

To keep going, catch the failure with `try`, exactly as you would around any code
that might die:

```raku
my $p = Promise.new;
$p.break('disk full');

my $result = try await $p;
say $result // "the job failed: $!"; # the job failed: disk full
```

If the outcome is already known, two shortcuts make a promise that starts out
settled: `Promise.kept($value)` and `Promise.broken($error)`.

```raku
say await Promise.kept(7); # 7
```

Why make a promise by hand? Because not every result comes from a `start` block.
An event that fires later, a message that arrives, a callback from another library
— `Promise.new` lets you turn any of these into a promise that the rest of the
program can `await` and combine like any other.

{% include nav.html %}
