---
title: 'Solvo: Kie estas la cifero'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $m = 'abc9x2z' ~~ /\d/;
say $m.from;
say $m.to;
```

🦋 Vi povas trovi la fontkodon en la dosiero [where-digit.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/matching/where-digit.raku).

## Eligo

```
3
4
```

## Komentoj

1. La klaso `\d` kongruas kun unu cifero. La motoro haltas ĉe la **unua**, kiun ĝi trovas — `9`, ĉe indekso `3` (pozicioj kalkuliĝas ekde nulo); la posta `2` neniam estas atingata.

1. `.from` donas la komencon de la kongruo, `3`, kaj `.to` donas la pozicion tuj post ĝia fino, `4`. La diferenco `.to - .from` estas la longeco de la kongruo — unu signo ĉi tie.

{% include nav.html %}
