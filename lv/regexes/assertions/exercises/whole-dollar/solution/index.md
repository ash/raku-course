---
title: 'Risinājums: Starp iekavām'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
say '$50' ~~ / <?after '$'> \d+ >> <!before '.'> /;
```

🦋 Atrodiet programmu failā [whole-dollar.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/assertions/whole-dollar.raku).

## Izvade

```
｢50｣
```

## Komentāri

1. `<?after '$'>` ir pozitīva lūkošanās atpakaļ — tā pieprasa `$` tieši pirms skaitļa —, bet `<!before '.'>` ir negatīva lūkošanās uz priekšu — tā pieprasa, lai `.` **neseko**. Ne `$`, ne apkārtne nekļūst par sakritības daļu, tāpēc rezultāts ir tikai `50`.

1. `>>` ir vārda robeža, kas iezīmē skaitļa beigas. Bez tās rijīgais `\d+` varētu atkāpties: virknē `$39.99` tas atdotu `9` un sakritinātu `3` (kam `.` neseko). `>>` piespiež paņemt visu skaitli, tāpēc `$3.99` un `$39.99` pareizi nesakrīt ne ar ko.

1. Šis ir gadījums, kur lūkošanās uz priekšu atmaksājas: «kam neseko decimālpunkts» nevar izteikt ar parastu tverošu grupu, jo tur nav nekā, ko tvert, — ir tikai nosacījums, ko pārbaudīt.

{% include nav.html %}
