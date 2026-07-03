---
title: The META6 file
---

{% include menu.html %}

A distribution is described by a single file in its top directory, `META6.json`. It is plain JSON that tells the tools the distribution’s name, version, what it provides, and what it depends on:

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

The two keys that matter most are `provides`, which maps each module name to the file that implements it, and `depends`, which lists other distributions this one needs.

The file sits at the root of a standard directory layout:

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

The module code lives under `lib/`, with the directory path matching the `::` parts of the name (`Maths::Simple` → `lib/Maths/Simple.rakumod`). Tests live under `t/`. With this structure and a correct `META6.json`, the tools can build, test, and install the distribution.

{% include nav.html %}
