---
title: Currens ex REPL
---

{% include menu.html %}

REPL significat _Read–eval–print loop_. Est modus testudinis in aedificatus ubi potes instructiones scribere et eventum intermedium in screen videre, inclusa statu variabilium et output quod programma tuum generat.

Ad initium Rakudo testudinis, simpliciter scribe:

```console
$ raku
Welcome to 𝐑𝐚𝐤𝐮𝐝𝐨™ v2020.10.
Implementing the 𝐑𝐚𝐤𝐮™ programming language v6.d.
Built on MoarVM version 2020.10.

You may want to `zef install Readline` or `zef install Linenoise` or use rlwrap for a line editor

To exit type 'exit' or '^D'
> 
```

Output potest dependere a versione compilatoris quae nunc est installata. In output supra, testudo commendat ut aliquos modulos installes pro meliore usore experientia, ita vides nuntium correspondens.

In fine, est character promptus `>` ubi potes scribere programma tuum vel partes eius. Testudo illud lineam per lineam compilabit simul ac premas Enter.

    > dic 'Salve, Munde';
    Salve, Munde
    > 

{% include nav.html %}