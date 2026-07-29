---
title: 'Solution: Структура на модул'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Оформление

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

## Коментари

1. `META6.json` се намира най-отгоре; изходният код на модула е под `lib/`, като пътят на директорията съответства на частите на името, разделени с `::`.

1. Тестовете се намират под `t/`. С това оформление `zef test .` и `zef install .` работят от горната директория.

{% include nav.html %}
