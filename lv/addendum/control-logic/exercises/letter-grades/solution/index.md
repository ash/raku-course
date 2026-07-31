---
title: 'Risinājums: Burtu atzīmes'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
for 95, 82, 71, 58 -> $score {
    my $grade = do given $score {
        when * >= 90 { 'A' }
        when * >= 80 { 'B' }
        when * >= 70 { 'C' }
        when * >= 60 { 'D' }
        default      { 'F' }
    }

    say "$score -> $grade";
}
```

🦋 Atrodiet programmu failā [letter-grades.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/control-logic/letter-grades.raku).

## Izvade

```
95 -> A
82 -> B
71 -> C
58 -> F
```

## Komentāri

1. `do given` visu `given`/`when` pārvērš izteiksmē, kuras vērtība ir atbilstošais
bloks — šeit atzīmes burts —, ko noglabā `$grade`.

1. Katrs `when * >= N` ir Whatever salīdzinājums ar tematu. Uzvar pirmais, kas
izdodas, tāpēc katrai robežai vajag tikai apakšējo galu.

{% include nav.html %}
