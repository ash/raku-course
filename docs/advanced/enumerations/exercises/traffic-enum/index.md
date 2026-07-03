---
title: Exercise ’Traffic lights‘
---

{% include menu.html %}

## Problem

Define an enum `Light` with the constants `red`, `amber`, and `green` (in that order). Declare a variable typed with the enum, `my Light $current`, and set it to `red`. Print the light together with the number behind it, in the form `red is 0`.

Then **change the light a couple of times** — reassign `$current` to `amber`, then to `green`, printing it the same way after each change — so you walk `red` → `amber` → `green`.

You might expect `$current++` to move to the next light on its own — give it a try and see what happens.

## Example

The program prints:

```
red is 0
amber is 1
green is 2
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
