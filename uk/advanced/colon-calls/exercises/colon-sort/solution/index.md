---
title: 'Розв''язання: Сортування з двокрапкою'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
my @words = <pear fig apple kiwi>;
say @words.sort: *.chars;
```

🦋 Вихідний код можна знайти у файлі [colon-sort.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/colon-calls/colon-sort.raku).

## Вивід

```
(fig pear kiwi apple)
```

## Коментарі

1. Двокрапка передає ключ сортування до `sort`, і дужки навколо нього не потрібні.

1. `*.chars` — це вираз Whatever, який означає «кількість символів кожного елемента». `sort` використовує його як ключ, тож слова виходять від найкоротшого: `fig` (3), потім `pear` і `kiwi` (4), потім `apple` (5).

1. `pear` залишається попереду `kiwi`, бо вони однакової довжини, а `sort` є стійким і зберігає початковий порядок рівних ключів.

{% include nav.html %}
