---
title: Ausführen von REPL
---

{% include menu.html %}

REPL steht für _Read–eval–print loop_. Es ist ein integrierter Shell-Modus, in dem Sie Anweisungen eingeben und Zwischenergebnisse auf dem Bildschirm erhalten können, einschließlich des Zustands der Variablen und der Ausgabe, die Ihr Programm erzeugt.

Um die Rakudo-Shell zu starten, geben Sie einfach ein:

```console
$ raku
Welcome to 𝐑𝐚𝐤𝐮𝐝𝐨™ v2020.10.
Implementing the 𝐑𝐚𝐤𝐮™ programming language v6.d.
Built on MoarVM version 2020.10.

You may want to `zef install Readline` or `zef install Linenoise` or use rlwrap for a line editor

To exit type 'exit' or '^D'
> 
```

Die Ausgabe kann von der aktuell installierten Version des Compilers abhängen. In der obigen Ausgabe empfiehlt die Shell, einige Module für eine bessere Benutzererfahrung zu installieren, sodass Sie die entsprechende Nachricht sehen.

Am Ende gibt es ein Prompt-Zeichen `>`, an dem Sie Ihr Programm oder Teile davon eingeben können. Die Shell wird es Zeile für Zeile kompilieren, sobald Sie die Eingabetaste drücken.

    > say 'Hello, World';
    Hello, World
    > 

{% include nav.html %}