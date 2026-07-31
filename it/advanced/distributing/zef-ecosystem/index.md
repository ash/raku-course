---
title: zef e l'ecosistema
translations_gpt: zef e l'ecosistema
---

{% include menu.html %}

`zef` è l'installer di moduli di Raku. Lo hai già usato per installare moduli per nome; funziona anche su una directory di distribuzione locale. Dall'interno di una distribuzione puoi testarla e installarla direttamente:

```
zef test .
zef install .
```

`zef test .` esegue i file sotto `t/`, e `zef install .` installa la distribuzione nel tuo Raku in modo che altri programmi possano usarla con `use`. Installare per nome — `zef install Cro` — fa la stessa cosa, ma prima scarica la distribuzione dall'ecosistema.

Per **pubblicare** la tua distribuzione in modo che altri possano installarla per nome, la carichi nell'ecosistema. Lo strumento più comune per farlo è `fez`:

```
fez upload
```

Questo confeziona la distribuzione corrente e la invia all'ecosistema Raku, dopodiché `zef install Maths::Simple` funzionerà per chiunque.

> Questi comandi richiedono `zef`/`fez` installati e l'accesso alla rete, e il caricamento richiede un account nell'ecosistema.

Quindi il ciclo di vita di un modulo condiviso è: organizzarlo con un `META6.json`, testarlo con `zef test` e pubblicarlo con `fez upload`. Da quel momento in poi è semplicemente un altro nome che chiunque può installare con `zef install`.

{% include nav.html %}
