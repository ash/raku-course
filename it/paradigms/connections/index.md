---
title: Stabilire connessioni remote
translations_gpt:
---

{% include menu.html %}

L'ultima sottoparte del corso passa alla programmazione _web_: parlare con altre macchine attraverso la rete. Costruiamo dal basso: una connessione di rete grezza, poi un semplice client HTTP, un semplice server HTTP e infine uno sguardo al framework Cro.

A differenza del resto del corso, questi esempi hanno bisogno di una **connessione di rete** per girare, e gli ultimi hanno bisogno di moduli che installi tu. Il codice è scritto per compilare e per funzionare quando lo esegui contro un server vero, ma il suo output non può essere mostrato come quello degli esempi non in rete. Ogni pagina segnala di che cosa ha bisogno.

Cominciamo dal fondamento di tutto il codice di rete: un _socket_, il tubo a due vie fra due programmi attraverso una rete.

{% include nav.html %}
