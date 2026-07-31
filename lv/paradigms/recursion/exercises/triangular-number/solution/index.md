---
title: 'Risinājums: Trijstūrveida skaitlis'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
multi tri(0)  { 0 }
multi tri($n) { $n + tri($n - 1) }

say tri(5);
```

🦋 Atrodiet programmu failā [triangular-number.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/recursion/triangular-number.raku).

## Izvade

```
15
```

## Komentāri

1. Bāzes gadījums ir savs kandidāts: `multi tri(0)` sakrīt tikai tad, kad arguments ir tieši `0`, un atgriež `0`, nerekursējot.

1. Katrs cits izsaukums nokļūst `multi tri($n)`, kas pieskaita `$n` skaitļa `$n - 1` trijstūrveida skaitlim. Izsaukumi nokāpj `5 + 4 + 3 + 2 + 1 + 0`, un, kad arguments sasniedz `0`, despečs pārslēdzas uz bāzes gadījuma kandidātu un summa attinas līdz `15`.

{% include nav.html %}
