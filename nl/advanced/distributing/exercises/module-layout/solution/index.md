---
title: 'Oplossing: De indeling van een module'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Indeling

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

## Opmerkingen

1. De `META6.json` staat bovenaan; de broncode van de module komt onder `lib/`, waarbij het pad van de map overeenkomt met de `::`-delen van de naam.

1. Tests staan onder `t/`. Met deze indeling werken `zef test .` en `zef install .` vanuit de bovenste map.

{% include nav.html %}
