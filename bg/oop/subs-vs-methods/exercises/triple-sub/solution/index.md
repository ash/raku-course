---
title: 'Решение: Утрояване като подпрограма'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
sub triple($x) {
    $x * 3;
}

say triple(7);
```

🦋 Намерете програмата във файла [triple-sub.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/subs-vs-methods/triple-sub.raku).

## Изход

```
21
```

## Коментари

1. Като подпрограма `triple` е самостоятелна операция: получава стойността, върху която да работи, като аргумент.

1. Съпътстващото упражнение решава същата задача като метод, за да можете да сравните двата подхода.

{% include nav.html %}
