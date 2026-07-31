---
title: 'Solvo: Averto per `note`'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $value = -3;

note 'Warning: the value is negative' if $value < 0;
say $value.abs;
```

🦋 Vi povas trovi la fontkodon en la dosiero [note-a-warning.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/standard-streams/note-a-warning.raku).

## Eligo

```
Warning: the value is negative
3
```

## Komentoj

1. `note` sendas la averton al norma erarfluo, kaj nur kiam la valoro efektive estas negativa. `say` sendas la veran rezulton — la absolutan valoron `3` — al norma eligo.

1. Teni la diagnozon sur norma erarfluo signifas, ke ĝi ne poluas la veran eligon de la programo: forĵeti norman erarfluon per `2>/dev/null` lasas nur la `3`.

{% include nav.html %}
