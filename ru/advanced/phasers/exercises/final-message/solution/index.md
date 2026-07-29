---
title: 'Решение: Финальное сообщение'
translations_gpt:
---

{% include menu.html %}

Вот возможное решение задачи.

## Код

```raku
my $count = 0;

END say "processed $count items";

$count++ for 1..3;
```

🦋 Найдите программу в файле [final-message.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/phasers/final-message.raku).

## Вывод

```
processed 3 items
```

## Комментарии

1. Фейзер `END` записан перед циклом, но выполняется последним — после завершения основного кода. К этому моменту `$count` уже был увеличен три раза.

1. Поскольку фейзер замыкается на `$count`, он читает *финальное* значение переменной, а не `0`, которое она содержала в момент появления фейзера в исходном коде. Именно поэтому итоговую информацию обычно помещают в `END`.

{% include nav.html %}
