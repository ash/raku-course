---
title: 'Решение: Подсчёт в мультимножестве'
translations_gpt:
---

{% include menu.html %}

Вот одно из возможных решений этой задачи.

## Код

```raku
my $words = bag('the cat sat on the mat'.words);

say $words<the>;
say $words.total;
```

🦋 Исходный код можно найти в файле [bag-count.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/sets-bags-mixes/bag-count.raku).

## Вывод

```
2
6
```

## Комментарии

1. `'the cat sat on the mat'.words` создаёт шесть слов, а `bag` подсчитывает каждое из них. Обращение по индексу `<the>` возвращает, сколько раз встретилось слово `the` — дважды.

1. Метод `total` суммирует все счётчики, что равно количеству слов, помещённых в мультимножество, — `6`.

{% include nav.html %}
