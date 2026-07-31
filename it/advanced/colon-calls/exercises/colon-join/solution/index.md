---
title: 'Solution: Join con due punti'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione al compito.

## Codice

```raku
say <a b c>.reverse.join: '-';
```

🦋 Puoi trovare il codice sorgente nel file [colon-join.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/colon-calls/colon-join.raku).

## Output

```
c-b-a
```

## Commenti

1. `.reverse` mantiene la sua forma ordinaria perché si trova nel mezzo della catena. `join` viene per ultimo, quindi può usare i due punti, passando `'-'` esattamente come farebbe `join('-')`.

1. La lista invertita in `c, b, a` viene poi unita con dei trattini, dando `c-b-a`. La forma con i due punti funziona con valori ordinari, non solo con i blocchi.

{% include nav.html %}
