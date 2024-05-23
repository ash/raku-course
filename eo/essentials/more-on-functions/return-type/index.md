---
title: Return type of functions
---

{% include menu.html %}

La rezulto de la funkcio ankaŭ povas esti eksplicite tipigita. Estas kelkaj manieroj por esprimi tion en kodo.

```raku
sub add(Int $x, Int $y) returns Int { $x + $y }

my Int sub add(Int $x, Int $y) { $x + $y }

sub add(Int $x, Int $y) of Int { $x + $y }

sub add(Int $x, Int $y --> Int) { $x + $y }
```

Elektu unu kiu plaĉas al vi plej multe. Rimarku ke en la kvara ekzemplo, la revena tipo estas skribita ene de la krampoj kun funkciaj parametroj.

{% include nav.html %}