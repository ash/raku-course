---
title: 'Решение: Извлеките число'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
grammar Weight {
    token TOP    { <number> 'kg' { make $<number>.Int } }
    token number { \d+ }
}

say Weight.parse('5kg').made;
```

🦋 Исходный код можно найти в файле [extract-the-number.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/make-and-made/extract-the-number.raku).

## Вывод

```
5
```

## Комментарии

1. Шаблон сопоставляет цифры и буквальное `kg`, но встроенный блок сохраняет только
`$<number>.Int` — целое число, без единицы.

1. `made` читает это значение обратно: настоящую `5`, готовую для вычислений, а не текст `5kg`.
В этом и состоит обычная работа `make` — превратить совпадение в то чистое значение, которое вам
действительно нужно.

{% include nav.html %}
