---
title: Exercise ’Load at run time‘
---

{% include menu.html %}

## Problem

You are given a module `Greeting.rakumod` that exports a subroutine `hello`:

```raku
unit module Greeting;

sub hello($name) is export {
    "Hello, $name!"
}
```

Load this module with `require` instead of `use`, so it is brought in at **run time**. Because `require` does not import names automatically, list the symbol you want with `require Greeting <&hello>;`. Then call `hello('Sam')` and print the result.

To show off what run-time loading buys you, put the `require` inside a `sub MAIN` with a `--quiet` flag, so that the module is loaded *only* when a greeting is actually wanted. With `--quiet`, the program prints `Silence.` and never touches the module at all.

## Example

Run with the module on the search path, the program prints:

```console
$ raku -I. require-import.raku
Hello, Sam!

$ raku -I. require-import.raku --quiet
Silence.
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
