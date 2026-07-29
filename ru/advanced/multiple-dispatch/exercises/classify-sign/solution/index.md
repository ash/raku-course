---
title: 'Решение: Классификация размера'
translations_gpt:
---

{% include menu.html %}

Вот возможное решение задачи.

## Код

```raku
multi sub size(Int $n where $n.abs < 10)  { 'small' }
multi sub size(Int $n where $n.abs < 100) { 'medium' }
multi sub size(Int $n)                    { 'large' }

say size(7);
say size(30);
say size(-250);
```

🦋 Исходный код можно найти в файле [classify-sign.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/multiple-dispatch/classify-sign.raku).

## Вывод

```
small
medium
large
```

## Комментарии

1. Все три кандидата принимают один `Int`, поэтому без конструкций `where` они бы конфликтовали. Условия в первых двух делают их различными, а третий является перехватчиком.

1. Конструкции `where` проверяют `$n.abs`, поэтому результат определяется только абсолютной величиной, а знак игнорируется. `size(7)` совпадает с первым кандидатом (`small`), тогда как `size(-250)` имеет абсолютное значение `250`, которое не проходит оба условия и попадает в перехватчик (`large`).

1. Кандидаты проверяются от наиболее конкретного к наиболее общему — именно в том порядке, в котором они здесь записаны.

{% include nav.html %}
