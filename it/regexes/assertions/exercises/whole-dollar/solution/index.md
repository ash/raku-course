---
title: 'Soluzione: Fra parentesi'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
say '$50' ~~ / <?after '$'> \d+ >> <!before '.'> /;
```

🦋 Trova il programma nel file [whole-dollar.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/assertions/whole-dollar.raku).

## Output

```
｢50｣
```

## Commenti

1. `<?after '$'>` è un lookbehind positivo — richiede un `$` subito prima del numero — e `<!before '.'>` è un lookahead negativo — richiede che **non** segua un `.`. Né il `$` né i dintorni entrano a far parte della corrispondenza, quindi il risultato è solo `50`.

1. Il `>>` è un confine di parola che segna la fine del numero. Senza di esso il goloso `\d+` potrebbe tornare sui suoi passi: su `$39.99` rinuncerebbe al `9` e riconoscerebbe `3` (che non è seguito da `.`). `>>` costringe a prendere tutto il numero, così `$3.99` e `$39.99` correttamente non corrispondono a nulla.

1. Questo è un caso in cui un lookahead si guadagna il pane: non puoi esprimere «non seguito da un punto decimale» con un gruppo di cattura ordinario, perché lì non c'è nulla da catturare — solo una condizione da controllare.

{% include nav.html %}
