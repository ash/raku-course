---
title: 'Solvo: La modula aranĝo'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Aranĝo

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

## Komentoj

1. La `META6.json` sidas supre; la modula fontkodo iras sub `lib/`, kun ĝia dosieruja vojo kongrua kun la partoj `::` de la nomo.

1. Testoj loĝas sub `t/`. Kun ĉi tiu aranĝo, `zef test .` kaj `zef install .` funkcias el la supra dosierujo.

{% include nav.html %}
