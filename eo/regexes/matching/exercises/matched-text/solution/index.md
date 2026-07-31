---
title: 'Solvo: La kongruinta teksto'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
'database' ~~ /base/;
say $/.Str;
```

🦋 Vi povas trovi la fontkodon en la dosiero [matched-text.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/matching/matched-text.raku).

## Eligo

```
base
```

## Komentoj

1. Ĉiu sagaca kongruigo konservas sian rezulton en la speciala kongrua variablo `$/`, do ne necesas atribui ĝin al propra variablo.

1. La kongrua objekto tenas la kongruintan tekston; voki `.Str` sur `$/` redonas tiun tekston kiel ordinaran ĉenon. Presi la kongruan objekton rekte estus montrinta `｢base｣` anstataŭe.

{% include nav.html %}
