---
title: Exercise ’Shapes sharing a role‘
---

{% include menu.html %}

## Problem

Define a `Shape` role that requires an `area` method, then make `Circle` and
`Square` classes that do the role.

Write a `describe` subroutine whose parameter is *typed* as `Shape`, so it accepts
any shape and refuses anything that is not one. It should print the shape’s area
labelled with its class name. Call it for a circle of radius `2` and a square of
side `3`.

The subroutine never checks which kind of shape it received: because its parameter
is a `Shape`, the object is guaranteed to have an `area` method, so the same
`.area` call works on whichever shape comes in. That is what the role gives you —
a single type you can require, and one piece of code that treats every class doing
it uniformly.

## Example

The program prints:

```
Circle: 12.56636
Square: 9
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
