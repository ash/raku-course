---
title: 'Solution: Dump di un hash'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my %h = beta => 2, alpha => 1;
dd %h;
```

🦋 Puoi trovare il codice sorgente nel file [dump-a-hash.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/dd/dump-a-hash.raku).

## Output

```
{:alpha(1), :beta(2)}
```

## Commenti

1. `dd` stampa l'hash in una forma simile a codice, con ogni coppia come `:chiave(valore)`.

1. Le chiavi vengono visualizzate in ordine alfabetico — `alpha` prima di `beta` — anche se `beta` è stato scritto per primo.

{% include nav.html %}
