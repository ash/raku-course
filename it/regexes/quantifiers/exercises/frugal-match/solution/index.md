---
title: 'Soluzione: Una corrispondenza frugale'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
say 'say "hi" and "bye"' ~~ / '"' .+? '"' /;
```

🦋 Trova il programma nel file [frugal-match.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/quantifiers/frugal-match.raku).

## Output

```
｢"hi"｣
```

## Commenti

1. Il `?` dopo `.+` rende il quantificatore frugale, quindi riconosce quanti meno caratteri possibile.

1. Si ferma perciò alla prima `"` di chiusura, catturando solo `"hi"`. Un `.+` goloso sarebbe arrivato fino all'ultima `"` e avrebbe riconosciuto `"hi" and "bye"`.

{% include nav.html %}
