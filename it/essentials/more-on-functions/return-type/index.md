---
title: Tipo di ritorno delle funzioni
---

{% include menu.html %}

Il risultato della funzione può anche essere esplicitamente tipizzato. Ci sono diversi modi per esprimere questo nel codice.

```raku
sub add(Int $x, Int $y) returns Int { $x + $y }

my Int sub add(Int $x, Int $y) { $x + $y }

sub add(Int $x, Int $y) of Int { $x + $y }

sub add(Int $x, Int $y --> Int) { $x + $y }
```

Scegli quello che ti piace di più. Nota che nel quarto esempio, il tipo di ritorno è scritto all'interno delle parentesi con i parametri della funzione.

{% include nav.html %}