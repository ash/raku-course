---
title: Le grammatiche sono classi
translations_gpt:
---

{% include menu.html %}

Quando scrivi `grammar`, Raku crea qualcosa di molto vicino a una classe. I token sono metodi su di essa, e vale tutto il meccanismo dell'[ereditarietà](/it/oop/inheritance) della parte sugli oggetti. Quindi una grammatica può estenderne un'altra con `is`, proprio come una sottoclasse:

```raku
grammar Base {
    token TOP      { <greeting> }
    token greeting { 'hi' }
}

grammar Loud is Base {
    token greeting { 'HI' }
}

say Loud.parse('HI').defined; # True
say Base.parse('hi').defined; # True
```

`Loud` eredita `TOP` da `Base` ma fornisce il proprio `greeting`. Quando `Loud` analizza, il suo `TOP` chiama `<greeting>`, e viene usato il token sovrascritto in `Loud` — esattamente come funziona un metodo sovrascritto sugli oggetti.

Questo rende componibili le grammatiche. Puoi scrivere una grammatica generale per un formato e poi derivarne una versione specializzata che cambia solo i token diversi, senza copiare il resto.

Persino il `.parse` che continui a chiamare viene da questa natura di classe: ogni grammatica eredita automaticamente da un tipo base incorporato chiamato `Grammar`, che fornisce `.parse` (e il suo cugino a corrispondenza parziale, `.subparse`). Non lo scrivi mai tu: ti arriva gratis, proprio come una classe ordinaria eredita i metodi dalla propria genitrice.

{% include nav.html %}
