---
title: 'Solvo: Nombrilo'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
sub make-counter($step) {
    my $n = 0;
    return sub { $n += $step };
}

my &count = make-counter(10);
say count();
say count();
say count();
```

🦋 Vi povas trovi la fontkodon en la dosiero [counter.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/closures/counter.raku).

## Eligo

```
10
20
30
```

## Komentoj

1. La fermaĵo kaptas du aferojn el `make-counter`: la parametron `$step` kaj la privatan variablon `$n`. Ambaŭ restas vivaj post kiam `make-counter` revenas.

1. Ĉiu voko aldonas `$step` al `$n` kaj redonas la novan sumon. Nombrilo konstruita kun malsama paŝo antaŭenirus je tiu kvanto anstataŭe.

{% include nav.html %}
