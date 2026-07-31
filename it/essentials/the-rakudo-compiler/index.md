---
title: Il compilatore Rakudo
translations_gpt:
---

{% include menu.html %}

**Rakudo** è l'implementazione di riferimento di Raku ed è il compilatore usato in questo corso. Oggi è il modo più completo e più collaudato di eseguire Raku, quindi quando si dice «il compilatore Raku» di solito si intende Rakudo.

Rakudo è a sua volta scritto in gran parte in Raku, insieme a un linguaggio di bootstrap più piccolo chiamato NQP («Not Quite Perl»). Compila il tuo programma in bytecode e lo esegue su una macchina virtuale chiamata **MoarVM**, che ottieni automaticamente installando Rakudo. Poiché Rakudo punta a coprire l'intero linguaggio, è la scelta più sicura quando hai bisogno che ogni angolo di Raku funzioni.

Rakudo implementa Raku 6.d e viene rilasciato spesso, quindi correzioni e nuove funzionalità ti raggiungono in fretta.

## La macchina virtuale

Per impostazione predefinita Rakudo gira su MoarVM, una macchina virtuale costruita appositamente per Raku. Il progetto non lega Rakudo a una sola macchina — può anche essere costruito sopra altre macchine virtuali — ma MoarVM è il bersaglio standard e ben supportato, ed è quello che questo corso presuppone. È qui la differenza principale rispetto a [Raku++](/it/essentials/the-rakupp-compiler), che è scritto in C++ e non ha bisogno di alcuna macchina virtuale.

## Codice sorgente e collegamenti

Rakudo è open source e viene sviluppato allo scoperto:

* [rakudo.org](https://rakudo.org)
* [Rakudo su GitHub](https://github.com/rakudo/rakudo)
* [moarvm.org](https://moarvm.org)

{% include nav.html %}
