---
title: Funkciju atgriešanas tips
---

{% include menu.html %}

Funkcijas rezultātu var arī skaidri norādīt ar tipu. Ir dažādi veidi, kā to izteikt kodā.

```raku
sub add(Int $x, Int $y) returns Int { $x + $y }

my Int sub add(Int $x, Int $y) { $x + $y }

sub add(Int $x, Int $y) of Int { $x + $y }

sub add(Int $x, Int $y --> Int) { $x + $y }
```

Izvēlieties to, kas jums patīk visvairāk. Pamaniet, ka ceturtajā piemērā atgriešanas tips ir rakstīts iekavās ar funkcijas parametriem.

{% include nav.html %}