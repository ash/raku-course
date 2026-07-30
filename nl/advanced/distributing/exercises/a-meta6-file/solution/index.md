---
title: 'Oplossing: Een META6-bestand'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

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

🦋 Je kunt de broncode vinden in het bestand [META6.json](https://github.com/ash/raku-course/blob/master/exercises/advanced/distributing/a-meta6-file/META6.json).

## Opmerkingen

1. `provides` koppelt de modulenaam aan het bestand dat hem implementeert, waarbij het pad van de map overeenkomt met de `::`-delen van de naam.

1. `depends` somt de andere distributies op die deze nodig heeft — hier het enkele item `"JSON::Fast"`. Als iemand `Greet::Simple` installeert, halen de tools eerst `JSON::Fast` binnen. Een lege array zou betekenen: geen afhankelijkheden.

{% include nav.html %}
