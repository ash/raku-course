---
title: Exercise ’Alias an array‘
---

{% include menu.html %}

## Problem

You are given an array:

```raku
my @original = 10, 20, 30;
```

Create a second name, `@alias`, that refers to the _same_ array (do not copy it). This time, `push` a new element onto `@original`, and then print `@alias` to show that the alias sees not just value changes but structural ones too.

## Example

The program prints:

```
[10 20 30 40]
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
