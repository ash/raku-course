---
title: 'Solution: Индексиране на хеш'
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my %h = a => 1;
say %h<a>;
```

🦋 Можете да намерите пълния код във файла [subscript-a-hash.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/operator-types/subscript-a-hash.raku).

## Резултат

```
1
```

## Коментари

1. Операторът за индексиране `< >` е постциркумфиксен оператор: той следва терм (хеша) и обгражда ключа.

1. `%h<a>` връща стойността, съхранена под ключа `a`, която е `1`.

{% include nav.html %}
