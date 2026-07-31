---
title: 'Solvo: Jaro kaj monato'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my regex year  { \d ** 4 }
my regex month { \d ** 2 }

if '2025-06' ~~ / <year> '-' <month> / {
    say $<year>;
    say $<month>;
}
```

🦋 Vi povas trovi la fontkodon en la dosiero [year-token.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/what-is-a-grammar/year-token.raku).

## Eligo

```
｢2025｣
｢06｣
```

## Komentoj

1. Du nomitaj regulesprimoj estas deklaritaj, ĉiu priskribanta unu pecon de la dato: kvarcifera `year` kaj ducifera `month`.

1. La ŝablono kombinas ilin kun laŭlitera streketo inter ili, kaj ĉiu estas kaptita sub sia propra nomo. Konstrui pli grandan ŝablonon el malgrandaj nomitaj partoj tiel estas ĝuste la ideo, kiun gramatiko formaligas.

{% include nav.html %}
