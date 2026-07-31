---
title: 'Solution: Un file META6'
translations_gpt: La soluzione di 'Un file META6'
---

{% include menu.html %}

Ecco una possibile soluzione al compito.

## Codice

`META6.json`:

```json
{
    "name": "Greet::Simple",
    "version": "0.0.1",
    "description": "A simple greeting module",
    "authors": [ "Your Name" ],
    "license": "Artistic-2.0",
    "depends": [ "JSON::Fast" ],
    "provides": {
        "Greet::Simple": "lib/Greet/Simple.rakumod"
    }
}
```

🦋 Puoi trovare il codice sorgente nel file [META6.json](https://github.com/ash/raku-course/blob/master/exercises/advanced/distributing/a-meta6-file/META6.json).

## Commenti

1. `provides` associa il nome del modulo al file che lo implementa, con il percorso delle directory che corrisponde alle parti separate da `::` nel nome.

1. `depends` elenca le altre distribuzioni di cui questa ha bisogno — qui la singola voce `"JSON::Fast"`. Quando qualcuno installa `Greet::Simple`, gli strumenti scaricheranno prima `JSON::Fast`. Un array vuoto significherebbe nessuna dipendenza.

{% include nav.html %}
