---
title: run e shell
translations_gpt:
---

{% include menu.html %}

Ci sono due modi per lanciare un programma esterno. La funzione `run` prende il comando e i suoi argomenti come valori **separati** ed esegue il programma direttamente, senza coinvolgere una shell:

```raku
run 'echo', 'hello';
```

Questo esegue il programma `echo` con il singolo argomento `hello`, che stampa `hello`. Poiché gli argomenti sono passati separatamente, non c'è il rischio che la shell interpreti male spazi o caratteri speciali: `run` è la scelta predefinita sicura.

La funzione `shell`, invece, passa una **singola stringa** alla shell di sistema, che la interpreta. Questo ti permette di usare funzionalità della shell come le pipe e le redirezioni:

```raku
shell 'echo hello | tr a-z A-Z';
```

Qui la shell esegue `echo`, passa il suo output attraverso `tr` e stampa `HELLO`. La comodità viene con un avvertimento: poiché la shell analizza la stringa, costruire un comando `shell` a partire da input non fidato è pericoloso. Preferisci `run` a meno che non ti servano espressamente funzionalità della shell.

Entrambe restituiscono un oggetto `Proc` che descrive come il programma è terminato. Per impostazione predefinita il programma lanciato condivide l'output del tuo programma, quindi ciò che stampa compare sullo schermo. Per catturare invece quell'output, devi chiederlo — ed è l'argomento della prossima pagina.

{% include nav.html %}
