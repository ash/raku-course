---
title: 'Solution: Il valore di un blocco do'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione al compito.

## Codice

```raku
my $label = do if 7 > 5 { 'big' } else { 'small' };

say $label;
```

🦋 Il codice sorgente è disponibile nel file [do-block.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/statement-prefixes/do-block.raku).

## Output

```
big
```

## Commenti

1. Un `if` semplice è un'istruzione e non ha un valore utilizzabile. Il prefisso `do` trasforma l'intero `if`/`else` in un'espressione.

1. Poiché `7 > 5` è vero, l'espressione produce `'big'`, che viene assegnato a `$label`. Lo stesso trucco funziona con `do given` e `do for`.

1. Le parentesi graffe `{ }` non sono opzionali. L'`if` di Raku richiede sempre un blocco, quindi non potete abbreviare i rami in `if 7 > 5 'big' else 'small'` — questo non compila e dà l'errore *Missing block*.

{% include nav.html %}
