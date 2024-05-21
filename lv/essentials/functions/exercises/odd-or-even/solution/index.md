---
title: 'Risinājums: Pāra vai nepāra'
---

{% include menu.html %}

Funkcijas ķermenis ir diezgan mazs, kas ir pamatots iemesls izlaist gan `return` rutīnu, gan semikolu rindas beigās.

## Kods

Šeit ir risinājums:

```raku
sub f($n) {
    $n %% 2 ?? 'Even' !! 'Odd'
}

say f(10);
say f(5);
say f(0);
say f(3);
```

🦋 Atrodi programmu failā [odd-or-even.raku](https://github.com/ash/raku-course/blob/master/exercises/functions/odd-or-even.raku).

## Izvade

```console
$ raku exercises/functions/odd-or-even.raku
Even
Odd
Even
Odd
```

{% include nav.html %}