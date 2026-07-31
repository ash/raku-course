---
title: Il metodo `.gist`
---

{% include menu.html %}

Il metodo `.gist` restituisce una rappresentazione del valore **leggibile per l'uomo** — la forma che vorresti *leggere*. È esattamente ciò che `say` (e `note`) stampano: chiamano `.gist` su ogni argomento.

```raku
say 42.gist;     # 42
say 'Raku'.gist; # Raku
```

Per valori semplici, il gist è semplicemente il valore stesso. Per dati composti, `.gist` aggiunge un po' di formattazione in modo che la struttura resti leggibile:

```raku
my @a = 'alpha', 'beta', 'gamma';
say @a.gist; # [alpha beta gamma]
```

Un oggetto tipo — un valore che rappresenta il tipo stesso — viene mostrato da gist come il suo nome tra parentesi, il che lo rende facile da individuare nell'output:

```raku
say Int.gist; # (Int)
```

{% include nav.html %}
