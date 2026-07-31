---
title: Il metodo `.raku`
---

{% include menu.html %}

Il terzo metodo di rappresentazione, `.raku`, restituisce una stringa con una rappresentazione del valore **simile al codice** — idealmente, una stringa che potresti incollare di nuovo in un programma per ricreare lo stesso valore. Ogni valore in Raku lo possiede.

```raku
say 42.raku;        # 42
say 'Raku'.raku;    # "Raku"
say (1, 2, 3).raku; # (1, 2, 3)
```

Nota come la stringa `'Raku'` viene restituita con le virgolette attorno, così puoi distinguere a colpo d'occhio un numero da una stringa — esattamente il tipo di dettaglio che vuoi durante il debug.

Il metodo funziona anche per dati composti, incluse le strutture annidate:

```raku
my @data = 1, [2, 3], 4;
say @data.raku; # [1, [2, 3], 4]
```

Poiché `.raku` restituisce una stringa ordinaria, puoi usarlo ovunque sia prevista una stringa, ad esempio all'interno di un messaggio interpolato:

```raku
my @data = 10, 20, 30;
say "The data is { @data.raku }";
# The data is [10, 20, 30]
```

Usa `.raku` ogni volta che vuoi quella rappresentazione simile al codice come stringa da combinare con i tuoi messaggi. Molto presto introdurremo `dd`, uno strumento di Rakudo che stampa lo stesso tipo di rappresentazione in un solo passaggio.

{% include nav.html %}
