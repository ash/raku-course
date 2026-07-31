---
title: 'Soluzione: Estraete il numero'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
grammar Weight {
    token TOP    { <number> 'kg' { make $<number>.Int } }
    token number { \d+ }
}

say Weight.parse('5kg').made;
```

🦋 Trova il programma nel file [extract-the-number.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/make-and-made/extract-the-number.raku).

## Output

```
5
```

## Commenti

1. Lo schema riconosce le cifre e il letterale `kg`, ma il blocco in linea conserva solo `$<number>.Int` — l'intero, senza l'unità.

1. `made` rilegge quel valore: un vero `5`, pronto per i calcoli, invece del testo `5kg`. È questo il compito tipico di `make` — trasformare una corrispondenza nel valore pulito che vuoi davvero.

{% include nav.html %}
