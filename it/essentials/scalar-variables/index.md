---
title: Variabili scalari
---

{% include menu.html %}

Finora, i programmi che abbiamo visto avevano stringhe di testo hardcoded. Introduciamo un po' di libertà e permettiamo al programma di usare variabili.

Ci sono diversi tipi di variabili in Raku. Una variabile è un contenitore che può contenere dei dati. Inizieremo con i contenitori più semplici che possono contenere solo un singolo valore. Tali contenitori sono chiamati _scalari_ o variabili scalari. Una variabile ha un nome prefissato con un indicatore speciale che indica la natura del contenitore. Tale indicatore è un carattere chiamato _sigillo_. Per i contenitori scalari, tale sigillo è un carattere dollaro `$`.

Ecco un paio di esempi di variabili scalari:

```raku
$name

$age
```

{% include nav.html %}