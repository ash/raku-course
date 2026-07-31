---
title: 'Solution: Classificare la dimensione'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione per questo esercizio.

## Codice

```raku
multi sub size(Int $n where $n.abs < 10)  { 'small' }
multi sub size(Int $n where $n.abs < 100) { 'medium' }
multi sub size(Int $n)                    { 'large' }

say size(7);
say size(30);
say size(-250);
```

🦋 Puoi trovare il codice sorgente nel file [classify-sign.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/multiple-dispatch/classify-sign.raku).

## Output

```
small
medium
large
```

## Commenti

1. Tutti e tre i candidati prendono un singolo `Int`, quindi senza le clausole `where` entrerebbero in conflitto. Le condizioni sui primi due li rendono distinti, e il terzo funge da raccoglitore generale.

1. Le clausole `where` testano `$n.abs`, quindi solo la grandezza determina il risultato e il segno viene ignorato. `size(7)` corrisponde al primo candidato (`small`), mentre `size(-250)` ha un valore assoluto di `250`, che non soddisfa nessuna delle due condizioni e ricade nel raccoglitore generale (`large`).

1. I candidati vengono testati dal piu specifico al piu generale — esattamente nell'ordine in cui sono scritti qui.

{% include nav.html %}
