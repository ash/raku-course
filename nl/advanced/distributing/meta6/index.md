---
title: Het META6-bestand
translations_gpt:
---

{% include menu.html %}

Een distributie wordt beschreven door een enkel bestand in de hoofdmap, `META6.json`. Het is gewone JSON die de gereedschappen de naam, versie, wat het aanbiedt en waar het van afhangt vertelt:

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

De twee belangrijkste sleutels zijn `provides`, die elke modulenaam koppelt aan het bestand dat het implementeert, en `depends`, die andere distributies opsomt die deze nodig heeft.

Het bestand staat in de hoofdmap van een standaard mapstructuur:

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

De modulecode staat onder `lib/`, waarbij het mappad overeenkomt met de `::`-delen van de naam (`Maths::Simple` → `lib/Maths/Simple.rakumod`). Tests staan onder `t/`. Met deze structuur en een correct `META6.json` kunnen de gereedschappen de distributie bouwen, testen en installeren.

{% include nav.html %}
