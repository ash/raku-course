---
title: 'Solution: Променлива our'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
package Config {
    our $port = 8080;
    my  $secret = 42;
}

say $Config::port;
say $Config::secret.defined;
```

🦋 Можете да намерите изходния код във файла [our-variable.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/packages/our-variable.raku).

## Изход

```
8080
False
```

## Коментари

1. `our $port` става част от пространството от имена `Config`, така че е достъпна отвън като `$Config::port`, отпечатвайки `8080`.

1. `my $secret` е лексикална — частна за блока на пакета — така че не е в пространството от имена. Пътят `$Config::secret` не намира нищо, недефинирана стойност, така че `.defined` е `False`. Това е разликата, която `our` прави.

{% include nav.html %}
