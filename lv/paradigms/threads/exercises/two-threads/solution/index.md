---
title: 'Risinājums: Divi pavedieni'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my ($x, $y);
my $a = Thread.start({ $x = 10 * 10 });
my $b = Thread.start({ $y = 20 * 20 });
$a.finish;
$b.finish;
say $x + $y;
```

🦋 Atrodiet programmu failā [two-threads.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/threads/two-threads.raku).

## Izvade

```
500
```

## Komentāri

1. Abi pavedieni darbojas vienlaikus, katrs rakstot savu rezultātu savā koplietotajā mainīgajā.

1. `$x` un `$y` nolasīšana notiek tikai **pēc** abiem `.finish` izsaukumiem, tāpēc rezultāti noteikti ir gatavi: `100 + 400` ir `500`. Tieši sagaidīšana pirms nolasīšanas padara vērtību uzticamu.

{% include nav.html %}
