---
title: Not every error is immediate
---

{% include menu.html %}

By default a thrown exception stops the program at once, and `try` is how you catch it. But not everything that looks like a fatal error actually halts your program the moment it happens. Raku has failures that stay quiet — postponing their reaction until you use the result, or letting you inspect them and carry on. A couple of these have already appeared in this part, and it is worth collecting them in one place.

**A division by zero.** Dividing by zero does not blow up where it is written. The bad value is produced and held quietly; it only throws when you *use* it — by printing or coercing it, for example:

```raku
my $x = 1 / 0;    # no error here
say 'still running';
say $x;           # only now does it throw
```

This deferred behaviour, and the `Failure` objects behind it, are the subject of [Soft failures](/oop/failures).

**A failing external program.** A `Proc` returned by `run` or `shell` that exited unsuccessfully does not throw when it is produced. It throws only if you *discard* it unhandled; store it and read `.exitcode` (or test it as a Boolean) and the failure stays a plain value you can react to. You saw this in [The Proc object](/oop/external-programs/the-proc-object).

The common thread: a failure can be *deferred* — turned into a value you examine when you are ready, rather than an immediate crash. `try` and the `CATCH` phaser deal with the errors that are thrown right away; these mechanisms deal with the ones that are not.

{% include nav.html %}
