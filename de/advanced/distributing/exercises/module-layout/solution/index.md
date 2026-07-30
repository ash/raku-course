---
title: 'Solution: Das Modul-Layout'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Layout

```
Greet-Simple/
├── META6.json
├── README.md
├── lib/
│   └── Greet/
│       └── Simple.rakumod
└── t/
    └── 01-basic.rakutest
```

## Kommentare

1. Die `META6.json` befindet sich ganz oben; der Modulquellcode kommt unter `lib/`, wobei der Verzeichnispfad den `::` Teilen des Namens entspricht.

1. Tests liegen unter `t/`. Mit diesem Layout funktionieren `zef test .` und `zef install .` aus dem obersten Verzeichnis.

{% include nav.html %}
