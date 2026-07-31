---
title: Fasciculus META6
translations_gpt:
---

{% include menu.html %}

Distributio uno archivo in summo directorio suo describitur, `META6.json`. Est JSON simplex quod instrumentis nomen distributionis, versionem, quid praebeat, et a quibus pendeat indicat:

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

Duae claves maximi momenti sunt `provides`, quae unumquodque nomen moduli ad archivum quod eum efficit refert, et `depends`, quae alias distributiones quas haec requirit enumerat.

Archivum in radice dispositionis directorii normalis sedet:

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

Codex moduli sub `lib/` habitat, via directorii partes `::` nominis sequente (`Maths::Simple` -> `lib/Maths/Simple.rakumod`). Probationes sub `t/` habitant. Hac structura et `META6.json` recto, instrumenta distributionem aedificare, probare, et installare possunt.

{% include nav.html %}
