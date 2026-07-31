---
title: 'Solutio: Vocales numera'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my $text = 'Programming in Raku';

say +$text.comb(/ <[aeiouAEIOU]> /);
```

🦋 Inveni codicem fontem in archivo [count-vowels.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/count-vowels.raku).

## Exitus

```
6
```

## Commentarii

1. Regex ad `.comb` tradere omne signum congruens reddit. Classis signorum
`<[aeiouAEIOU]>` vocales utroque modo scriptas enumerat.

1. Praefixum `+` indicem resultantem in contextum numericum ponit, longitudinem eius
dans — numerum vocalium.

{% include nav.html %}
