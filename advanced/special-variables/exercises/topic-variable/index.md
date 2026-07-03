---
title: Exercise ’The topic variable‘
---

{% include menu.html %}

## Problem

`$_` is the *topic* variable. A `for` loop sets it to each item in turn, and a method call written with a leading dot and no invocant — like `.chars` — acts on it, so `.chars` means `$_.chars`.

Loop over the three strings `'apple'`, `'fig'`, and `'cherry'`. For each one, print a line of the form `<word> has <n> letters`, using the topic `$_` for the word and a leading-dot `.chars` call for its length. Watch how `$_` becomes each string in turn.

## Example

The program prints:

```
apple has 5 letters
fig has 3 letters
cherry has 6 letters
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
