---
title: 'Solvo: Gramatiko por plenaj nomoj'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
grammar FullName {
    token TOP   { <first> \s+ <last> }
    token first { \w+ }
    token last  { \w+ }
}

my $match = FullName.parse('Grace Hopper');

say ~$match<first>;
say ~$match<last>;
```

🦋 Vi povas trovi la fontkodon en la dosiero [grammar-fullname.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/regex-grammars/grammar-fullname.raku).

## Eligo

```
Grace
Hopper
```

## Komentoj

1. La ĵetono `TOP` estas tie, kie la analizo komenciĝas; ĝi referencas la aliajn
ĵetonojn laŭ nomo per `<first>` kaj `<last>`, kiuj fariĝas ŝlosiloj sur la kongruo.

1. `$match<first>` estas kongrua objekto; la prefikso `~` ĉenigas ĝin al la simpla
kongruita teksto.

{% include nav.html %}
