---
title: 'Solvo: Dosiero META6'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

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

🦋 Vi povas trovi la fontkodon en la dosiero [META6.json](https://github.com/ash/raku-course/blob/master/exercises/advanced/distributing/a-meta6-file/META6.json).

## Komentoj

1. `provides` mapas la modulan nomon al la dosiero, kiu realigas ĝin, kun la dosieruja vojo kongrua kun la partoj `::` de la nomo.

1. `depends` listigas la aliajn distribuojn, kiujn ĉi tiu bezonas — ĉi tie la sola ero `"JSON::Fast"`. Kiam iu instalas `Greet::Simple`, la iloj unue enportos `JSON::Fast`. Malplena tabelo signifus neniujn dependecojn.

{% include nav.html %}
