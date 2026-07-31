---
title: 'Risinājums: Brīdinājums ar `note`'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $value = -3;

note 'Warning: the value is negative' if $value < 0;
say $value.abs;
```

🦋 Atrodiet programmu failā [note-a-warning.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/standard-streams/note-a-warning.raku).

## Izvade

```
Warning: the value is negative
3
```

## Komentāri

1. `note` sūta brīdinājumu uz standarta kļūdu plūsmu, un tikai tad, kad vērtība patiešām ir negatīva. `say` sūta īsto rezultātu — absolūto vērtību `3` — uz standarta izvadi.

1. Turot diagnostiku standarta kļūdu plūsmā, tā nepiesārņo programmas īsto izvadi: izmetot standarta kļūdas ar `2>/dev/null`, paliek tikai `3`.

{% include nav.html %}
