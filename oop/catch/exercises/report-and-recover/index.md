---
title: Exercise ’Report and recover‘
---

{% include menu.html %}

## Problem

Show how `CATCH` lets a program recover and keep going with a sensible default.

Declare a variable `$timeout` set to a default of `30` before a block. Inside the block, do `die 'config missing'` and then (on a line that will never be reached) try to set `$timeout` to `60`. Use a `CATCH` phaser whose `default` block prints `warning: <message>; keeping default`. After the block, print `timeout is <timeout> seconds`.

## Example

The program prints:

```
warning: config missing; keeping default
timeout is 30 seconds
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
