---
title: "L'ambiente"
translations_gpt:
---

{% include menu.html %}

Ogni programma viene avviato con un insieme di _variabili d'ambiente_ — valori con un nome come `HOME`, `PATH` o `USER` che il sistema operativo fornisce. In Raku sono disponibili nell'hash dinamico `%*ENV`:

```raku
say %*ENV<HOME>; # the home directory, e.g. /home/anna
```

Leggi una variabile d'ambiente indicizzando `%*ENV` con il suo nome. Poiché è un hash ordinario, puoi anche controllare se una variabile è impostata, o cambiarla per i programmi che lanci:

```raku
%*ENV<GREETING> = 'Hello';
say %*ENV<GREETING>; # Hello
```

Impostare una chiave in `%*ENV` la aggiunge all'ambiente che qualunque programma poi avviato con `run` o `shell` erediterà, ed è così che passi la configurazione a un programma figlio:

```raku
%*ENV<GREETING> = 'Hello';

my $proc = run 'sh', '-c', 'echo $GREETING', :out;
say $proc.out.slurp(:close).chomp; # Hello
```

La variabile viene impostata nell'ambiente del tuo programma *prima* che il figlio venga lanciato, quindi la shell che `run` avvia ha già `GREETING` nel proprio ambiente e può restituirlo con echo. Ogni variabile che imposti in questo modo raggiunge ogni programma che avvii in seguito.

Il twigil `*` ti dice che `%*ENV` è una variabile dinamica, come `$*OUT` della parte su input e output. Alcune altre variabili con l'asterisco descrivono il mondo del programma in esecuzione: `@*ARGS` contiene gli argomenti della riga di comando e `$*PROGRAM-NAME` è il nome dello script stesso. Insieme permettono a un programma di capire il contesto in cui è stato lanciato.

{% include nav.html %}
