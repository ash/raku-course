---
title: Exercise ’A sized box‘
---

{% include menu.html %}

## Problem

Define a role `Sized` with a method `describe` that returns the string `size is <size>`, using `self.size`.

Then define a class `Box` that does the `Sized` role and has a `size` attribute. Create a box with size `10`, print the result of calling `describe` on it, and then, on a second line, print whether the box `~~ Sized` — that is, whether it is recognised as doing the role.

## Example

The program prints:

```
size is 10
True
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
