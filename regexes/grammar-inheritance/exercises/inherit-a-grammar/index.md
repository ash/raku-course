---
title: Exercise ’Inherit a grammar‘
---

{% include menu.html %}

## Problem

Write a base grammar `Animal` whose `TOP` matches a `sound` token (any word). Then write two grammars that inherit from it: `Dog`, which overrides `sound` to match `woof`, and `Cat`, which overrides it to match `meow`. Parse `'woof'` with `Dog`, `'meow'` with `Cat`, and — to show each keeps its own sound — `'meow'` with `Dog` as well. Print whether each succeeded.

## Example

The program prints:

```
True
True
False
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
