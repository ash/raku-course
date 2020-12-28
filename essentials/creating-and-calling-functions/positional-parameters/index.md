---
title: Positional parameters
---

{% include menu.html %}

The order of function parameters is important. For example, create a function that computes the difference between teh two numbers:

    sub diff($a, $b) { $a - $b }

It is obvious that the result of calling `diff(10, 20)` differs from `diff(20, 10)`.

Parameters that are listed as a comma-separated list like in the function above are called _positional_. Their meaning depends on the order in which they are passed to the function when it is called.

{% include nav.html %}
