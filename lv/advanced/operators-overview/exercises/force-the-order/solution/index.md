---
title: 'Risinājums: Piespiest secību'
---

{% include menu.html %}

Šeit ir iespējamais uzdevuma risinājums.

## Kods

```raku
say 2 ** (3 + 1);
```

🦋 Programmas pirmkodu var atrast failā [force-the-order.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/operators-overview/force-the-order.raku).

## Izvade

```
16
```

## Komentāri

1. Bez iekavām `**` saistītos ciešāk nekā `+`, dodot `(2 ** 3) + 1 = 9`.

1. Iekavas paaugstina saskaitīšanas prioritāti, tāpēc vispirms tiek aprēķināts `3 + 1`, un izteiksme kļūst par `2 ** 4`, kas ir `16`. Iekavas vienmēr ļauj mainīt noklusēto prioritāti.

{% include nav.html %}
