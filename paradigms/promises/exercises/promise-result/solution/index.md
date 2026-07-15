---
title: The solution of ’Chain a promise‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $p = start { 'raku' };
my $q = $p.then({ .result.uc });
my $r = $q.then({ .result ~ '!' });
say await $r;
```

🦋 You can find the source code in the file [promise-result.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/promises/promise-result.raku).

## Output

```
RAKU!
```

## Comments

1. Each `.then` builds a new promise that runs once the previous one is done. Inside its block, `.result` is the value the previous promise produced.

1. The first follow-up upper-cases `'raku'` into `'RAKU'`; the second appends `'!'`. Awaiting the last promise, `$r`, walks the whole chain and yields `'RAKU!'` — a small pipeline where each step transforms the result of the step before it.

{% include nav.html %}
