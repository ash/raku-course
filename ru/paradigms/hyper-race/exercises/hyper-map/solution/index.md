---
title: 'Решение: map с hyper'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
say <apple banana pear cherry>.hyper.map(*.uc).grep(*.chars > 4).join(' ');
```

🦋 Исходный код можно найти в файле [hyper-map.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/hyper-race/hyper-map.raku).

## Вывод

```
APPLE BANANA CHERRY
```

## Комментарии

1. `.hyper` выполняет всю цепочку — `map`, переводящий в верхний регистр, и `grep`, отбирающий
по длине, — параллельно в нескольких потоках.

1. Поскольку `.hyper` сохраняет порядок, уцелевшие слова остаются в исходной последовательности,
и `.join(' ')` даёт `APPLE BANANA CHERRY`. Слово `pear`, в котором всего четыре буквы,
отбрасывается.

{% include nav.html %}
