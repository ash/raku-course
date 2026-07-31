---
title: 'Solution: Un intervallo aperto'
translations_gpt: true
---

{% include menu.html %}

Ecco una possibile soluzione al problema.

## Codice

```raku
say (2, 4 ... *).head(4);
```

🦋 Puoi trovare il codice sorgente nel file [open-range.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/whatever/open-range.raku).

## Output

```
(2 4 6 8)
```

## Commenti

1. I valori iniziali `2, 4` impostano un passo aritmetico di due, e la stella `*` come punto finale significa che la sequenza non termina mai.

1. `head(4)` estrae solo i primi quattro valori, `2, 4, 6, 8`. La sequenza e lazy, quindi la coda illimitata non viene mai calcolata — la stella qui significa "qualsiasi cosa, senza limite superiore".

{% include nav.html %}
