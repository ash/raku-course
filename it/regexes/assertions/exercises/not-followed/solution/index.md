---
title: 'Soluzione: Non seguito da'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
say so '50 dollars' ~~ / \d+ >> <!before '%'> /;
```

🦋 Trova il programma nel file [not-followed.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/assertions/not-followed.raku).

## Output

```
True
```

## Commenti

1. `<!before '%'>` è un lookahead negativo: riesce solo quando il testo subito dopo il numero **non** è un `%`.

1. Il `>>` è un confine di parola che segna la **fine** del numero, e qui conta. Senza di esso il goloso `\d+` tornerebbe sui suoi passi: su `50% off` rinuncerebbe allo `0` e riconoscerebbe solo `5` — che *non* è seguito da `%` — quindi lo schema riuscirebbe a torto. `>>` costringe `\d+` a prendere tutto il numero, così il lookahead viene messo alla prova alla fine vera. Di conseguenza `50 dollars` dà `True`, mentre `50% off` dà correttamente `False`.

{% include nav.html %}
