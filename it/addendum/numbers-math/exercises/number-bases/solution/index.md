---
title: 'Soluzione: Un numero, tre basi'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my $n = 255;

say $n.base(2);
say $n.base(8);
say $n.base(16);
```

🦋 Trova il programma nel file [number-bases.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/numbers-math/number-bases.raku).

## Output

```
11111111
377
FF
```

## Commenti

1. Il metodo `.base` rappresenta un intero in qualunque base da 2 a 36, restituendo una
stringa. `255` è `11111111` in binario e `FF` in esadecimale — il valore più grande che
sta in un byte.

{% include nav.html %}
