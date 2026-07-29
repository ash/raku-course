---
title: 'Решение: Дождитесь промиса'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
my @jobs =
    (start { sleep 0.3; 'slow'   }),
    (start { sleep 0.1; 'quick'  }),
    (start { sleep 0.2; 'medium' });

say await @jobs;
```

🦋 Исходный код можно найти в файле [await-a-promise.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/await/await-a-promise.raku).

## Вывод

```
(slow quick medium)
```

## Комментарии

1. Все три задачи стартуют одновременно и спят конкурентно, поэтому вся программа занимает около
`0.3` секунды — длительность самой медленной задачи, а не сумму всех трёх.

1. Хотя `quick` заканчивается первой, а `slow` последней, вывод — `(slow quick medium)`: `await`
возвращает каждый результат на той же позиции, что и его промис в `@jobs`. Порядок завершения
влияет только на то, *когда* `await` вернёт управление, но никогда — на расположение результатов.

{% include nav.html %}
