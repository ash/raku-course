---
title: Standard streams
---

{% include menu.html %}

Every program has three _standard streams_ connecting it to its environment: standard output, standard error, and standard input. Raku makes them available through three special variables: `$*OUT`, `$*ERR`, and `$*IN`.

You have been writing to standard output all along: `say` and `print` send their text to `$*OUT`.

```raku
say 'Hello'; # goes to standard output
```

Diagnostic and error messages are kept separate, on standard error, so they do not get mixed into the program’s real output. The `note` routine writes there:

```raku
note 'Something looks wrong'; # goes to standard error
```

This separation is useful because the two streams can be redirected independently — for example, you can save a program’s output to a file while still seeing its error messages on screen.

You can also write to the streams directly. Each of `$*OUT` and `$*ERR` is a _handle_ with its own `say` and `print` methods:

```raku
$*OUT.say('a normal line');
$*ERR.say('a diagnostic line');
```

The third stream, `$*IN`, is standard input. You met it indirectly through `prompt`, which reads a line from it. We return to reading input when we look at [file handles](/oop/file-handles), because `$*IN` is a handle just like an open file.

{% include nav.html %}
