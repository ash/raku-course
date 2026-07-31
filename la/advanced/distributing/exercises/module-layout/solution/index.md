---
title: 'Solutio: Dispositio moduli'
translations_gpt:
---

{% include menu.html %}

Hic est possibilis solutio ad munus.

## Dispositio

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

## Commentarii

1. `META6.json` in summo sedet; fons moduli sub `lib/` collocatur, via directorii partes `::` nominis sequente.

1. Probationes sub `t/` habitant. Hac dispositione, `zef test .` et `zef install .` ex summo directorio operantur.

{% include nav.html %}
