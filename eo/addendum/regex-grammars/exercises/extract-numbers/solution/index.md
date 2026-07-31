---
title: 'Solvo: Eltiru kaj sumu nombrojn'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $text = 'order 12 apples, 3 pears and 25 plums';

my @numbers = $text.comb(/\d+/);

say "numbers: @numbers[]";
say "sum: { [+] @numbers }";
```

🦋 Vi povas trovi la fontkodon en la dosiero [extract-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/regex-grammars/extract-numbers.raku).

## Eligo

```
numbers: 12 3 25
sum: 40
```

## Komentoj

1. Transdoni la regulesprimon `/\d+/` al `.comb` redonas ĉiun serion da ciferoj kiel
apartan ĉenon, ignorante la vortojn inter ili.

1. `[+] @numbers` adicias ilin, konvertante la ciferajn ĉenojn al nombroj survoje.

{% include nav.html %}
