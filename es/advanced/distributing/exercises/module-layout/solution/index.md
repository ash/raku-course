---
title: 'Solution: La estructura del módulo'
translations_gpt:
---

{% include menu.html %}

Aquí hay una posible solución para la tarea.

## Estructura

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

## Comentarios

1. El `META6.json` se ubica en la parte superior; el código fuente del módulo va en `lib/`, con su ruta de directorios coincidiendo con las partes `::` del nombre.

1. Las pruebas se ubican en `t/`. Con esta estructura, `zef test .` y `zef install .` funcionan desde el directorio raíz.

{% include nav.html %}
