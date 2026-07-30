---
title: 'Solution: Eine META6-Datei'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

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

🦋 Du findest den Quellcode in der Datei [META6.json](https://github.com/ash/raku-course/blob/master/exercises/advanced/distributing/a-meta6-file/META6.json).

## Kommentare

1. `provides` bildet den Modulnamen auf die Datei ab, die ihn implementiert, wobei der Verzeichnispfad den `::` Teilen des Namens entspricht.

1. `depends` listet die anderen Distributionen auf, die diese benötigt — hier der einzelne Eintrag `"JSON::Fast"`. Wenn jemand `Greet::Simple` installiert, ziehen die Werkzeuge zuerst `JSON::Fast` heran. Ein leeres Array würde bedeuten, dass keine Abhängigkeiten bestehen.

{% include nav.html %}
