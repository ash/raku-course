---
title: Catching exceptions with `try`
---

{% include menu.html %}

When something goes wrong in a Raku program — a missing file, an explicit `die` — an _exception_ is thrown. By default, an unhandled exception stops the program. The `try` block lets you run code that might fail without crashing.

You wrap the risky code in a `try` block. If an exception is thrown inside it, the block stops there, but the program continues:

```raku
my $result = try {
    die 'Boom!';
};

say "Still works";
```

The `die` is caught by the `try`, so the program does not crash — it carries straight on to the next statement and prints:

```
Still works
```

When the block fails like this, it evaluates to an undefined value, so `$result` is undefined:

```raku
say $result.defined; # False
```

The exception that was caught is stored in the special variable `$!`. You can read its message from there:

```raku
say $!.message; # Boom!
```

So `try` turns a fatal error into something your program can inspect and react to. If the block runs without any exception, `$result` holds its value, and `$!` is undefined.

{% include nav.html %}
