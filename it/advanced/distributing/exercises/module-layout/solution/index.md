---
title: 'Solution: Il layout del modulo'
translations_gpt: La soluzione di 'La struttura del modulo'
---

{% include menu.html %}

Ecco una possibile soluzione al compito.

## Struttura

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

## Commenti

1. Il `META6.json` si trova alla radice; il codice sorgente del modulo va sotto `lib/`, con il percorso delle directory che corrisponde alle parti separate da `::` nel nome.

1. I test si trovano sotto `t/`. Con questa struttura, `zef test .` e `zef install .` funzionano dalla directory principale.

{% include nav.html %}
