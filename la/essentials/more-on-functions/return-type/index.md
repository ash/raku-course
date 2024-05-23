---
title: Reditus genus functionum
---

{% include menu.html %}

Eventus functionis etiam explicite typus fieri potest. Sunt pauci modi ad id exprimendum in codice.

```raku
sub add(Int $x, Int $y) returns Int { $x + $y }

my Int sub add(Int $x, Int $y) { $x + $y }

sub add(Int $x, Int $y) of Int { $x + $y }

sub add(Int $x, Int $y --> Int) { $x + $y }
```

Elige unum quod maxime placet. Animadverte quod in quarto exemplo, reditus typus intra parentheses cum parametris functionis scriptus est.

{% include nav.html %}