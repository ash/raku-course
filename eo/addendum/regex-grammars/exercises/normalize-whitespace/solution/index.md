---
title: 'Solvo: Normigu la spacojn'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $messy = '  too    many     spaces   ';

say $messy.trim.subst(/\s+/, ' ', :g);
```

🦋 Vi povas trovi la fontkodon en la dosiero [normalize-whitespace.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/regex-grammars/normalize-whitespace.raku).

## Eligo

```
too many spaces
```

## Komentoj

1. `.trim` forigas la komencajn kaj finajn spacojn; la anstataŭigo poste
anstataŭigas ĉiun serion da spacetoj `\s+` per unu spaco.

1. La adverbo `:g` faras la anstataŭigon tutampleksa, do *ĉiuj* interspacoj estas
kunpremitaj, ne nur la unua.

{% include nav.html %}
