---
title: 'Solution: Изтрийте ключ'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my %h = a => 1, b => 2, c => 3;
%h<b>:delete;
say %h.elems;
```

🦋 Можете да намерите изходния код във файла [delete-a-key.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/subscript-adverbs/delete-a-key.raku).

## Изход

```
2
```

## Коментари

1. Наречието `:delete` премахва записа от хеша (тук игнорираме стойността, която се връща).

1. Хешът е започнал с три записа и сега има `2`, което потвърждава, че един е бил премахнат. Броенето с `.elems` прави изхода предвидим, без да зависи от реда на ключовете.

{% include nav.html %}
