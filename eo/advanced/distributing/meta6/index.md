---
title: La dosiero META6
translations_gpt:
---

{% include menu.html %}

Distribuo estas priskribata de unu sola dosiero en sia supra dosierujo, `META6.json`. Ĝi estas simpla JSON, kiu diras al la iloj la nomon de la distribuo, la version, kion ĝi provizas, kaj de kio ĝi dependas:

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

La du ŝlosiloj, kiuj plej gravas, estas `provides`, kiu mapas ĉiun modulan nomon al la dosiero, kiu realigas ĝin, kaj `depends`, kiu listigas aliajn distribuojn, kiujn ĉi tiu bezonas.

La dosiero sidas ĉe la radiko de norma dosieruja aranĝo:

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

La modula kodo loĝas sub `lib/`, kun la dosieruja vojo kongrua kun la partoj `::` de la nomo (`Maths::Simple` → `lib/Maths/Simple.rakumod`). Testoj loĝas sub `t/`. Kun ĉi tiu strukturo kaj ĝusta `META6.json`, la iloj povas konstrui, testi kaj instali la distribuon.

{% include nav.html %}
