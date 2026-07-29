---
title: 'Solution: Форматиран текст'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
=begin pod

=head1 Greeting

Hello, B<world>!

=end pod
```

🦋 Можете да намерите изходния код във файла [formatted-text.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/pod/formatted-text.raku).

## Изход

Стартирайте с `raku --doc`:

```
Greeting

Hello, world!
```

## Коментари

1. `B<world>` маркира думата като удебелена; при визуализиране като обикновен текст тя се показва като нормален текст, но по-богатите формати я показват удебелено.

1. `raku --doc` визуализира Pod, без да изпълнява програмния код.

1. За да видите действително *удебеления текст*, визуализирайте във формат, който поддържа стилове. Инсталирайте форматиращ модул като `Pod::To::HTML` с `zef install Pod::To::HTML`, след което стартирайте `raku --doc=HTML formatted-text.raku`; думата сега ще излезе обвита в HTML елемент `<b>`. Обикновеният текстов изход от `--doc`, за разлика от това, няма начин да покаже удебелен текст, веднъж записан във файл или подаден по тръба.

{% include nav.html %}
