---
title: 'Risinājums: Divi pieslēgumi'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $s = Supply.from-list(1, 2, 3);

my @doubled;
my @tripled;
$s.map(* * 2).tap(-> $v { @doubled.push($v) });
$s.map(* * 3).tap(-> $v { @tripled.push($v) });

say @doubled;
say @tripled;
```

🦋 Atrodiet programmu failā [two-taps.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supply-kinds/two-taps.raku).

## Izvade

```
[2 4 6]
[3 6 9]
```

## Komentāri

1. `Supply.from-list` darbojas pēc pieprasījuma, tāpēc tā savu pilno virkni atkārto **katram** pieslēgumam atsevišķi.

1. Tas ļauj abiem pieslēgumiem pār vienu un to pašu avotu darbināt dažādus konveijerus: viens dubulto, otrs trīskāršo. Katrs redz visus `1, 2, 3`, tāpēc rezultāti ir `[2 4 6]` un `[3 6 9]`.

{% include nav.html %}
