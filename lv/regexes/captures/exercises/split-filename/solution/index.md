---
title: 'Risinājums: Sadaliet faila nosaukumu'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
if 'report.txt' ~~ / (\w+) '.' (\w+) / {
    say ~$0;
    say ~$1;
}
```

🦋 Atrodiet programmu failā [split-filename.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/captures/split-filename.raku).

## Izvade

```
report
txt
```

## Komentāri

1. Pirmais iekavu pāris satver pamatnosaukumu `$0`, otrais satver paplašinājumu `$1`. Punkts starp tiem ir likts pēdiņās, lai tas sakristu ar burtisku `.`, nevis ar jebkuru rakstzīmi.

1. `~` katra tvēruma priekšā to ieliek virknes kontekstā, tāpēc tas izdrukājas kā vienkāršs teksts. Vienkāršs `say $0` tā vietā rādītu sakritības objektu ar stūra iekavām, `｢report｣`. Rakstot `say $0.Str`, iznāk tas pats, kas ar `say ~$0`.

{% include nav.html %}
