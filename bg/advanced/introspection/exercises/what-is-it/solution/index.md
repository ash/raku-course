---
title: 'Solution: Какво е това'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my $a = 42;
my $b = 'x';

say $a.WHAT === Int;
say $b.WHAT === Int;
```

🦋 Намерете програмата във файла [what-is-it.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/introspection/what-is-it.raku).

## Резултат

```
True
False
```

## Коментари

1. `$a.WHAT` не е низът `Int`, а действителният типов обект `Int`, така че `=== Int` го сравнява със самия тип и връща `True`.

1. `$b` съдържа низ, така че неговият `WHAT` е `Str`; сравняването му с `Int` дава `False`. Това е, което прави `WHAT` полезен в условия, а не само при отпечатване.

{% include nav.html %}
