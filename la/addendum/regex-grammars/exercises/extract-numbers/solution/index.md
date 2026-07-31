---
title: 'Solutio: Numeros extrahe et summa'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my $text = 'order 12 apples, 3 pears and 25 plums';

my @numbers = $text.comb(/\d+/);

say "numbers: @numbers[]";
say "sum: { [+] @numbers }";
```

🦋 Inveni codicem fontem in archivo [extract-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/regex-grammars/extract-numbers.raku).

## Exitus

```
numbers: 12 3 25
sum: 40
```

## Commentarii

1. Regex `/\d+/` ad `.comb` tradere omnem seriem cifrarum ut catenam separatam
reddit, verbis interiectis neglectis.

1. `[+] @numbers` eos addit, catenas cifrarum in numeros inter agendum vertens.

{% include nav.html %}
