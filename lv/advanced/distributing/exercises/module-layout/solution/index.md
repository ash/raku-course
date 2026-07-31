---
title: 'Risinājums: Moduļa izkārtojums'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Izkārtojums

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

## Komentāri

1. `META6.json` atrodas pašā augšā; moduļa pirmkods nonāk zem `lib/`, un tā direktoriju ceļš atbilst nosaukuma `::` daļām.

1. Testi dzīvo zem `t/`. Ar šādu izkārtojumu `zef test .` un `zef install .` darbojas no augšējās direktorijas.

{% include nav.html %}
