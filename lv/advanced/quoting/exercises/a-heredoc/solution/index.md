---
title: 'Risinājums: Heredoc'
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $name  = 'Anna';
my $item  = 'Raku Book';
my $price = 25;
my $count = 3;

print qq:to/END/;
    Dear $name,
    You ordered $count copies of "$item".
    That comes to {$count * $price} dollars.
    Thank you!
    END
```

🦋 Programmas pirmkodu var atrast failā [a-heredoc.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/quoting/a-heredoc.raku).

## Izvade

```
Dear Anna,
You ordered 3 copies of "Raku Book".
That comes to 75 dollars.
Thank you!
```

## Komentāri

1. Heredoc sākas ar `qq:to`, nevis `q:to`, tāpēc tas interpolē. Tāpat kā `qq` virknē, tas aizpilda skalāros — `$name`, `$count`, `$item` — *un* izpilda iegultu kodu: bloks `{$count * $price}` aprēķina `3 * 25`, tāpēc summa `75` parādās tieši tekstā.

1. Dubultpēdiņas ap `"$item"` šeit ir tikai burtiskas rakstzīmes; heredoc iekšienē nav norobežotāja, no kura aizbēgt, tāpēc tās tiek izdrukātas tā, kā ir, kamēr `$item` joprojām tiek interpolēts.

1. Pamatteksts un aizverošais `END` ir atkāpēti par vienu un to pašu četru atstarpes. Terminatora atkāpe tiek noņemta no katras rindas, tāpēc šīs četras atstarpes nekad nenonāk virknē — izvade sākas pie kreisās malas.

1. Heredoc jau beidzas ar jaunrindu, tāpēc tiek izmantots `print`, nevis `say`, lai nepievienotu otru tukšu rindu.

{% include nav.html %}
