---
title: 'Risinājums: META6 fails'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

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

🦋 Atrodiet programmu failā [META6.json](https://github.com/ash/raku-course/blob/master/exercises/advanced/distributing/a-meta6-file/META6.json).

## Komentāri

1. `provides` attēlo moduļa nosaukumu uz failu, kas to realizē, un direktoriju ceļš atbilst nosaukuma `::` daļām.

1. `depends` uzskaita citas distribūcijas, kas šai vajadzīgas — šeit vienīgo ierakstu `"JSON::Fast"`. Kad kāds instalēs `Greet::Simple`, rīki vispirms pievilks `JSON::Fast`. Tukšs masīvs nozīmētu, ka atkarību nav.

{% include nav.html %}
