---
title: 'Решение: Пребройте редовете'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
spurt 'data.txt', "a\nb\nc\nd\n";

say 'data.txt'.IO.lines.elems;
```

🦋 Намерете програмата във файла [count-lines.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/file-handles/count-lines.raku).

## Изход

```
4
```

## Коментари

1. `.IO.lines` връща редовете на файла като списък.

1. `.elems` ги преброява и дава `4`.

{% include nav.html %}
