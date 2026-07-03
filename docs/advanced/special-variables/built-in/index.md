---
title: Built-in special variables
---

{% include menu.html %}

Raku predefines a set of variables for you. Most of them are _dynamic_ (the `*` twigil), so — as you saw with [dynamic variables](/advanced/special-variables/dynamic-variables) — you can read them anywhere and even override them for a scope. Here are the ones you will reach for most often.

## Standard streams

Input and output flow through three dynamic variables: `$*OUT` (standard output), `$*ERR` (standard error), and `$*IN` (standard input). `say` and `print` write to `$*OUT`; to send text to standard error instead, call the method on `$*ERR`:

```raku
$*OUT.say('normal output'); # goes to standard output
$*ERR.say('a diagnostic');  # goes to standard error
```

Because these are dynamic, redirecting `$*OUT` in a block sends the output of everything called inside that block to the new destination — without changing any of that code.

## The program and its process

A few variables describe the running program itself:

```raku
say $*PROGRAM-NAME; # the path of the script being run
say $*PID;          # the process id of this program
say $*CWD;          # the current working directory
```

Their values change from run to run, so no fixed output is shown here.

## Command line and environment

The arguments and the environment arrive in two ready-made containers:

* `@*ARGS` — the list of command-line arguments (the same ones a `MAIN` subroutine receives)
* `%*ENV` — the environment variables, as a hash

```raku
say @*ARGS.elems; # how many arguments were passed
say %*ENV<HOME>;  # the value of the HOME environment variable
```

These built-ins save you from wiring up the same information by hand. And because they are dynamic, looked up through the call stack, any `$*` built-in can be overridden for a scope exactly like a `$*` variable of your own.

Alongside these dynamic variables, Raku also has the compile-time `?` built-ins — `$?FILE` and `$?LINE` — which you already met on the [twigils](/advanced/special-variables/twigils) page.

{% include nav.html %}
