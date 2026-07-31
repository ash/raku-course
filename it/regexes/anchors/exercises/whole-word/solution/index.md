---
title: 'Soluzione: Una parola intera'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
say 'this is fine' ~~ /<< is >>/;
```

🦋 Trova il programma nel file [whole-word.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/anchors/whole-word.raku).

## Output

```
｢is｣
```

## Commenti

1. Le ancore `<<` e `>>` richiedono un confine di parola da entrambi i lati di `is`.

1. Le lettere `is` stanno anche dentro `this`, ma lì non hanno alcun confine di parola a sinistra, quindi il motore salta quell'occorrenza e riconosce invece la parola `is` che sta da sola.

1. Entrambi i candidati stampano lo stesso `｢is｣`, quindi come fai a sapere quale ha davvero corrisposto? Cambia l'`is` nascosto dentro `this` — per esempio trasforma la stringa in `'thus is fine'`. L'output è ancora `｢is｣`, immutato, il che prova che quell'occorrenza non è mai stata la corrispondenza. Ora cambia invece la parola isolata (diciamo `'this it fine'`) e la corrispondenza sparisce (`Nil`). Puoi anche chiedere alla corrispondenza dove comincia: `('this is fine' ~~ /<< is >>/).from` restituisce `5`, la posizione dell'`is` isolato, non `2`.

{% include nav.html %}
