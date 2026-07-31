---
title: Lanĉado de REPL
---

{% include menu.html %}

REPL signifas _Read–eval–print loop_. Ĝi estas enkonstruita ŝelreĝimo, kie vi povas tajpi instrukciojn kaj ricevi interan rezulton sur la ekrano, inkluzive la staton de la variabloj kaj la eliron, kiun via programo generas.

Por starti Rakudo-ŝelon, simple tajpu:

```console
$ raku
Welcome to 𝐑𝐚𝐤𝐮𝐝𝐨™ v2020.10.
Implementing the 𝐑𝐚𝐤𝐮™ programming language v6.d.
Built on MoarVM version 2020.10.

You may want to `zef install Readline` or `zef install Linenoise` or use rlwrap for a line editor

To exit type 'exit' or '^D'
> 
```

La eligo povas dependi de la nuntempe instalita versio de la kompililo. En la supra eligo, la ŝelo rekomendas instali kelkajn modulojn por pli bona uzanta sperto, do vi vidas la respondan mesaĝon.

Fine, estas streketo `>` kie vi povas tajpi vian programon aŭ ĝiajn partojn. La ŝelo kompilos ĝin linion post linio tuj kiam vi premos Enter.

    > say 'Hello, World';
    Hello, World
    > 

{% include nav.html %}