---
title: 'Solvo: Eltiru la nombron'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
grammar Weight {
    token TOP    { <number> 'kg' { make $<number>.Int } }
    token number { \d+ }
}

say Weight.parse('5kg').made;
```

🦋 Vi povas trovi la fontkodon en la dosiero [extract-the-number.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/make-and-made/extract-the-number.raku).

## Eligo

```
5
```

## Komentoj

1. La ŝablono kongruas kun la ciferoj kaj la laŭlitera `kg`, sed la enlinia bloko konservas nur `$<number>.Int` — la entjeron, sen la unuo.

1. `made` relegas tiun valoron: vera `5`, preta por kalkuli, anstataŭ la teksto `5kg`. Jen la tipa laboro de `make` — transformi kongruon en la puran valoron, kiun vi efektive volas.

{% include nav.html %}
