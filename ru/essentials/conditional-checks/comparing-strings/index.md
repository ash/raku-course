---
title: Сравнение строк
---

{% include menu.html %}

Сравнение строк использует свой собственный набор операторов:

`eq` | Равно
`ne` | Не равно
`gt` | Больше
`ge` | Больше или равно
`lt` | Меньше
`le` | Меньше или равно

## Примеры

Посмотрите несколько примеров сравнения двух строк:

```raku
say 'alpha' lt 'beta'; # True
say 'word' ne 'Word';  # True
say 'xyz' gt 'xvw';    # True
```

{% assign human=1 %}
{% include nav.html %}
