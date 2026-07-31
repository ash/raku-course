---
title: 'Solvo: Inicialo kaj familia nomo'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
if 'J Smith' ~~ / $<initial>=(\w) ' ' $<surname>=(\w+) / {
    say ~$<surname>;
}
```

🦋 Vi povas trovi la fontkodon en la dosiero [initial-and-surname.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/captures/initial-and-surname.raku).

## Eligo

```
Smith
```

## Komentoj

1. `$<initial>=(\w)` kaptas unu solan vortan signon; `$<surname>=(\w+)` kaptas la serion de literoj post la spaco.

1. La familia nomo poste estas relegata laŭ nomo kiel `$<surname>`, kaj la prefikso `~` presas ĝin kiel simplan ĉenon; sen ĝi, `say $<surname>` montrus la kongruan objekton kiel `｢Smith｣`.

{% include nav.html %}
