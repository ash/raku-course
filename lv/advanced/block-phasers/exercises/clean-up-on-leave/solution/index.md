---
title: 'Risinājums: Sakopt atstājot'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
sub work {
    LEAVE say 'Cleanup';

    say 'Working';
    return;
    say 'never reached';
}

work();
```

🦋 Atrodiet programmu failā [clean-up-on-leave.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/block-phasers/clean-up-on-leave.raku).

## Izvade

```
Working
Cleanup
```

## Komentāri

1. Pēc `Working` izdrukāšanas `return` uzreiz iziet no apakšprogrammas, tāpēc `never reached` netiek izdrukāts nekad.

1. Lai gan ķermenis tika atstāts priekšlaikus, fāzeris `LEAVE` pa ceļam uz āru tomēr nostrādā un izdrukā `Cleanup`. Tieši šī garantija padara `LEAVE` par pareizo vietu resursu atbrīvošanai — tas izpildās neatkarīgi no tā, kā bloks beidzas.

{% include nav.html %}
