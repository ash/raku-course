---
title: 'Solutio: Codificatio per longitudinem seriei'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my $text = 'aaabbbbcc';

my $encoded = '';
for $text ~~ m:g/ (.) $0* / -> $match {
    $encoded ~= $match[0] ~ $match.chars;
}

say $encoded;
```

🦋 Inveni codicem fontem in archivo [run-length.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/run-length.raku).

## Exitus

```
a3b4c2
```

## Commentarii

1. Exemplar `(.) $0*` unum signum capit deinde tot copias eius quot sequuntur
congruit — unam totam seriem per congruentiam. `m:g` omnem seriem colligit.

1. Pro unaquaque serie, `$match[0]` littera repetita est et `$match.chars` quam longa
series sit, itaque duo simul elementa ut `a3` dant.

1. Congruentiam per `-> $match` nominare optionale est. Sine eo, unaquaeque congruentia
thema `$_` fit, et variabilem omittere et methodos in eo directe vocare potes:

    ```raku
    my $text = 'aaabbbbcc';
    my $encoded = '';

    for $text ~~ m:g/ (.) $0* / {
        $encoded ~= .[0] ~ .chars;
    }

    say $encoded;
    ```

{% include nav.html %}
