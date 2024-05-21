---
title: Running from REPL
---

{% include menu.html %}

REPL staat voor _Read–eval–print loop_. Het is een ingebouwde shell-modus waarin je instructies kunt typen en tussentijdse resultaten op het scherm kunt zien, inclusief de status van de variabelen en de uitvoer die je programma genereert.

Om de Rakudo-shell te starten, typ je eenvoudig:

```console
$ raku
Welcome to 𝐑𝐚𝐤𝐮𝐝𝐨™ v2020.10.
Implementing the 𝐑𝐚𝐤𝐮™ programming language v6.d.
Built on MoarVM version 2020.10.

You may want to `zef install Readline` or `zef install Linenoise` or use rlwrap for a line editor

To exit type 'exit' or '^D'
> 
```

De uitvoer kan afhangen van de momenteel geïnstalleerde versie van de compiler. In de bovenstaande uitvoer beveelt de shell aan om enkele modules te installeren voor een betere gebruikerservaring, dus zie je het bijbehorende bericht.

Aan het einde is er een promptkarakter `>` waar je je programma of delen ervan kunt typen. De shell zal het regel voor regel compileren zodra je op Enter drukt.

    > say 'Hello, World';
    Hello, World
    > 

{% include nav.html %}