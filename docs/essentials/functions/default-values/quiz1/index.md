---
title: Quiz — Defining default values
---

{% include menu.html %}

Which functions are defined correctly?

## 1

Functions with positional parameters:

{:.quiz}
1 | sub p1($a = 3) {}
1 | sub p2($a, $b = 3) {}
0 | sub p4($a = 3, $b) {} | All default values must be at the end of the list of parameters.
1 | sub p3($a = 3, $b = 4) {}

## 2 

Functions with named parameters:

{:.quiz}
1 | sub n1(:$a = 3) {}
1 | sub n2(:$a, :$b = 3) {}
1 | sub n4(:$a = 3, :$b) {} | Unlike positional parameters, the order of named ones does not matter.
1 | sub n3(:$a = 3, :$b = 4) {}

{% include quiz.html %}

{% include nav.html %}
