---
title: Debugging con `dd`
translations_gpt:
---

{% include menu.html %}

Esistono diversi modi per eseguire il debug di un programma, da una semplice istruzione di stampa come `say` a strumenti di tracciamento più elaborati. In questa sezione, esamineremo la comoda routine `dd`. È integrata nel compilatore Rakudo, anche se non fa parte dello standard del linguaggio Raku stesso.

Il nome `dd` sta per _data dumper_. A differenza di `say` o `put`, che sono destinati all'output normale del programma, `dd` stampa una rappresentazione del valore adatta allo sviluppatore — la stessa forma simile a codice prodotta dal metodo [`.raku`](/it/advanced/representations/raku-method) della sezione precedente. Scrive sul flusso di errore standard, quindi il suo output non si mescola con i dati che il programma stampa per l'utente.

{% include nav.html %}
