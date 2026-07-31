---
title: 'Solvo: Kodado laŭ serilongo'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $text = 'aaabbbbcc';

my $encoded = '';
for $text ~~ m:g/ (.) $0* / -> $match {
    $encoded ~= $match[0] ~ $match.chars;
}

say $encoded;
```

🦋 Vi povas trovi la fontkodon en la dosiero [run-length.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/run-length.raku).

## Eligo

```
a3b4c2
```

## Komentoj

1. La ŝablono `(.) $0*` kaptas unu signon kaj poste kongruas kun tiom da pliaj
kopioj de ĝi, kiom sekvas — unu tuta serio por ĉiu kongruo. `m:g` kolektas ĉiun serion.

1. Por ĉiu serio, `$match[0]` estas la ripetita litero kaj `$match.chars` estas, kiom
longa la serio estas, do la du kune donas erojn kiel `a3`.

1. Nomi la kongruon per `-> $match` estas laŭvola. Sen tio, ĉiu kongruo fariĝas
la temo `$_`, kaj vi povas forlasi la variablon kaj voki la metodojn sur ĝi rekte:

    ```raku
    my $text = 'aaabbbbcc';
    my $encoded = '';

    for $text ~~ m:g/ (.) $0* / {
        $encoded ~= .[0] ~ .chars;
    }

    say $encoded;
    ```

{% include nav.html %}
