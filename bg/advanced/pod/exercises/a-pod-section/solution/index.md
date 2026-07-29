---
title: 'Solution: Секция в Pod'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
=begin pod

=head1 My Module

This module does something useful.

=end pod

say $=pod[0].contents.elems;
```

🦋 Можете да намерите изходния код във файла [a-pod-section.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/pod/a-pod-section.raku).

## Изход

```
2
```

## Коментари

1. `$=pod` съдържа Pod на файла като списък от блокове; `$=pod[0]` е единственият блок `=begin pod`.

1. Неговото `.contents` са блоковете, вложени вътре в него — заглавието `=head1` и параграфът — така че `.contents.elems` е `2`. Навлизането в структурата по този начин е начинът, по който програмата чете собствената си документация като данни.

{% include nav.html %}
