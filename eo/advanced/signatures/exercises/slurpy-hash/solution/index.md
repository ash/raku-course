---
title: 'Solvo: Englutaj nomitaj argumentoj'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
sub describe($name, *%opts) {
    my $details = %opts.sort.map({ "{.key}={.value}" }).join(', ');
    "$name: $details";
}

say describe('Anna', colour => 'red', size => 5);
```

🦋 Vi povas trovi la fontkodon en la dosiero [slurpy-hash.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/signatures/slurpy-hash.raku).

## Eligo

```
Anna: colour=red, size=5
```

## Komentoj

1. La fiksita pozicia parametro `$name` estas plenigita unue, kaj la engluta `*%opts` poste kolektas ĉiun restantan nomitan argumenton en hakon.

1. `%opts.sort` ordigas la parojn laŭ ŝlosilo, do la eligo estas determinita — `colour` venas antaŭ `size`. La `.map` transformas ĉiun paron en ĉenon `key=value` per `.key` kaj `.value`, kaj `.join(', ')` gluas ilin kune.

1. La fina ĉeno interpolas `$name` kaj la kunmetitan `$details`, produktante `Anna: colour=red, size=5`.

{% include nav.html %}
