---
title: Running tests
---

{% include menu.html %}

A single test file is just a Raku program, so you can run it directly:

```
raku t/01-basic.rakutest
```

It prints its TAP output to the screen. For more than a file or two, you want a _test runner_ that runs a whole directory of tests and summarises the results. Raku’s runner is `prove6`:

```
prove6 t/
```

This runs every test file under `t/` and reports how many files and tests passed, with a single overall pass/fail at the end — far easier to read than the raw TAP from each file.

When a distribution has a `META6.json`, the module tool runs its tests for you:

```
zef test .
```

`zef test` finds the `t/` directory, runs the suite, and reports the result — which is exactly what happens automatically before a distribution is installed. So tests serve double duty: you run them while developing with `prove6`, and the ecosystem runs them to verify a distribution before anyone installs it.

> Test files are named with a `.rakutest` (or `.t`) extension and conventionally numbered, as in `t/01-basic.rakutest`.

{% include nav.html %}
