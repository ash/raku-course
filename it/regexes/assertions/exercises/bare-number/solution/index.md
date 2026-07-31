---
title: 'Soluzione: Un numero nudo'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
say '5 and $9' ~~ / <!after '$'> \d+ /;
```

🦋 Trova il programma nel file [bare-number.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/assertions/bare-number.raku).

## Output

```
｢5｣
```

## Commenti

1. `<!after '$'>` è un lookbehind negativo: riesce solo quando il carattere immediatamente prima della posizione corrente **non** è un `$`. Controlla quel vicino senza consumarlo.

1. Il `9` viene rifiutato perché sta subito dopo un `$`, quindi il motore riconosce invece il `5` precedente, davanti al quale non c'è nulla.

{% include nav.html %}
