---
title: 'Exercise: Seen before?'
---

{% include menu.html %}

## Problem

Create a program that starts a loop with the following actions:

1. Ask to enter a word.
2. If the word has been seen once already, print `Seen!`.
3. If the word has been seen more than once, print `Seen 2 times!`, etc.
3. Repeat the loop.

## Example

An example of interaction with the program:

```console
$ raku seen-before.raku
Word: I
Word: never
Word: saw
Word: a
Word: saw
Seen!
Word: that
Word: saw
Seen 3 times!
Word: as
Word: that
Seen!
Word: saw
Seen 4 times!
Word: sawed
Word: ^C
```

To stop the program, press `Ctrl+C`.

## Solution

✅ [See the solution](solution)

{% include nav.html %}
