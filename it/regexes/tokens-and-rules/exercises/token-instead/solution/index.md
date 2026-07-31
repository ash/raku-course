---
title: 'Soluzione: Regex contro token'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my regex r { \d+ '5' }
my token t { \d+ '5' }

say so '12345' ~~ / <r> /;
say so '12345' ~~ / <t> /;
```

🦋 Trova il programma nel file [token-instead.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/tokens-and-rules/token-instead.raku).

## Output

```
True
False
```

## Commenti

1. Nel `regex`, `\d+` afferra dapprima tutto `12345`, poi **torna sui propri passi** — restituendo il `5` finale perché il `5` letterale possa corrispondere. Quindi il regex riesce.

1. Il `token` rifiuta di restituire alcunché: `\d+` tiene tutto `12345`, il `5` letterale non trova più nulla e il token fallisce. Questo comportamento senza backtracking è esattamente il motivo per cui `token` è la scelta predefinita giusta dentro le grammatiche.

{% include nav.html %}
