---
title: Розв'язання вправи «Дочекайтеся обіцянки»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
my @jobs =
    (start { sleep 0.3; 'slow'   }),
    (start { sleep 0.1; 'quick'  }),
    (start { sleep 0.2; 'medium' });

say await @jobs;
```

🦋 Знайдіть програму у файлі [await-a-promise.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/await/await-a-promise.raku).

## Вивід

```
(slow quick medium)
```

## Коментарі

1. Усі три завдання стартують водночас і сплять конкурентно, тож уся програма забирає близько `0.3` секунди — тривалість найповільнішого завдання, а не суму всіх трьох.

1. Хоча `quick` завершується першим, а `slow` останнім, виводом є `(slow quick medium)`: `await` повертає кожен результат на тій самій позиції, що й його обіцянка в `@jobs`. Порядок завершення впливає лише на те, *коли* `await` повернеться, а не на розташування результатів.

{% include nav.html %}
