---
title: 'Soluzione: Un segno facoltativo'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
say '-42' ~~ / '-'? \d+ /;
```

🦋 Trova il programma nel file [optional-sign.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/quantifiers/optional-sign.raku).

## Output

```
｢-42｣
```

## Commenti

1. La parte `'-'?` riconosce un segno meno facoltativo — zero o uno.

1. `\d+` riconosce poi la sequenza di cifre. Lo stesso schema riconosce anche un numero senza segno, come `42`.

{% include nav.html %}
