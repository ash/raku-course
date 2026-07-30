---
title: Die META6-Datei
---

{% include menu.html %}

Eine Distribution wird durch eine einzelne Datei in ihrem obersten Verzeichnis beschrieben: `META6.json`. Es handelt sich um einfaches JSON, das den Werkzeugen den Namen der Distribution, die Version, was sie bereitstellt und wovon sie abhängt, mitteilt:

```json
{
    "name": "Maths::Simple",
    "version": "0.0.1",
    "description": "Simple maths helpers",
    "authors": [ "Your Name" ],
    "license": "Artistic-2.0",
    "depends": [],
    "provides": {
        "Maths::Simple": "lib/Maths/Simple.rakumod"
    }
}
```

Die zwei wichtigsten Schlüssel sind `provides`, das jeden Modulnamen auf die Datei abbildet, die ihn implementiert, und `depends`, das andere Distributionen auflistet, die diese benötigt.

Die Datei befindet sich im Stammverzeichnis eines standardmäßigen Verzeichnislayouts:

```
Maths-Simple/
├── META6.json
├── README.md
├── lib/
│   └── Maths/
│       └── Simple.rakumod
└── t/
    └── 01-basic.rakutest
```

Der Modulcode liegt unter `lib/`, wobei der Verzeichnispfad den `::` Teilen des Namens entspricht (`Maths::Simple` → `lib/Maths/Simple.rakumod`). Tests liegen unter `t/`. Mit dieser Struktur und einer korrekten `META6.json` können die Werkzeuge die Distribution bauen, testen und installieren.

{% include nav.html %}
