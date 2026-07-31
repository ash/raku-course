---
title: 'Solvo: Sumu ĝis pli ol cent'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $sum = 0;
my $n   = 0;

loop {
    $n++;
    $sum += $n;
    last if $sum > 100;
}

say "reached $sum after adding 1..$n";
```

🦋 Vi povas trovi la fontkodon en la dosiero [sum-until.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/control-logic/sum-until.raku).

## Eligo

```
reached 105 after adding 1..14
```

## Komentoj

1. Nuda `loop { }` ripetiĝas eterne; la `last if $sum > 100` estas tio, kio finas
ĝin, tuj kiam la sumo transiras la sojlon.

1. `1 + 2 + … + 14` estas `105`, la unua parta sumo super `100`, do la buklo haltas
kun `$n` je `14`.

1. Vi povas kontroli tiun sumon per [redukto](/eo/advanced/metaoperators/reduction):

    ```raku
    say [+] 1..14; # 105
    ```

{% include nav.html %}
