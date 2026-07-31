---
title: Palaišana no REPL
---

{% include menu.html %}

REPL nozīmē _Read–eval–print loop_ (lasīt-izpildīt-izdrukāt cilpa). Tā ir iebūvēta čaulas režīms, kurā varat ievadīt instrukcijas un uz ekrāna saņemt starprezultātus, tostarp mainīgo stāvokli un jūsu programmas ģenerēto izvadi.

Lai sāktu Rakudo čaulu, vienkārši ievadiet:

```console
$ raku
Welcome to 𝐑𝐚𝐤𝐮𝐝𝐨™ v2020.10.
Implementing the 𝐑𝐚𝐤𝐮™ programming language v6.d.
Built on MoarVM version 2020.10.

You may want to `zef install Readline` or `zef install Linenoise` or use rlwrap for a line editor

To exit type 'exit' or '^D'
> 
```

Izvade var atšķirties atkarībā no pašlaik instalētās kompilatora versijas. Iepriekš minētajā izvadē čaula iesaka instalēt dažus moduļus labākai lietotāja pieredzei, tāpēc jūs redzat atbilstošo ziņojumu.

Beigās ir uzvednes rakstzīme `>`, kurā varat ievadīt savu programmu vai tās daļas. Čaula to kompilēs pa rindai, tiklīdz nospiedīsiet Enter.

    > say 'Hello, World';
    Hello, World
    > 

{% include nav.html %}