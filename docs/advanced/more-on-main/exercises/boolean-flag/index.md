---
title: Exercise ’A command-line flag‘
---

{% include menu.html %}

## Problem

A `Bool` named parameter of `MAIN` turns into an on/off **flag**: writing `--flag` sets it to `True`, and leaving it out keeps its default. Write a program whose `MAIN` takes `Bool :$shout = False` and prints `HELLO` when the flag is set, or `hello` otherwise.

## Example

```console
$ raku boolean-flag.raku
hello

$ raku boolean-flag.raku --shout
HELLO
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
