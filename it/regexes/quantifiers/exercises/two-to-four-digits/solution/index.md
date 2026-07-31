---
title: 'Soluzione: Da due a quattro cifre'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
say 'abc12345' ~~ / \d ** 2..4 /;
```

🦋 Trova il programma nel file [two-to-four-digits.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/quantifiers/two-to-four-digits.raku).

## Output

```
｢1234｣
```

## Commenti

1. `\d ** 2..4` riconosce da due a quattro cifre di fila.

1. La stringa ha cinque cifre disponibili, ma l'intervallo limita la corrispondenza a quattro, quindi lo schema prende `1234` e lascia il `5` finale. Essendo goloso, prende il massimo che l'intervallo permette invece del minimo.

1. La golosità si applica solo all'interno di una singola corrispondenza: il motore si ferma comunque al **primo** punto in cui lo schema riesce. Anche se una sequenza di cifre più lunga compare più avanti nella stringa, non viene mai raggiunta:

    ```raku
    say 'abc123def6789012z' ~~ / \d ** 2..4 /;   # ｢123｣
    ```

    Qui viene riconosciuto `123` anche se la sequenza successiva `6789012` avrebbe riempito tutto l'intervallo con `6789`. Vince la corrispondenza più a sinistra.

{% include nav.html %}
