---
title: Розв'язання вправи «Hyper-відображення»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
say <apple banana pear cherry>.hyper.map(*.uc).grep(*.chars > 4).join(' ');
```

🦋 Знайдіть програму у файлі [hyper-map.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/hyper-race/hyper-map.raku).

## Вивід

```
APPLE BANANA CHERRY
```

## Коментарі

1. `.hyper` виконує весь ланцюжок — `map`, що переводить у верхній регістр, і `grep`, що фільтрує за довжиною — на кількох потоках, паралельно.

1. Оскільки `.hyper` зберігає порядок, слова, що вціліли, залишаються у своїй початковій послідовності, тож `.join(' ')` дає `APPLE BANANA CHERRY`. Слово `pear`, у якому лише чотири літери, відкинуто.

{% include nav.html %}
