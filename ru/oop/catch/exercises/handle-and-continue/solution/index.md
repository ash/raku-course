---
title: 'Решение: Обработайте и продолжите'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
for <ok bad ok> -> $item {
    {
        die 'boom' if $item eq 'bad';
        say "processed $item";

        CATCH {
            default {
                say "skipped ($item): {.message}";
            }
        }
    }
}
```

🦋 Исходный код можно найти в файле [handle-and-continue.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/catch/handle-and-continue.raku).

## Вывод

```
processed ok
skipped (bad): boom
processed ok
```

## Комментарии

1. Фазер `CATCH` находится внутри блока, относящегося к одному элементу, поэтому он обрабатывает
`die` только для этого элемента. Раз исключение обработано там, оно не вырывается наружу и не
останавливает весь цикл.

1. В этом и состоит типичное преимущество `CATCH` перед `try`: сбой на одной итерации решается
на месте, и цикл переходит к следующему элементу. Средний элемент даёт сбой, но два `ok`
всё равно обрабатываются.

{% include nav.html %}
