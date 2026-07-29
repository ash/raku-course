---
title: 'Решение: Порядок END'
translations_gpt:
---

{% include menu.html %}

Вот возможное решение задачи.

## Код

```raku
END say 'first END';
END say 'second END';

say 'body';
```

🦋 Найдите программу в файле [end-order.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/phasers/end-order.raku).

## Вывод

```
body
second END
first END
```

## Комментарии

1. Оба фейзера `END` выполняются после основного кода, поэтому `body` выводится первым.

1. Несколько фейзеров `END` выполняются в порядке «последним пришёл — первым ушёл»: `second END`, объявленный позже, выполняется раньше, чем `first END`. Это отражает типичную логику очистки, при которой сначала отменяется последнее действие.

{% include nav.html %}
