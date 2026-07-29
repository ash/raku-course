---
title: 'Solution: Ключ и стойност'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my %h = x => 10, y => 20;
say %h<x>:kv;
```

🦋 Можете да намерите изходния код във файла [key-and-value.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/subscript-adverbs/key-and-value.raku).

## Изход

```
(x 10)
```

## Коментари

1. Наречието `:kv` връща както ключа, така и стойността като списък.

1. За хеш ключът е името, с което индексирате, така че `%h<x>:kv` дава списъка `(x 10)`.

{% include nav.html %}
