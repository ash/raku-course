---
title: Тип на връщане на функции
---

{% include menu.html %}

Резултатът от функцията също може да бъде изрично типизиран. Има няколко начина да се изрази това в кода.

```raku
sub add(Int $x, Int $y) returns Int { $x + $y }

my Int sub add(Int $x, Int $y) { $x + $y }

sub add(Int $x, Int $y) of Int { $x + $y }

sub add(Int $x, Int $y --> Int) { $x + $y }
```

Изберете този, който ви харесва най-много. Забележете, че в четвъртия пример, типът на връщане е написан вътре в скобите с параметрите на функцията.

{% include nav.html %}