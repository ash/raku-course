---
title: 'Решение: Обработете и продължете'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

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

🦋 Намерете програмата във файла [handle-and-continue.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/catch/handle-and-continue.raku).

## Изход

```
processed ok
skipped (bad): boom
processed ok
```

## Коментари

1. Фазерът `CATCH` е вътре в блока за отделния елемент, така че обработва `die` само за този един елемент. Понеже изключението е обработено там, то никога не се измъква, за да спре целия цикъл.

1. Това е типичната употреба на `CATCH` пред `try`: провал в една итерация се решава на място, а цикълът продължава със следващия елемент. Средният елемент се проваля, но двата елемента `ok` все пак се обработват.

{% include nav.html %}
