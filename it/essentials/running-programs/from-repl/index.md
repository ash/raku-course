---
title: Esecuzione da REPL
---

{% include menu.html %}

REPL sta per _Read–eval–print loop_. È una modalità shell integrata dove puoi digitare istruzioni e ottenere risultati intermedi sullo schermo, inclusi lo stato delle variabili e l'output generato dal tuo programma.

Per avviare la shell di Rakudo, basta digitare:

```console
$ raku
Welcome to 𝐑𝐚𝐤𝐮𝐝𝐨™ v2020.10.
Implementing the 𝐑𝐚𝐤𝐮™ programming language v6.d.
Built on MoarVM version 2020.10.

You may want to `zef install Readline` or `zef install Linenoise` or use rlwrap for a line editor

To exit type 'exit' or '^D'
> 
```

L'output può dipendere dalla versione del compilatore attualmente installata. Nell'output sopra, la shell consiglia di installare alcuni moduli per una migliore esperienza utente, quindi vedi il messaggio corrispondente.

Alla fine, c'è un carattere di prompt `>` dove puoi digitare il tuo programma o le sue parti. La shell lo compilerà riga per riga non appena premi Invio.

    > say 'Hello, World';
    Hello, World
    > 

{% include nav.html %}