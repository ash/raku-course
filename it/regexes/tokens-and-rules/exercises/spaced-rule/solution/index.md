---
title: 'Soluzione: Una regola con spazi'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
grammar Phrase {
    rule TOP   { <word> <word> <word> }
    token word { \w+ }
}

say Phrase.parse('the quick fox').defined;
```

🦋 Trova il programma nel file [spaced-rule.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/tokens-and-rules/spaced-rule.raku).

## Output

```
True
```

## Commenti

1. Poiché `TOP` è una `rule`, ogni spazio scritto fra le chiamate `<word>` richiede dello spazio bianco nell'input.

1. La stringa `'the quick fox'` ha spazi fra tutte e tre le parole, quindi viene analizzata. Con un `token` per `TOP`, gli spazi nello schema verrebbero ignorati e l'analisi fallirebbe.

{% include nav.html %}
