---
title: META6 fails
translations_gpt:
---

{% include menu.html %}

Distribūciju apraksta viens fails tās augšējā direktorijā — `META6.json`. Tas ir vienkāršs JSON, kas rīkiem pasaka distribūcijas nosaukumu, versiju, ko tā nodrošina un no kā tā ir atkarīga:

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

Divas svarīgākās atslēgas ir `provides`, kas attēlo katru moduļa nosaukumu uz failu, kurš to realizē, un `depends`, kas uzskaita citas distribūcijas, kuras šai ir vajadzīgas.

Fails atrodas standarta direktoriju izkārtojuma saknē:

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

Moduļa kods dzīvo zem `lib/`, un direktoriju ceļš atbilst nosaukuma `::` daļām (`Maths::Simple` → `lib/Maths/Simple.rakumod`). Testi dzīvo zem `t/`. Ar šādu struktūru un pareizu `META6.json` rīki var distribūciju būvēt, testēt un instalēt.

{% include nav.html %}
