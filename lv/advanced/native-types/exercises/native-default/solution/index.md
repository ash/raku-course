---
title: 'Risinājums: Natīvā noklusējuma vērtība'
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my num $n;
my str $s;

say $n;
say "[$s]";
```

🦋 Programmas pirmkodu var atrast failā [native-default.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/native-types/native-default.raku).

## Izvade

```
0
[]
```

## Komentāri

1. Natīvais `num` nevar būt nedefinēts, tāpēc, tāpat kā natīvais `int`, tas sākas ar `0`, nevis ar `(Num)`.

1. Natīvais `str` sākas kā tukša virkne, tāpēc iekavas iznāk bez nekā starp tām. Neviens no natīvajiem tipiem nekad nesatur nedefinētu vērtību.

1. Tipu specifikatori šeit ir būtiski. Izlaidiet tos — rakstiet `my $n; my $s;` — un mainīgie kļūst par parastiem konteineriem, kas sākas kā *nedefinēti* (`Any`). Tad `say $n` izdrukā `(Any)`, un nedefinētā `$s` interpolēšana brīdina *"Use of uninitialized value … in string context"*. Tieši natīvie `num` un `str` tipi garantē `0` un tukšas virknes noklusējuma vērtības.

{% include nav.html %}
