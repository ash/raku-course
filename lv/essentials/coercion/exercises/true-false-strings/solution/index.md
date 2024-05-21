---
title: Risinājums uzdevumam ‘True and False strings’
---

{% include menu.html %}

Šis uzdevums ir līdzīgs [iepriekšējam](../../true-false-numbers), bet šoreiz uzdevums ir nedaudz sarežģītāks. Ir vairāk ‘aizdomīgu’ virkņu, kuras var tikt uzskatītas par `False`. Izpētīsim tās.

```raku
say ?'';

say ?' ';
say ?'        ';

say ?"\n";

say ?'0';
say ?'0.0';
```

No visām šīm tikai tukšā virkne tiek uzskatīta par `False`. Visas pārējās virknes, pat tās, kas satur tikai atstarpes vai skaitli `0`, tiek uzskatītas par `True`.

🦋 Pilnu programmu ar iepriekš minēto piemēru var atrast failā [true-false-strings.raku](https://github.com/ash/raku-course/blob/master/exercises/coercion/true-false-strings.raku).

{% include nav.html %}