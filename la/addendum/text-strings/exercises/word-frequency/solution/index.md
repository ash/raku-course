---
title: 'Solutio: Frequentia verborum'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my $text = 'the cat sat on the mat the cat';

my %freq;
%freq{$_}++ for $text.words;

for %freq.sort({ -.value, .key }) -> $pair {
    say "{$pair.key}: {$pair.value}";
}
```

🦋 Inveni codicem fontem in archivo [word-frequency.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/word-frequency.raku).

## Exitus

```
the: 3
cat: 2
mat: 1
on: 1
sat: 1
```

## Commentarii

1. `$text.words` verba dat; `%freq{$_}++` calculum pro unoquoque auget, clavem
primo conspectu creans.

1. Per `-.value` ordinare frequentissimum primum ponit; `.key` ut campum ordinandi
secundum addere aequalitates alphabetice dirimit, itaque ordo plene determinatus est.

{% include nav.html %}
