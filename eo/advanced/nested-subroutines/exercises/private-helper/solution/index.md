---
title: 'Solvo: Privata helpanto'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
sub stats {
    sub double($x) { $x * 2 }

    say double(3) + double(5);
}

stats;
```

🦋 Vi povas trovi la fontkodon en la dosiero [private-helper.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/nested-subroutines/private-helper.raku).

## Eligo

```
16
```

## Komentoj

1. La helpanto `double` estas difinita ene de `stats`, do ĝi estas videbla nur tie kaj ne povas esti vokita de aliloke en la programo.

1. `stats` uzas ĝin dufoje: `double(3)` estas `6` kaj `double(5)` estas `10`, kaj ilia sumo estas `16`.

{% include nav.html %}
