---
title: El archivo META6
translations_gpt:
---

{% include menu.html %}

Una distribución se describe mediante un único archivo en su directorio raíz, `META6.json`. Es JSON simple que indica a las herramientas el nombre de la distribución, la versión, lo que proporciona y de qué depende:

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

Las dos claves más importantes son `provides`, que mapea cada nombre de módulo al archivo que lo implementa, y `depends`, que lista las otras distribuciones que este necesita.

El archivo se ubica en la raíz de una estructura de directorios estándar:

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

El código del módulo reside en `lib/`, con la ruta de directorios coincidiendo con las partes `::` del nombre (`Maths::Simple` → `lib/Maths/Simple.rakumod`). Las pruebas se ubican en `t/`. Con esta estructura y un `META6.json` correcto, las herramientas pueden construir, probar e instalar la distribución.

{% include nav.html %}
