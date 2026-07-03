---
title: The solution of ’The module layout‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Layout

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

## Comments

1. The `META6.json` sits at the top; the module source goes under `lib/`, with its directory path matching the `::` parts of the name.

1. Tests live under `t/`. With this layout, `zef test .` and `zef install .` work from the top directory.

{% include nav.html %}
